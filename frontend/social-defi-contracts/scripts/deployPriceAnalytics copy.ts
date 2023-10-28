import "@nomicfoundation/hardhat-verify";
import { artifacts, ethers, run } from 'hardhat';
import { PriceAnalyticsLongContract } from '../typechain-types';
const PriceAnalyticsLong: PriceAnalyticsLongContract = artifacts.require('PriceAnalytics');


async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const args: any[] = []
    const priceAnalyticsLong = await PriceAnalyticsLong.new(...args);
    console.log("PriceAnalyticsLong deployed to:", priceAnalyticsLong.address);
    try {

        const result = await run("verify:verify", {
            address: priceAnalyticsLong.address,
            constructorArguments: args,
        })

        console.log(result)
    } catch (e: any) {
        console.log(e.message)
    }
    console.log("Deployed contract at:", priceAnalyticsLong.address)

}
main().then(() => process.exit(0))