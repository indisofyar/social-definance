
import { ethers } from "ethers";
const FLARE_PACKAGE = "@flarenetwork/flare-periphery-contract-artifacts";
const FLARE_RPC = "https://coston-api.flare.network/ext/bc/C/rpc";
// import PriceAnalytics from '../PriceAnalytics.json';
import PriceAnalyticsLong from '../social-defi-contracts/artifacts/contracts/PriceAnalyticsLong.sol/PriceAnalyticsLong.json';

async function getPriceAnalyticsLong(_symbol) {
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
    
    const abiData = PriceAnalyticsLong.abi
    // 2. Access the Contract Registry
    const priceAnalyticsData = new ethers.Contract(
        "0xF5AB4C9449CC288bB9106c18B6807f41F2caF79F",
        abiData,
        provider);

        
    const [_prices, _timestamps, _mean, _variance] = await priceAnalyticsData["getAnalyticHistory(string)"](_symbol);
    // const [_ftsoHistory] = await ftsoRegistry["getFtsoHistory(uint256)"](_ftsoAssetIndex);
    console.log('data')
    console.log(_prices,_timestamps,_mean,_variance)
    const response = {
        prices: _prices.toString(),
        timestamps: _timestamps.toString(),
        mean: _mean.toString(),
        variance: _variance.toString(),

    };

    return response;
}

export default getPriceAnalyticsLong;