<template>
    <div class="common-layout h-full">
      <el-container class="h-full">
        <el-aside width="265px">
          <el-menu  
          router
          :default-active="activePath"
          background-color="#fff"
          text-color="#262626"
          active-text-color="#FF9200"
          class="el-menu-vertical-demo">
            <div class="title  text-xl font-bold">我的账户</div>
            <el-menu-item v-for="(item, index) in childrenMenu" :index="item.path">
              {{ $t(item.name) ? $t(item.name) : item.name}}
            </el-menu-item>
          
          </el-menu>
        </el-aside>
        <el-main class="h-full p-0 relative">
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { useMenu } from '@/untils/useMenu';
  const { menuItems, activePath } = useMenu();
  const filteredItem = menuItems.value.find(item => item.name === "MyAccount");
  const childrenMenu = ref(filteredItem ? filteredItem.children : []);
  </script>
  <style scoped lang="scss">
  .common-layout {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .el-aside {
    min-height: 80vh;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .el-menu {
    border-right: 0;
  }
  .el-menu-item {
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    &.is-active{
      background-color:#FFF8E1;
    }
    &:hover{
      color: #FF9200;
      background-color:#FFF8E1;
    }
  }
  .el-main{
    --el-main-padding:0;
    min-height: 80vh;
  }
  .title {
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
  </style>
  