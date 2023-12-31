import "@nomicfoundation/hardhat-verify";
import { artifacts, ethers, run } from 'hardhat';
import { PriceAnalyticsLongContract } from '../typechain-types';
const PriceAnalytics: PriceAnalyticsLongContract = artifacts.require('PriceAnalyticsLong');


async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const args: any[] = []
    const priceAnalytics = await PriceAnalytics.new(...args);
    console.log("PriceAnalytics deployed to:", priceAnalytics.address);
    
    try {

        const result = await run("verify:verify", {
            address: priceAnalytics.address,
            constructorArguments: args,
        })

        console.log(result)
    } catch (e: any) {
        console.log(e.message)
    }
    console.log("Deployed contract at:", priceAnalytics.address)

}
main().then(() => process.exit(0))