
<template>
    <div class="flex bg-gray-100">
        <SideBar />
        <div class="w-full">
            <NavBar></NavBar>
            <div class="container mx-auto mt-10 min-h-[70dvh] pb-10">
                <slot />
            </div>
        </div>

        <!-- <Footer></Footer> -->
    </div>
</template>