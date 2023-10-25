<template>
    <div class="mx-auto grid grid-cols-12 gap-4">
        <CarouselBanner class="mt-5" :carouselMenu="carouselMenu" :page="'home-main/carousel'"></CarouselBanner>
        <HomeMain class="mt-5 mb-20"></HomeMain>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import CarouselBanner from '../components/CarouselBanner.vue';
import HomeMain from '../components/HomeMain.vue';

const carouselMenu = reactive([
    { id: 1, name: '', type: '優惠活動', title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '},
    { id: 2, name: '', type: '優惠活動', title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '},
    { id: 3, name: '', type: '解鎖任務', title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '}
  ]);
</script>

<style scoped>

</style>