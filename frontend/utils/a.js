const { ethers } = require("ethers");

async function getLast5Prices(token) {
  const ftsoRegistryAddress = "0x..."; // Address of the Flare FTSO Registry contract
  const ftsoRegistryAbi = [...]; // ABI of the Flare FTSO Registry contract

  const provider = new ethers.providers.JsonRpcProvider("https://..."); // Ethereum or Flare network RPC endpoint
  const ftsoRegistry = new ethers.Contract(ftsoRegistryAddress, ftsoRegistryAbi, provider);

  const ftsoAddress = await ftsoRegistry.getFtsoBySymbol(token);
  const ftsoAbi = [...]; // ABI of the Flare FTSO contract
  const ftso = new ethers.Contract(ftsoAddress, ftsoAbi, provider);

  const [
    firstEpochStartTs,
    submitPeriodSeconds,
    revealPeriodSeconds
  ] = await ftso.getPriceEpochConfiguration();

  const epochNow = Math.floor((Date.now() / 1000 - firstEpochStartTs) / submitPeriodSeconds);
  let epoch = epochNow - 1;
  if (Date.now() / 1000 - epochNow * submitPeriodSeconds < revealPeriodSeconds) {
    epoch -= 1;
  }

  const num = 5;
  const prices = [];
  for (let i = 0; i < num; i++) {
    const price = await ftso.getEpochPrice(epoch - i);
    prices.push(price);
  }

  const sum = prices.reduce((acc, price) => acc + price, 0);
  const mean = sum / num;
  const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / num;

  return { prices, mean, variance };
}

// Usage example
getLast5Prices("tokenSymbol").then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});