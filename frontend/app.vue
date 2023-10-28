<template>
  <div>
    <NuxtLayout>
      <NuxtPage @set-coin="setCoin($event)" :coins="coins" />
    </NuxtLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coins: ['XRP', 'ETH', 'BTC']
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