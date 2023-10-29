# SocialDefi
SocialDefi is an app which allows users to keep up to date with changes in the crypto space and follow other users and track changes in their profit and loss. The product aims to enhance transparency around investory profitability, helping people to identify who the largest players in the market are.

![Product screenshot](/frontend/assets/product-screenshot.png "Product screenshot")

Demo website: https://socialdefi-efc33.web.app/selectCoins
Video: https://www.canva.com/design/DAFyoUEbCIc/t1646xye5FbBA2F3YxJQkQ/watch?utm_content=DAFyoUEbCIc&utm_campaign=designshare&utm_medium=link&utm_source=editor

## How Flare was utilised
Several smart contracts were deployed on the testnet as part of development, 

### Planned features
Some features were not able to be completed within the bounds of the hackathon. This includes the ability to calculate a wallets profit and loss within a given time period based on their past transaction history, as well as more in-depth price change history as to provide more informative updates to users. 

## Code structure
The main contracts utilised is in /frontend/social-defi-contracts/contracts:

1. PriceAnalyticsLong.sol: This is called by /frontend/utils/GetPriceAnalyticsLong.js to fetch price changes for a certain symbol across Epochs. This is available on https://coston-explorer.flare.network/address/0x0A2e622f9a99c5EAC00629A191f68328470041B1

2. /frontend/utils/GetDataFeed.js also gets the prices of different coins

3. /frontend/pages/profile.vue also calls apis on the coston networ to get transaction address history











