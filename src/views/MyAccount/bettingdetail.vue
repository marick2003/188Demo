<template>
     <el-container  class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center bg-white">
            <div class="top-0 bottom-0 left-0 right-0 flex items-center text-sm !border-none min-h-14 md:min-h-[4.5rem] relative grow isolate"><div class="shrink-0 self-center"><button data-v-435535ef="" type="button" role="button" class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded-full before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12]  w-12 h-12 p-0 place-items-center bg-transparent text-dark--medium hover:text-dark--high shadow-0 flex-[0_0_auto] self-start ml-3 mr-2 cursor-pointer text-secondary text-opacity-80 shrink-0 sm:self-center sm:mt-0 print:hidden" aria-pressed="true" aria-label="button" data-v-wave-boundary="true"><span class="pointer-events-none flex items-center flex-[1_0_auto] justify-center"><div data-v-435535ef="" class="text-opacity-80 star4icons icon-arrow-left"></div></span></button></div><!----><div class="py-2 ml-4 grow"><div data-v-435535ef="" class="hidden text-body-2 text-dark--medium md:block"><span data-v-435535ef=""><!----><a data-v-435535ef="" class="cursor-pointer text-inherit hover:text-anchor">我的账户</a></span><span data-v-435535ef=""><span data-v-435535ef="" class="px-3">/</span><a data-v-435535ef="" class="cursor-pointer text-inherit hover:text-anchor">账户记录</a></span><span data-v-435535ef=""><span data-v-435535ef="" class="px-3">/</span><a data-v-435535ef="" class="cursor-pointer text-inherit hover:text-anchor">投注记录</a></span></div><h2 class="line-clamp-2 sm:line-clamp-1 text-h6 md:text-h5 !font-semibold tracking-[-.0175em] text-dark--high"><span data-v-435535ef="" class="leading-tight title line-clamp-2 md:line-clamp-1 grow text-dark-high">真人荷官</span></h2></div><div class="shrink-0 self-center"><button data-v-435535ef="" type="button" role="button" class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12]  h-9 px-4 min-w-16 bg-transparent border border-transparent disabled:!bg-transparent text-anchor flex-[0_0_auto] mr-3 print:hidden hidden md:inline-flex" aria-pressed="true" aria-label="button" data-v-wave-boundary="true"><span class="pointer-events-none flex items-center flex-[1_0_auto] justify-center">打印</span></button></div></div>
        </el-header>
        <el-container class="p-10 text-left mt-7">
            <el-image :src="route.query.type == 'live' ? imgUrl1 : imgUrl2" class="demo">
                <template #placeholder>
                        <div class="image-slot">Loading<span class="dot">...</span></div>
                </template>
            </el-image>
        </el-container>
    </el-container>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
    const route= useRoute();
    const imgUrl1 = new URL('@/assets/images/demo/detail1.jpg', import.meta.url).href
    const imgUrl2 = new URL('@/assets/images/demo/detail2.jpg', import.meta.url).href

</script>