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
            <button class="btn" @click="goNext" v-if="this.selectedCoins.length > 2">Confirm</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        selectedCoins() {
            const vm = this;
            let arr = []
            for (let i = 0; i < vm.cryptos.length; i++) {
                if (vm.cryptos[i].selected) {
                    arr.push(vm.cryptos[i].name)
                }
            }
            return arr;
        },
        selectedImages() {
            const vm = this;
            let arr = []
            for (let i = 0; i < vm.cryptos.length; i++) {
                if (vm.cryptos[i].selected) {
                    arr.push(vm.cryptos[i].img)
                }
            }
            return arr;
        }
    },
    methods: {
        goNext() {
            const vm = this;
            vm.$emit('setCoin', this.selectedCoins);
            vm.$emit('setImages', this.selectedImages);
            vm.$router.replace('/');
        }
    },
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
    }
}
</script>