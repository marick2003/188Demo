<template>
  <el-carousel :interval="50000" arrow="always" height="400px" class="col-span-12">
    <el-carousel-item v-for="item in carouselMenu" :key="item">
      <img :src="`src/assets/images/carousel/${item.id}.webp`" alt="">
      <div class="p-16 pb-1 text-white w-full absolute bottom-10 flex justify-between items-center">
        <div class="info-text">
          <h1 class="font-bold text-2xl">{{ item.title }}</h1>
          <div class="info-content">{{ item.content }}</div>
        </div>
        <div class="info-button bg-orange-500 py-2.5 px-3.5 rounded-xl">
          <button>{{ item.type === 1 ? '優惠活動' : '解鎖任務' }}</button>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
  
<script setup>
  import { ref, reactive} from 'vue'
  const carouselMenu = reactive([
    { id: 1, name: '', type: 1, title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '},
    { id: 2, name: '', type: 1, title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '},
    { id: 3, name: '', type: 2, title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '}
  ])
</script>

<style>  
  .el-carousel-item {
    width: 100%; /* 设置 el-carousel-item 的宽度为 100% */
    height: 100%; /* 设置 el-carousel-item 的高度为 100% */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .el-carousel-item img {
    max-width: 100%; /* 设置 img 的最大宽度为 100% */
    max-height: 100%; /* 设置 img 的最大高度为 100% */
    object-fit: contain; /* 图片适应容器，保持纵横比 */
  }
</style>