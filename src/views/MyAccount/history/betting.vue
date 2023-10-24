<template>
    <div class="demo">
        <el-image :src="imgUrl" class="img">
                <template #placeholder>
                        <div class="image-slot">Loading<span class="dot">...</span></div>
                </template>
         </el-image>

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
        width: 1616px;
        height: 161px;
        overflow: hidden;
      
    }
</style>