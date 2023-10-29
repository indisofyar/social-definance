<template>
    <div class="flex">


        <div class="mx-auto flex flex-col gap-6">

            <PostTimeSeriesData title="Flare" user="@flare_network" content="Updated data" v-for="(coin,index) in coins" :image="images[index]"
                :coin="coin">
            </PostTimeSeriesData>
            <Post title="John" user="@john_machine"
                profile-img="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
                content="John's profit has increased by 9% these past 3 months"  :chart-data="{
                    labels: ['September', 'October', 'November'],
                        datasets: [{ label: 'Profit', data: [1201, 1100, 1400], backgroundColor: '#4a21ef', }]
                }"  />
            <Post title="Angela" user="@investing_with_angela"
                profile-img="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvbWFufGVufDB8fDB8fHww"
                content="Angela P & L is down 5% these past 5 months" :chart-data="{
                    labels: ['September', 'October', 'November'],
                        datasets: [{ label: 'Profit', data: [100, 50, -84], backgroundColor: '#AA4A44', }]
                }" />
        </div>
        <div>
            <div class="rounded bg-white mx-auto mr-10 p-4">
                <h2 class="text-black text-lg font-bold mb-4">Coin prices</h2>
                <PriceFeed v-for=" c  in  cryptos " :coin=" c "></PriceFeed>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: { coins: { type: Array, default: ['XRP', 'ETH', 'BTC'] }, images: {type:Array,} },
    data() {
        return {
            cryptos: [
                { name: 'BTC', selected: false, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png' },
                { name: 'ETH', selected: false, img: 'https://logowik.com/content/uploads/images/ethereum-eth7803.logowik.com.webp' },
                { name: 'XRP', selected: false, img: 'https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo.jpg' },
                { name: 'SOL', selected: false, img: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png' },
                { name: 'ADA', selected: false, img: 'https://seeklogo.com/images/C/cardano-ada-logo-4B6BADDB43-seeklogo.com.png' },
            ],
        }
    },
    mounted() {
        console.log(this.coins)
    }
}
</script>