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
<style scoped>
  .common-layout{
    position: relative;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .el-aside{
    height: 80vh;
    background-color: azure;
  }
  .el-menu{
    border-right: 0;
  }
</style>





