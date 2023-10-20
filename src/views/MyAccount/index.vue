<template>
  <div class="common-layout h-full">
    <el-container class="h-full">
      <el-aside width="265px">
        <el-menu router class="el-menu-vertical-demo">
          <div class="title">我的账户</div>

          <a href="/myaccount">
            <el-menu-item> 控制面板 </el-menu-item>
          </a>
          <a href="/Profile">
            <el-menu-item> 个人档案 </el-menu-item>
          </a>
          <a href="/Statement">
            <el-menu-item> 账户记录 </el-menu-item>
          </a>
          <a href="/Settings">
            <el-menu-item> 设置 </el-menu-item>
          </a>
        </el-menu>
      </el-aside>
      <el-main class="h-full">
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.common-layout {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.el-aside {
  height: 80vh;
  background-color: #fff;
  border: 1px solid #ccc;
}
.el-menu {
  border-right: 0;
}
.el-menu-item {
  border-bottom: 1px solid #ccc;
}
.title {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
</style>
