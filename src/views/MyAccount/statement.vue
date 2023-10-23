<template>
 <el-container :direction="vertical" class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center">
            {{ route.name }}
        </el-header>
        <el-container :direction="horizontal" class="p-10  justify-center  mt-7">
            <el-tabs v-model="activeName" class="" @tab-click="handleClick">
                <el-tab-pane label="User" name="first">User</el-tab-pane>
            </el-tabs>
        </el-container>
    </el-container>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useMenu } from '@/untils/useMenu';
const { menuItems, activePath } = useMenu();
const filteredItem = menuItems.value.find(item => item.name === "MyAccount");
const subItem = filteredItem.children.find(item => item.name === '账户记录');

console.log(subItem);
const route= useRoute();
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