<template>
    <div class="demo">
        <el-row :gutter="12">
            <el-col :span="8">
            <el-card shadow="hover">
                <router-link :to="{ path: 'BettingDetail', params: { type: 'live' }}">
                     真人荷官
                </router-link>
               
             </el-card>
            </el-col>
            <el-col :span="8">
            <el-card shadow="hover">  <router-link :to="{ path: 'BettingDetail'}">
                彩票
                </router-link> </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
const imgUrl = new URL('@/assets/images/demo/betting.png', import.meta.url).href
</script>
<style scoped lang="scss">
    .el-header{
        border-bottom: 1px solid #ccc;
    }
    .demo{
        width: 100%;
        min-width: 1024px;
    }
</style>