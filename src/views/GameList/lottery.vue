<template>
  <header class="flex space-between">
      <ul class="flex w-10/12 text-white">
          <li v-for="item in menuItems" class="w-20 flex items-center justify-center cursor-pointer" :index="item.id">
              {{ item.name }}
          </li>
      </ul>
      <el-input v-model="input2" class="m-2 search-input" placeholder="搜尋" :suffix-icon="Search"/>
  </header>
  <CarouselBanner class="mt-5" :carouselMenu="carouselMenu" :page="'games/lottery'"></CarouselBanner>
  <h1 class="text-white mt-4 text-2xl">继续游戏</h1>
  <ul class="inline-flex s-nav-cube mt-5 gap-4 text-white ml-2">
      <li v-for="(item, index) in gameLIst.slice(0, 2)" :index="item.id" class="m-1 rounded-2xl cursor-pointer">
          <img :src="`src/assets/images/games/lottery/game-${item.id}.webp`" class="object-cover object-center mr-1 rounded-lg h-28 w-28 shrink-0 bg-gradient-to-tr from-black to-gray-700">
          <div class="text-sm">{{ item.name }}</div> 
      </li>
  </ul>
  <h1 class="text-white mt-4 text-2xl">精选游戏</h1>
  <ul class="inline-flex s-nav-cube mt-5 gap-4 text-white ml-2">
      <li v-for="(item, index) in gameLIst" :index="item.id" class="m-1 rounded-2xl cursor-pointer">
          <img :src="`src/assets/images/games/lottery/game-${item.id}.webp`" class="object-cover object-center mr-1 rounded-lg h-28 w-28 shrink-0 bg-gradient-to-tr from-black to-gray-700">
          <div class="text-sm">{{ item.name }}</div> 
      </li>
  </ul>
  <h1 class="text-white mt-4 text-2xl">热门游戏</h1>
  <ul class="inline-flex s-nav-cube mt-5 gap-4 text-white ml-2">
      <li v-for="(item, index) in gameLIst" :index="item.id" class="m-1 rounded-2xl cursor-pointer">
          <img :src="`src/assets/images/games/lottery/game-${item.id}.webp`" class="object-cover object-center mr-1 rounded-lg h-28 w-28 shrink-0 bg-gradient-to-tr from-black to-gray-700">
          <div class="text-sm">{{ item.name }}</div> 
      </li>
  </ul>
  <h1 class="text-white mt-4 text-2xl">热门直播游戏</h1>
  <ul class="inline-flex s-nav-cube mt-5 gap-4 text-white ml-2">
      <li v-for="(item, index) in gameLIst" :index="item.id" class="m-1 rounded-2xl cursor-pointer">
          <img :src="`src/assets/images/games/lottery/game-${item.id}.webp`" class="object-cover object-center mr-1 rounded-lg h-28 w-28 shrink-0 bg-gradient-to-tr from-black to-gray-700">
          <div class="text-sm">{{ item.name }}</div> 
      </li>
  </ul>
  <h1 class="text-white mt-4 text-2xl">游戏供应商</h1>
  <ul class="inline-flex s-nav-cube grid grid-cols-3 gap-4 mt-5 text-white w-3/5 ml-2">
      <li v-for="(item, index) in groupList" :index="item.id" class="w-1/2 flex items-center m-1 rounded-2xl cursor-pointer">
          <img :src="`src/assets/images/games/lottery/lottery-group-${item.id}.webp`" class="object-cover object-center mr-1 rounded-lg h-14 w-14 shrink-0 bg-gradient-to-tr from-black to-gray-700">
          <div>{{ item.name }}</div> 
      </li>
  </ul>
</template>
<script setup>
import { ref, reactive } from 'vue';
import CarouselBanner from '../../components/CarouselBanner.vue';
import { Search } from '@element-plus/icons-vue'

const input2 = ref('')
const menuItems = reactive([{ id: 0, name: '精選'}, { id: 1, name: '所有遊戲'}]);
const carouselMenu = reactive([
  { id: 1, name: '', page: 'home', type: '解鎖任務', title: '富丽厅百家乐锦标赛– 万圣节狂欢', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '},
  { id: 2, name: '', page: 'home', type: '解鎖任務', title: '西方厅- 视频扑克', content: '最高可同时玩100份手牌，享受高达800倍的赢利！'},
  { id: 3, name: '', page: 'home', type: '立即遊戲', title: '富丽厅- 超级维加斯宾果球', content: ' 立即参加百家乐连赢挑战，奖金544,000元等您赢！'},
  { id: 4, name: '', page: 'home', type: '立即遊戲', title: '欧洲厅– 百家乐＆龙虎连赢挑战', content: '立即玩百家乐，每次投注都有机会瓜分1,800,000元奖金！'}
]);

const groupList = reactive([{ id: 0, name: '东南亚彩' }, { id: 1, name: '时时彩' }, { id: 2, name: '幸运5' }, { id: 3, name: '幸运28' }, { id: 4, name: '七星彩' }]);
const gameLIst = reactive([{ id: 0, name: '視頻撲克' }, { id: 1, name: '金庫輪盤' }, { id: 2, name: '百家樂' }, { id: 3, name: '終極輪盤' }, { id: 0, name: '牛牛' }, { id: 1, name: '龍虎' }, { id: 2, name: '骰寶' }, { id: 3, name: '二十一點' }, { id: 0, name: '輪盤' }]);
</script>
<style scoped lang="scss">
.custom-input {
    width: 15%;
}

.custom-input :deep(.el-input__wrapper) {
    font-size: 14px;
    background: transparent;
    border-bottom: 1px solid #aaa;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
}
</style>
