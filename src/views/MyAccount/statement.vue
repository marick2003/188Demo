<template>
 <el-container  class="h-full absolute w-full">
        <el-header height="70px" class="text-xl font-bold flex items-center bg-white">
            {{ route.name }}
        </el-header>
        <el-container class="flex-col justify-start ">
            <el-tabs v-model="route.query.tab" class="demo-tabs  p-7" @tab-click="handleClick">
                <el-tab-pane label="摘要" name="summarys">
                    <summarys></summarys>
                </el-tab-pane>
                <el-tab-pane label="投注紀錄" name="betting">
                    <betting></betting>
                </el-tab-pane>
                    
            </el-tabs>
        </el-container>
    </el-container>
</template>
<script setup>

import { ref } from 'vue';
import {useRouter, useRoute } from 'vue-router';
import summarys from './history/summary.vue';
import betting from './history/betting.vue';
const route=useRoute();
const router = useRouter();
console.log(route.query)
const handleClick = (tab, event) => {
  router.push({
        path: 'Statement',
        query: {
            tab:tab.props.name
        },
      })
}
</script>
<style scoped lang="scss">
    .el-menu{
        background: transparent;
    }
   .el-header{
    border-bottom: 1px solid #ccc;
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