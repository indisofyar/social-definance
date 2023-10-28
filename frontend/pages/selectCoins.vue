<template>
    <div class="text-black bg-white w-full fixed top-0 h-full z-10 flex">
        <div class="mx-auto w-[600px] py-10">
            <h2 class="text-2xl font-bold">Welcome to SocialDefi</h2>
            Which cryptocurrencies do you want to follow?
            <div class="flex gap-5 mb-5 mt-5">
                <div v-for="c in cryptos" class="w-[100px] flex justify-center flex-col items-center rounded-lg p-4"
                    :class="{ 'border-2': c.selected }" @click="c.selected = !c.selected">
                    <img :src="c.img" class="w-[80px] h-[80px] object-contain">
                    <div class="text-center">{{ c.name }}</div>
                </div>
            </div>
            <button class="btn" @click="goNext">Confirm</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goNext() {
            let arr = []
            for (let i = 0; i < this.cryptos.length; i++) {
                if (this.cryptos[i].selected) {
                    arr.push(this.cryptos[i].name)
                }
            }
            this.$emit('next', arr);
            this.$router.replace('/')
        }
    },
    data() {
        return {
            cryptos: [
                { name: 'BTC', selected: false, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png' },
                { name: 'ETH', selected: false, img: 'https://logowik.com/content/uploads/images/ethereum-eth7803.logowik.com.webp' },
                { name: 'XRP', selected: false, img: 'https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo.jpg' },
            ],
        }
    }
}
</script>