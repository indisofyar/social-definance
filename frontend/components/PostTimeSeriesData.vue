<template>
    <div class="bg-white rounded-lg p-5  mx-auto shadow-md w-[450px]">
        <div class="flex  text-black">
            <img :src="profileImg" class="w-[60px] h-[60px] rounded-full object-cover">
            <div class="ml-5">
                <div class="font-bold text-lg">{{ title }}</div>
                <div class="text-sm">{{ user }}</div>
            </div>

        </div>
        <div class=" text-black mt-3">
            {{ content }}
        </div>
        <div class="mt-2">
            <BarChart />
        </div>
    </div>
</template>
<script>
export default {
    name: 'PostTimeSeries',
    props: ['profileImg', 'title', 'user', 'content']
}
</script>