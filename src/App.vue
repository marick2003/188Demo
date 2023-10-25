<template>
  <div>
    <MenuHeader>
      <template v-slot:logo>
        <img src="src/assets/images/header/logo.png" alt="">
      </template>
      <!-- <template v-slot:selectLocal>
          <select v-model="locale">
            <option>zh-CN</option>
            <option>en-US</option>
          </select>
      </template> -->
    </MenuHeader>
    <div class=" mx-auto" :class="fullpath ? '' : 'w-3/4'">
      <RouterView></RouterView>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
  import { ref, reactive, computed} from 'vue'
  import { RouterLink, RouterView, useRouter, onBeforeRouteLeave } from  'vue-router';
  import MenuHeader from '@/components/MenuHeader.vue';
  import Footer from '@/components/Footer.vue'

  const router = useRouter();
  const fullpath = computed(() => {
    const info = router.currentRoute.value.path
    const status = info.includes('myaccount')
    return status
  });
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
