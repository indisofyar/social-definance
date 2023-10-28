
import { ethers } from "ethers";
const FLARE_PACKAGE = "@flarenetwork/flare-periphery-contract-artifacts";
const FLARE_RPC = "https://flare-api.flare.network/ext/C/rpc";
import PriceAnalytics from '../PriceAnalytics.json';

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

    // Node to submit queries to.
    const provider = new ethers.JsonRpcProvider(FLARE_RPC);
    const abiData = flare.nameToAbi("PriceAnalytics", "flare").data
    console.log('abi data')
    console.log(abiData)
    // 2. Access the Contract Registry
    const priceAnalyticsData = new ethers.Contract(
        "0x315f623597a55cF174CFD3F46Ea758BDD3640740",
        abiData,
        provider);
    const [_data] = await priceAnalyticsData["getLast5Prices(string)"](_symbol);

    // const [_ftsoHistory] = await ftsoRegistry["getFtsoHistory(uint256)"](_ftsoAssetIndex);

    const response = {
        data: _data,

    };

    return response;
}

export default getTimeSeriesData;