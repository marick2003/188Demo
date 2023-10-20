<template>
  <div>
    <div class="w-full fixed top-0 left-0 z-[3]">
      <el-menu 
        :default-active="activePath"
        class="el-menu-demo justify-between"
        mode="horizontal"
        background-color="#000"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <div class="flex">
          <el-menu-item v-for="(item, index) in menuItems" :index="item.path">
            {{ $t(item.name) ? $t(item.name) : item.name}}
          </el-menu-item>
        </div>
        <div class="flex items-center">
          <slot name="selectLocal">
          </slot>
          <el-button class="mx-5">
            Login
          </el-button>
        </div>
      </el-menu>
    </div>
  </div>
  <div class="space-occupancy print:hidden header-spacer h-[3.5rem] md:h-[4.5rem] dark"></div>
</template>
  
<script  setup>
import { ref, onMounted } from 'vue'
import { useMenu } from '@/untils/useMenu';

const { menuItems, activePath } = useMenu();

</script>
<style scoped></style>