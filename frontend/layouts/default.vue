
<template>
    <div class="flex">
        <SideBar />
        <div class="w-full">
            <NavBar></NavBar>
            <div class="container mx-auto mt-10 min-h-[70dvh]">
                <slot />
            </div>
        </div>

        <!-- <Footer></Footer> -->
    </div>
</template>