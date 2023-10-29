<template>
  <div>
    <NuxtLayout>
    
      <NuxtPage @set-coin="setCoin($event)" @set-images="images=$event" :coins="coins" :images="images" />
    </NuxtLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coins: ['XRP', 'ETH', 'BTC'],
      images: ['https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo.jpg', 'https://logowik.com/content/uploads/images/ethereum-eth7803.logowik.com.webp', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'],
    }
  },
  methods:{
    setCoin(coins){
      this.coins = coins;
    }
  }
}
</script>
<style>
@import './public/tailwind.css';
</style>