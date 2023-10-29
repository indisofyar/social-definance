# SocialDefi
SocialDefi is an innovative app designed to cater to the needs of cryptocurrency enthusiasts and investors. The app serves as a platform that offers a range of features aimed at enhancing transparency in the crypto space, allowing users to stay informed about market changes and follow other investors to track their profit and loss. The primary goal of SocialDefi is to help users identify and understand the performance of different participants in the crypto market.

![Product screenshot](/frontend/assets/product-screenshot.png "Product screenshot")

Demo website: https://socialdefi-efc33.web.app/selectCoins

Video: https://www.canva.com/design/DAFyoUEbCIc/t1646xye5FbBA2F3YxJQkQ/watch?utm_content=DAFyoUEbCIc&utm_campaign=designshare&utm_medium=link&utm_source=editor

## Key Features
1. Cryptocurrency Tracking: SocialDefi provides users with the capability to track the prices of various cryptocurrencies. This is particularly useful for those who wish to stay updated on market fluctuations and trends.

2. User Following: Users can follow other participants in the crypto space. This feature allows users to create a network and stay updated on the activities and investments of other users they are interested in.

3. Profit and Loss Tracking: One of the central features of SocialDefi is the ability to track the profit and loss of other users. This can help users understand the performance of certain investors and potentially make informed decisions based on this data.

## How Flare was utilised
The project uses Flare on several fronts. Flare FTSO time series data is accessed, price feeds are fetched and using the coston api, it also accesses user data.

1. Price Analytics: The PriceAnalyticsLong smart contract is utilized to fetch price changes for specific cryptocurrencies across different epochs. This data provides users with information about price fluctuations. This is available on https://coston-explorer.flare.network/address/0x0A2e622f9a99c5EAC00629A191f68328470041B1

2. Data Feeds: The app fetches price data for different cryptocurrencies. This data is essential for keeping users informed about price changes.

3. User Profile Data: The app pulls transaction history data from the Coston network to provide users with a comprehensive view of their past activities, wallet balance, and transactions.

### Planned features
Some features were not able to be completed within the bounds of the hackathon. This includes the ability to calculate a wallets profit and loss within a given time period based on their past transaction history, as well as more in-depth price change history as to provide more informative updates to users. 

## Code structure
The main contracts utilised is in /frontend/social-defi-contracts/contracts:

1. PriceAnalyticsLong.sol: This is called by /frontend/utils/GetPriceAnalyticsLong.js to fetch price changes for a certain symbol across Epochs.

2. /frontend/utils/GetDataFeed.js also gets the prices of different coins

3. /frontend/pages/profile.vue also calls apis on the coston networ to get transaction address history

## Busines model
The project aims to attract influential investors in the crypto space. Enabling full transparency of profit and loss helps one to show others that that they are a skilled investor. This enables them to gain social and business influence, helping them to attract job opportunities or opportunities to meet with others. The idea is is that they would be able to sell their time to meet with others through the platform, and SocialDefi would be able to take a fee from this transaction.










