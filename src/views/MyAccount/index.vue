<template>
    <div class="common-layout h-full">
      <el-container class="h-full">
        <el-aside width="265px" >
          
          <el-menu class="el-menu-vertical-demo" >
            <div class=" text-2xl font-bold">我的账户</div>
             <el-menu-item>
              控制面板 
             </el-menu-item>
             <el-menu-item>
              个人档案  
             </el-menu-item>
             <el-menu-item>
              账户记录   
             </el-menu-item>
             <el-menu-item>
              设置   
             </el-menu-item>
             <div class="">

             </div>
          </el-menu>
        </el-aside>
        <el-main class=" h-full">
              <RouterView></RouterView>
        </el-main>
      </el-container>
  </div>
</template>
<style>
  .common-layout{
    /* min-height: 70vh; */
  }
</style>





