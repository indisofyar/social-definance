<template>
    <div v-if="data" class="text-black flex gap-5 items-center mb-2">
        <img :src="coin.img" class="w-[20px] h-[20px] object-contain">
      {{Math.round((data.price + Number.EPSILON) * 100) / 100}}
    </div>
</template>

<script>
import GetDataFeed from '@/utils/GetDataFeed'
import getPriceAnalyticsLong from '~/utils/GetPriceAnalyticsLong';
import getTimeSeriesData from '~/utils/GetTimeSeriesData';

export default {
    name: 'PriceFeed',
    props: [ 'coin'],
    data() {
        return {
            data: null,
        }
    },
    mounted() {
        console.log(this.coin)
        this.getDataFeed(this.coin.name);

    },
    computed: {
        graphData() {
            let arr = [];
            let labels = [];
            const t = this.analytics;

            if (t) {
                arr = t.prices.split(',');
                labels = t.timestamps.split(',')
                for(let i = 0; i < labels.length; i++){
                    labels[i] = this.convertTime(labels[i])
                }
            }
            const obj = {
                labels: labels,
                datasets: [
                    {
                        label: this.coin,
                        backgroundColor: '#4a21ef',
                        data: arr,
                    },
                ],
            };
            return obj;
        },
    },
    methods: {
        async getDataFeed(symbol) {
            this.data = await GetDataFeed(symbol);

        },
    }
}
</script>