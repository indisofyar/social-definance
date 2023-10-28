<template>
    <div class="bg-white rounded-lg p-5  mx-auto shadow-md w-[450px]">
        <div class="flex  text-black">
            <img :src="profileImg" class="w-[60px] h-[60px] rounded-full object-cover">
            <div class="ml-5">
                <div class="font-bold text-lg">{{ title }}</div>
                <div class="text-sm">{{ user }}</div>
            </div>

        </div>
        <div class=" text-black mt-3" v-if="btc">
            {{ btc }}
            {{ timeSeries }}
        </div>
        <div class="mt-2">
            <BarChart />
        </div>
        <button class="btn" @click="getDataFeed('ETH')">ETH
        </button>
    </div>
</template>

<script>
import GetDataFeed from '@/utils/GetDataFeed'
import getTimeSeriesData from '~/utils/GetTimeSeriesData'

export default {
    name: 'PostTimeSeries',
    props: ['profileImg', 'title', 'user', 'content'],
    data() {
        return {
            btc: null,
            timeSeries: null,
        }
    },
    mounted() {
        // const timestamps = [1625097600, 1625184000, 1625270400];
        this.getDataFeed("BTC");
        this.getTimeSeriesData("BTC");
    },
    methods: {
        async getDataFeed(symbol) {
            this.btc = await GetDataFeed(symbol);
            console.log(this.btc)
        },
        async getTimeSeriesData(symbol){
            this.timeSeries = await getTimeSeriesData(symbol);
        }
    }
}
</script>