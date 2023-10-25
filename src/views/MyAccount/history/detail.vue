<template>
    <div class="demo">
        <el-card class="border shadow-sm  r">
                <template #header>
                <div class="card-header flex items-center justify-between">
                    <div class="text-base font-bold">今日</div>
                    <div class="toolbar">
                        <el-dropdown>
                            <el-icon style="margin-right: 8px; margin-top: 1px"
                            ><setting
                            /></el-icon>
                            <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        
                    </div>
                </div>
                </template>
                <el-table :data="tableData" style="width: 100%">
                   
                    
                </el-table>
        </el-card>
    </div>
</template>
<script setup>
const tableData = [
  
]
</script>
<style scoped lang="scss">
    .el-header{
        border-bottom: 1px solid #ccc;
    }
    .demo{
        width: 1079px;
        height: 757px;
        overflow: hidden;
        .img{
            top: -55px;
            position: absolute;
        }
    }
</style>