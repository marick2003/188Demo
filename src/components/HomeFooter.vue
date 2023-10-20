<template>
    <div class="grid grid-cols-12 gap-4 h-40 pt-10 pb-10">
        <div v-for="item in footerData" :key="item.id" class="col-span-12 md:col-span-4 item">
            {{ item.name }}
        </div>
    </div>
</template>
<script setup>
import { ref, reactive} from 'vue'
const footerData = reactive([
    { id: 1, name: 'test', type: 3, title: '五大联赛天天送！', content: []},
    { id: 2, name: 'test', type: 2, title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '},
    { id: 3, name: 'test', type: 1, title: '五大联赛天天送！', content: ' 人人有奖机会难得！奖金，体育免费投注金，至尊厅免费投注金，彩票免费投注金，老虎机免费旋转送给您! '},
])
</script>

<style scoped>
.item {
    background: #fff;
}
</style>