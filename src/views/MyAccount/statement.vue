<template>
 <el-container  class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center bg-white">
            {{ route.name }}
        </el-header>
        <el-container class="flex-col justify-start ">
            <el-header class="el-tab-demo"> 
                <el-menu
                    :default-active="route.path"
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

</script>
<style scoped lang="scss">
    .el-menu{
        background: transparent;
    }
   .el-header{
    border-bottom: 1px solid #ccc;
   }
    .demo{
        width: 650px;
        height: 200px;
    }
    .el-tab-demo{
        border: 0;
        ul{
           
        }
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
        color: orange!important;
        background-color:transparent;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom: 2px solid orange;
        color: orange!important;
    }
</style>