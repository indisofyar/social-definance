<template>
    <div class="bg-[#4a21ef]/5 rounded-lg p-5  mx-auto shadow-md w-[450px]">
        <div class="flex  text-black relative">
            <img :src="profileImg" class="w-[60px] h-[60px] rounded-full object-cover">
            <div class="ml-5">
                <div class="font-bold text-lg">{{ title }} <span class="px-2 py-1 bg-[#4a21ef]/20 rounded text-[#4a21ef]/50 uppercase text-xs top-2 right-2 absolute">Automatic update</span></div>
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
    name: 'Post',
    props: ['profileImg', 'title', 'user', 'content']
}
</script>