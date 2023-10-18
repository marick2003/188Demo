<template>
    <el-menu
      :default-active="activePath"
      class="el-menu-demo justify-between"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      router
    >
      <div class="flex">
        <el-menu-item :index="item.path" v-for="(item,index) in menuItems">{{item.name}}</el-menu-item>

      </div>

      <!-- <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
      <div class="flex items-center">
        <slot name="selectLocal">
        </slot>
        <el-button class="mx-5">
          Login
        </el-button>
      </div>

    </el-menu>
  </template>
  
  <script  setup>
  import { ref ,onMounted} from 'vue'
  import { useMenu } from '@/untils/useMenu';
  
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const { menuItems, activePath } = useMenu();
  onMounted(()=>{
    console.log(activePath);
  })
  </script>
<style scoped>

</style>