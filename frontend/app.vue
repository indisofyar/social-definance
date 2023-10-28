<template>
  <div>
    <NuxtLayout>
      <NuxtPage @set-coin="setCoin($event)" />
    </NuxtLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coins: []
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