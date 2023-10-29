<template>
    <div class=" p-6 rounded-lg max-w-screen-md xxl:max-w-screen-xl mx-auto text-black">
        <div class="flex items-center mb-4">
            <img :src="profile.avatar" :alt="profile.name" class="w-16 h-16 rounded-full mr-4 object-cover" />
            <div>
                <h2 class="text-2xl font-bold">{{ profile.name }}</h2>
                <p class="text-gray-500">@{{ profile.username }} <span class="text-gray-400 ml-5">{{ address }}</span></p>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-lg">
                <h3 class="text-lg font-bold mb-2">Followers</h3>
                <p class="text-2xl">{{ profile.followers }}</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
                <h3 class="text-lg font-bold mb-2">Following</h3>
                <p class="text-2xl">{{ profile.following }}</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
                <h3 class="text-lg font-bold mb-2">Bio</h3>
                <p class="text-xl">{{ profile.bio }}</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
                <h3 class="text-lg font-bold mb-2">Wallet balance</h3>
                <p class="text-xl">{{ fetchedData }}</p>
            </div>

            <div class="bg-white p-4 rounded-lg" v-if="transactions">
                <h3 class="text-lg font-bold mb-2">Last active</h3>
                <p class="text-xl">{{ formatTimestamp(transactions.result[0].timeStamp) }}</p>
            </div>
            <div class="bg-white p-4 rounded-lg" v-if="transactions">
                <h3 class="text-lg font-bold mb-2">P & L</h3>
                <p class="text-xl">+{{ updatedAmount }} USD</p>
            </div>
            <div class="bg-white p-4 rounded-lg col-span-2" v-if="transactions">
                <h3 class="text-lg font-bold mb-2">Meeting cost</h3>
                <p class="text-sm">This is the cost of someone booking a meeting with you</p>
                <span class="text-xl">300 USD</span> <button class="btn ml-4">Edit</button> 
            </div>


        </div>
        <div v-if="transactions">
            <h2 class="font-bold text-[#4a21ef] text-xl my-5">Transactions</h2>

            <div v-for="t in transactions.result" :key="t.hash" class="bg-white rounded-lg shadow-md p-4 mb-4">
                <div class="flex justify-between mb-2">
                    <div class="font-bold">Block Number:</div>
                    <div>{{ t.blockNumber }}</div>
                </div>
                <div class="flex justify-between mb-2">
                    <div class="font-bold">From:</div>
                    <div>{{ t.from }}</div>
                </div>
                <div class="flex justify-between mb-2">
                    <div class="font-bold">To:</div>
                    <div>{{ t.to }}</div>
                </div>
                <div class="flex justify-between mb-2">
                    <div class="font-bold">Value:</div>
                    <div>{{ t.value }}</div>
                </div>
                <div class="flex justify-between mb-2">
                    <div class="font-bold">Gas Used:</div>
                    <div>{{ t.gasUsed }}</div>
                </div>
                <div class="flex justify-between mb-2">
                    <div class="font-bold">Time Stamp:</div>
                    <div>{{ formatTimestamp(t.timeStamp) }}</div>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            profile: {
                name: 'John Doe',
                username: 'johndoe',
                avatar: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
                followers: 1000,
                following: 500,
                bio: 'Crypto trader and enthusiast',
            },
            fetchedData: null,
            transactions: null,
            address: '0xD13768D4a81d04f30C146E7b0e3de992EEBA6891',
        }
    },
    computed: {
        updatedAmount() {
            let amt = 300;
            const maxVariation = 50;

            const updateAmount = () => {
                const randomVariation = Math.floor(Math.random() * (maxVariation * 2 + 1)) - maxVariation;
                amt = amt + randomVariation;
                setTimeout(updateAmount, 1000);
            };

            updateAmount();

            return amt;
        },
    },
    mounted() {
        const fetchUrl = 'https://coston-explorer.flare.network/api?module=account&action=balance&address=' + this.address;
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                this.fetchedData = (data.result / 10 ** 18).toFixed(3);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        const fetchTwo = 'https://coston-explorer.flare.network/api?module=account&action=txlist&address=' + this.address;
        fetch(fetchTwo)
            .then(response => response.json())
            .then(data => {
                this.transactions = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    methods: {
        formatTimestamp(timestamp) {
            const date = new Date(timestamp * 1000);
            return date.toLocaleString();
        },
    },
};
</script>
  
<style scoped>
/* No custom styles needed as Tailwind CSS classes are used */
</style>