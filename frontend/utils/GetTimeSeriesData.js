
import { ethers } from "ethers";
const FLARE_PACKAGE = "@flarenetwork/flare-periphery-contract-artifacts";
const FLARE_RPC = "https://coston-api.flare.network/ext/bc/C/rpc";
// import PriceAnalytics from '../PriceAnalytics.json';
import PriceAnalytics from '../social-defi-contracts/artifacts/contracts/PriceAnalytics.sol/PriceAnalytics.json';

async function getTimeSeriesData(_symbol) {
    _symbol = 'test' + _symbol
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
    
    const abiData = PriceAnalytics.abi
    // 2. Access the Contract Registry
    const priceAnalyticsData = new ethers.Contract(
        "0x315f623597a55cF174CFD3F46Ea758BDD3640740",
        abiData,
        provider);

        
    const [_prices, _timestamps, _mean, _variance] = await priceAnalyticsData["getLast5Prices(string)"](_symbol);
    // const [_ftsoHistory] = await ftsoRegistry["getFtsoHistory(uint256)"](_ftsoAssetIndex);


    const response = {
        prices: _prices.toString(),
        timestamps: _timestamps.toString(),
        mean: _mean.toString(),
        variance: _variance,

    };

    return response;
}

export default getTimeSeriesData;