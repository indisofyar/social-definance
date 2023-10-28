
import { ethers } from "ethers";
const FLARE_PACKAGE = "@flarenetwork/flare-periphery-contract-artifacts";
const FLARE_RPC = "https://flare-api.flare.network/ext/C/rpc";


async function getTimeSeriesData(_symbol) {
    console.log(`Retrieving current price of ${_symbol}...`);

    // 1. Import dependencies
    var ethers, flare;
    if (typeof window === "undefined") {
        // Node.js
        ethers = await import("ethers");
        flare = await import(FLARE_PACKAGE);
    } else {
        // Browser
        ethers = await import("https://esm.run/ethers@6.3");
        flare = await import(`https://esm.run/${FLARE_PACKAGE}`);
    }
    console.log(flare)
    // Node to submit queries to.
    const provider = new ethers.JsonRpcProvider(FLARE_RPC);

    // 2. Access the Contract Registry
    const flareContractRegistry = new ethers.Contract(
        "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019",
        flare.nameToAbi("FlareContractRegistry", "flare").data,
        provider);

    // 3. Retrieve the FTSO Registry
    const ftsoRegistryAddr = await
        flareContractRegistry.getContractAddressByName("FtsoRegistry");
    const ftsoRegistry = new ethers.Contract(
        ftsoRegistryAddr,
        flare.nameToAbi("FtsoRegistry", "flare").data,
        provider);
    

    const [
        firstEpochStartTs,
        submitPeriodSeconds,
        revealPeriodSeconds
    ] = await ftsoRegistry.getPriceEpochConfiguration();

    const epochNow = Math.floor((Date.now() / 1000 - firstEpochStartTs) / submitPeriodSeconds);
    let epoch = epochNow - 1;
    if (Date.now() / 1000 - epochNow * submitPeriodSeconds < revealPeriodSeconds) {
        epoch -= 1;
    }

    const num = 5;
    const prices = [];
    for (let i = 0; i < num; i++) {
        const price = await ftsoRegistry.getEpochPrice(epoch - i);
        prices.push(price);
    }

    const sum = prices.reduce((acc, price) => acc + price, 0);
    const mean = sum / num;
    const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / num;

    return { prices, mean, variance };
}

export default getTimeSeriesData;