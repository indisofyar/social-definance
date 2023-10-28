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
            {{ provider }}
            {{ signer }}
        </div>
        <div class="mt-2">
            <BarChart />
        </div>
    </div>
</template>
<script>
import { ethers } from "ethers";

export default {
    name: 'Ethers',
    props: ['profileImg', 'title', 'user', 'content'],
    data() {
        return {
            provider: null,
            signer: null,
        }
    },
    async mounted() {
        let signer = null;
        let provider;
        if (window.ethereum == null) {

            // If MetaMask is not installed, we use the default provider,
            // which is backed by a variety of third-party services (such
            // as INFURA). They do not have private keys installed so are
            // only have read-only access
            console.log("MetaMask not installed; using read-only defaults")
            provider = ethers.getDefaultProvider()

        } else {

            // Connect to the MetaMask EIP-1193 object. This is a standard
            // protocol that allows Ethers access to make all read-only
            // requests through MetaMask.
            provider = new ethers.BrowserProvider(window.ethereum)

            // It also provides an opportunity to request access to write
            // operations, which will be performed by the private key
            // that MetaMask manages for the user.
            signer = await provider.getSigner();
        }

        this.provider = provider
        this.signer = signer;
    },
    methods: {
    }
}
</script>