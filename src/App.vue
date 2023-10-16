

<template>
  <div>
    <MenuHeader></MenuHeader>
    <RouterView></RouterView>

  </div>
</template>
<script>
  import { RouterLink, RouterView } from  'vue-router';
  import MenuHeader from '@/components/MenuHeader.vue';

  export default{
    setup(){
  
    }
  }
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
