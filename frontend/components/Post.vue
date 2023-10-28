<template>
    <div class="bg-white rounded-lg p-5 w-fit mx-auto shadow-md w-[450px]">
        <div class="flex">
            <img :src="profileImg" class="w-[60px] h-[60px] rounded-full object-cover">
            <div class="ml-5">
                <div class="font-bold text-lg">{{ title }}</div>
                <div class="text-sm">{{ user }}</div>
            </div>

        </div>
        <div>
            {{ content }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Post',
    props: ['profileImg', 'title', 'user', 'content']
}
</script>