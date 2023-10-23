<template>
    <el-container :direction="vertical" class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center">
            {{ route.name }}
        </el-header>
        <el-container :direction="horizontal" class="p-10 text-left mt-7">
            <el-image :src="src" class="demo">
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
const src='src/assets/images/demo/dashboard.png';
</script>
<style scoped>
    .el-header{
        border-bottom: 1px solid #ccc;
    }
    .demo{
        width: 650px;
        height: 200px;
    }
</style>