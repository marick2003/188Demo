<template>
    <el-container  >
        <el-header height="70px" class="text-xl font-bold flex items-center bg-white">
            {{ route.name }}
        </el-header>
        <el-container class="justify-center text-left mt-7">
            <el-card class="box-card w-3/5">
                <template #header>
                    <div class="card-header">
                        <span>账户信息</span>
                    </div>
                </template>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div>
                            <div class="">
                                账户名 
                                <p>test2003</p>
                            </div>
                            
                        </div>
                     </el-col>
                    <el-col :span="12">
                        <div>
                            <div>邮箱地址 <span class="checkIcon"></span>
                                <p>mmaarriicckk@gmail.com</p>
                            </div>
                           
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="20">
                        <div>
                            <div>密码</div>
                            <p>*******</p>
                        </div>
                     </el-col>
                </el-row>
            </el-card>
        </el-container>
    </el-container>
    
   
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
const route= useRoute();
</script>
<style scoped>
    .el-header{
        border-bottom: 1px solid #ccc;
    }
    .el-row{
        padding: 10px 0;
    }

</style>