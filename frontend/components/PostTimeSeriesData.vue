<template>
    <div class="bg-white rounded-lg p-5  mx-auto shadow-md w-[450px]">
        <div class="flex  text-black">
            <img :src="image" class="w-[60px] h-[60px] rounded-full object-cover">
            <div class="ml-5">
                <div class="font-bold text-lg">{{ coin }}</div>
                <div class="text-sm">@{{ coin }}_updates</div>
            </div>
        </div>
        <!-- <div class=" text-black mt-3">
            {{ btc }}
            {{ timeSeries }}

            {{ analytics }}
        </div> -->
        <div class="mt-2">
            <LineChart :data="graphData" />
        </div>
    </div>
</template>

<script>
import GetDataFeed from '@/utils/GetDataFeed'
import getPriceAnalyticsLong from '~/utils/GetPriceAnalyticsLong';
import getTimeSeriesData from '~/utils/GetTimeSeriesData';

export default {
    name: 'PostTimeSeries',
    props: ['profileImg', 'title', 'user', 'content', 'coin', 'image'],
    data() {
        return {
            btc: null,
            timeSeries: null,
            analytics: null,
        }
    },
    mounted() {
        // // const timestamps = [1625097600, 1625184000, 1625270400];
        // this.getDataFeed("BTC");
        // this.getTimeSeriesData("BTC");
        this.getPriceAnalytics(this.coin);

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
        convertTime(unixTimeStamp) {

            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds
            var date = new Date(unixTimeStamp * 1000);

            // Hours part from the timestamp
            var hours = date.getHours();

            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();

            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        },
        async getDataFeed(symbol) {
            this.btc = await GetDataFeed(symbol);

        },
        async getTimeSeriesData(symbol) {
            this.timeSeries = await getTimeSeriesData(symbol);
        },
        async getPriceAnalytics(symbol) {
            this.analytics = await getPriceAnalyticsLong(symbol);

        }
    }
}
</script>