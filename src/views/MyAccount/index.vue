<template>
  <div class="common-layout h-full">
    <el-container class="h-full">
      <el-aside width="265px">
        <el-menu  
        router
        :default-active="defaultActive"
        background-color="#fff"
        text-color="#262626"
        active-text-color="#FF9200"
        class="el-menu-vertical-demo">
          <div class="title  text-xl font-bold">我的账户</div>
          <el-menu-item v-for="item in childrenMenu" :index="item.path"  :route="item.path === 'Statement' ? { path: item.path, query: { tab: 'summarys' } } : { path: item.path }">
            <!-- {{ $t(item.name) ? $t(item.name) : item.name}} -->
            {{ item.name }}
          </el-menu-item>
        
        </el-menu>
      </el-aside>
      <el-main class="h-full p-0 relative bg-gray">
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
  import { ref,computed  } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const menuItems = ref(router.options.routes.filter(item => item.name === 'MyAccount'));
  const filteredItem = menuItems.value.find(item => item.name === 'MyAccount');
  let childrenMenu = ref(filteredItem ? filteredItem.children.filter(e => e.type === "page") : []);
  const activePath=  ref('/')
  router.beforeEach((to, from, next) => {
    activePath.value = to.path;
    next(); // 必须调用 next()，以继续路由导航
  });

  const defaultActive=computed(()=>{
    activePath.value= activePath.value.split('/').reverse()[0];
  });
</script>
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
  min-height: 80vh;
  background-color: #fff;
  border: 1px solid #ccc;
}
.el-menu {
  border-right: 0;
}
.el-menu-item {
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  &.is-active{
    background-color:#FFF8E1;
  }
  &:hover{
    color: #FF9200;
    background-color:#FFF8E1;
  }
}
.el-main{
  --el-main-padding:0;
  height: auto;
}
.title {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
.bg-gray{
  background-color: #f6f6f6;
}
</style>
