<template>
    <el-container  class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center bg-white">
            {{ route.name }}
        </el-header>
        <el-container class="p-10 text-left mt-7">
            <el-image :src="imgUrl" class="demo">
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
const imgUrl = new URL('@/assets/images/demo/setting.png', import.meta.url).href

</script>
<style scoped>
    .el-header{
        border-bottom: 1px solid #ccc;
    }
    .demo{
        width: 925px;
        height: 174px;
    }
</style>