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
                    <el-table-column prop="date" label="交易類型" width="180" />
                    <el-table-column prop="name" label="支出(RMB)" width="180" />
                    <el-table-column prop="address" label="收入(RMB)" />
                </el-table>
        </el-card>
    </div>
</template>
<script setup>
const imgUrl = new URL('@/assets/images/demo/statement.png', import.meta.url).href;
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
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