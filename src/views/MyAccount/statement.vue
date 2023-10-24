<template>
 <el-container :direction="vertical" class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center">
            {{ route.name }}
        </el-header>
        <el-container :direction="horizontal" class="p-10  flex-col justify-start  mt-7">
            <el-header> 
                <el-menu
            :default-active="route.fullPath"
            class="el-tab-demo "
            mode="horizontal"
            router
            >
                <el-menu-item v-for="(item, index) in subItems" :index="item.path">
                {{ $t(item.name) ? $t(item.name) : item.name}}
            </el-menu-item>
            </el-menu>
        </el-header>
           
            <el-main class="h-full p-0 relative">
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useMenu } from '@/untils/useMenu';
const { menuItems, activePath } = useMenu();
const filteredItem = menuItems.value.find(item => item.name === "MyAccount");
const subItems = filteredItem.children.find(item => item.name === '账户记录').children;
const route= useRoute();
console.log(route);
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