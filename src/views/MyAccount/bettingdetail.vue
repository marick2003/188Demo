<template>
     <el-container  class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center bg-white">
            <div class="top-0 bottom-0 left-0 right-0 flex items-center text-sm !border-none min-h-14 md:min-h-[4.5rem] relative grow isolate">
                <div class="shrink-0 self-center">
                   
                        <button type="button" @click="()=>{router.go(-1)}" class="" aria-pressed="true" aria-label="button" data-v-wave-boundary="true">
                            <el-icon><ArrowLeft /></el-icon>
                        </button>
                   
                </div><!---->
                <div class="py-2 ml-4 grow">
                            <div data-v-435535ef="" class="hidden text-body-2 text-dark--medium md:block"><span data-v-435535ef=""><!----><a data-v-435535ef="" class="cursor-pointer text-inherit hover:text-anchor">
                        我的账户</a></span><span data-v-435535ef=""><span data-v-435535ef="" class="px-3">/</span><a data-v-435535ef="" class="cursor-pointer text-inherit hover:text-anchor">
                            账户记录</a></span><span data-v-435535ef=""><span data-v-435535ef="" class="px-3">/</span><a data-v-435535ef="" class="cursor-pointer text-inherit hover:text-anchor">
                                投注记录</a></span></div><h2 class="line-clamp-2 sm:line-clamp-1 text-h6 md:text-h5 !font-semibold tracking-[-.0175em] text-dark--high">
                                    <span data-v-435535ef="" class="text-lg font-bold">
                                        {{route.query.type == 'live' ? '真人荷官' : '彩票'}}</span></h2></div><div class="shrink-0 self-center">
                                            <button data-v-435535ef="" type="button" role="button" class="max-w-full s-button false overflow-hidden relative inline-flex items-center justify-center gap-1 outline-none text-button transition-all duration-300 rounded before:absolute before:bg-current before:color-[inherit] before:inset-0 before:opacity-0 before:pointer-events-none before:rounded-[inherit] hover:before:md:opacity-[.04] focus:before:opacity-[.12] active:before:opacity-[.12]  h-9 px-4 min-w-16 bg-transparent border border-transparent disabled:!bg-transparent text-anchor flex-[0_0_auto] mr-3 print:hidden hidden md:inline-flex" aria-pressed="true" aria-label="button" data-v-wave-boundary="true">
                                                <span class="pointer-events-none flex items-center flex-[1_0_auto] justify-center">打印</span></button></div></div>
        </el-header>
        <el-container class=" text-left mt-4">

            <template v-if="route.query.type == 'live'">
                <el-container class="flex-col justify-start ">
                    <el-tabs v-model="activeIndex" class="demo-tabs  p-7" @tab-click="handleClick">
                        <el-tab-pane label="已結算注單" name="one">
                            <detail></detail>
                        </el-tab-pane>
                        <el-tab-pane label="未結算注單" name="two">
                            <detail></detail>
                        </el-tab-pane>
                            
                    </el-tabs>
                </el-container>
            </template>
            <template v-else>
                <el-container class="flex-col justify-start ">
                <el-tabs v-model="activeIndex" class="demo-tabs  p-7" @tab-click="handleClick">
                    <el-tab-pane label="亞洲廳" name="one">
                        <detail></detail>
                    </el-tab-pane>
                    <el-tab-pane label="至尊廳" name="two">
                        <detail></detail>
                    </el-tab-pane>
                    <el-tab-pane label="西方廳" name="three">
                        <detail></detail>
                    </el-tab-pane>
                </el-tabs>
             </el-container>
            </template>


           
        </el-container>
    </el-container>
</template>
<script setup>
import { ref,computed  } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import detail from './history/detail.vue';
    const activeIndex=ref('one');
    const route= useRoute();
    const router= useRouter();
    console.log(route.query.type);
    const handleClick = (tab, event) => {

    }
</script>