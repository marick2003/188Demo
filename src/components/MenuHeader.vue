<template>
  <div>
    <div class="w-full fixed top-0 left-0 z-[3]">
      <el-menu
        :default-active="activePath"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#000"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <slot name="logo"></slot>
        <div class="flex">
          <el-menu-item v-for="(item, index) in menuItems" :index="item.path">
            {{ item.name }}
            <!-- {{ $t(item.name) ? $t(item.name) : item.name }} -->
          </el-menu-item>
        </div>
        <div class="flex items-center">
          <slot name="selectLocal"></slot>
        </div>
      </el-menu>
      <el-button class="absolute top-4 right-4" type="primary" @click="drawer = true">
        <el-icon class="text-white"><Menu /></el-icon>
      </el-button>
      <el-drawer v-model="drawer" :title="drawerTitleTime" class="bg-black text-white" :size="330">
        <div class="user-info s-member-balance bg-black p-4">
          <div class="flex items-center">
            <el-icon class="text-white border-2 border-solid border-white rounded-full" :size="20" color="white"><User /></el-icon>
            <span class="ml-3 basis-1/2">
              <div class="text-xs opacity-70">member99</div>
              <div class="text-sm font-black">RMB 0.00</div>
            </span>
          </div>
          <div class="user-balance text-xs">
            <div class="flex flex-wrap mt-2 text-xs">
              <div class="basis-1/2 opacity-70 mb-1">可提款金額</div>
              <div class="basis-1/2 text-right">RMB 999.99</div>
              <div class="basis-1/2 opacity-70bg-secondary--darken-5 mb-1">未完成流水</div>
              <div class="basis-1/2 text-right">RMB 999.99</div>
            </div>
          </div>
        </div>
        <section class="p-4">
          <div class="text-xl font-semibold">开始游戏</div>
          <ul class="inline-flex s-nav-cube flex flex-wrap mt-5">
            <li
              v-for="game in gameLIst"
              :key="game.id"
              class="m-1 rounded-2xl w-[5.25rem] h-[5.25rem] relative inline-flex items-end p-2 md:hover:bg-secondary--darken-4 bg-secondary cursor-pointer bg-secondary--darken-5"
            >
              <img :src="`src/assets/images/sideBar/game-${game.id}.png`" alt="" class="s-icon icon-font icon-sports text-2xl absolute top-2 left-2">
              {{ game.name }}
            </li>
          </ul>
        </section>
        <ul class="s-list light text-light--high">
          <li v-for="item in list" :key="item.id" :class="{ 'logout': item.id === 99 }" class="s-list-item flex items-center flex-[1_1_100%] tracking-normal min-h-[3rem] relative bg-secondary--darken-5 text-light--high dark px-[1.5rem] md:hover:text-primary capitalize cursor-pointer hover:bg-inherit">
            {{ item.name }}
          </li>
        </ul>
      </el-drawer>
    </div>
  </div>
  <div class="space-occupancy print:hidden header-spacer h-[3.5rem] md:h-[4.5rem] dark"></div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useMenu } from "@/untils/useMenu";

const { menuItems, activePath } = useMenu();
const drawer = ref(false);
const drawerTitleTime = ref("");

const gameLIst = reactive([{ id: 0, name: "体育" },{ id: 1, name: "娱乐场" },{ id: 2, name: "真人荷官" },{ id: 3, name: "虚拟体育" },{ id: 4, name: "彩票" }]);

const list = reactive([
  { id: 0, name: "我的帳戶" },
  { id: 1, name: "支付" },
  { id: 2, name: "通知" },
  { id: 3, name: "信息" },
  { id: 4, name: "優惠" },
  { id: 5, name: "應用程序" },
  { id: 6, name: "幫助" },
  { id: 7, name: "在線客服" },
  { id: 8, name: "關於我們" },
  { id: 9, name: "網站導覽" },
  { id: 99, name: "退出" }
]);

setInterval(() => {
  const currentDateTime = new Date();
  const hours = currentDateTime.getHours().toString().padStart(2, "0");
  const minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentDateTime.getSeconds().toString().padStart(2, "0");
  const timeZone = "(GMT+8:00)";

  const formattedTime = `${hours}:${minutes}:${seconds} ${timeZone}`;
  drawerTitleTime.value = formattedTime;
}, 1000);
</script>
<style scoped>
.bg-secondary--darken-5 {
  --tw-bg-opacity: 1;
  background-color: #333333;
}
.bg-secondary--darken-5:hover {
  background-color: #474747; /* 设置悬停时的背景颜色，可以根据需要替换为其他颜色 */
}
.logout {
  color: red;
}
</style>
