<template>
    <div class="mx-auto flex flex-col gap-6">
        
        <PostTimeSeriesData title="Flare" user="@flare_network" content="Updated data" v-for="coin in coins" :coin="coin">
        </PostTimeSeriesData>
        <Post title="John" user="@john_machine"
            profile-img="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
            content="Lorem ipsum sit amet" />
        <Post title="John" user="@john_machine"
            profile-img="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
            content="Lorem ipsum sit amet" />
    </div>
</template>
<script>
export default {
    props: { coins: { type: Array, default: ['XRP', 'ETH', 'BTC'] } },
    data() {
        return {
            
        }
    },
    mounted(){
        console.log(this.coins)
    }
}
</script>