<template>
  <div>
    <MenuHeader>
      <template v-slot:selectLocal>
          <select v-model="locale">
            <option>zh-CN</option>
            <option>en-US</option>
          </select>
      </template>
    </MenuHeader>
    <div class=" mx-auto" :class="currentRouteName== 'HomePage' ? 'w-3/4' : ''">
      <RouterView></RouterView>
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script setup>
import { ref, reactive,computed} from 'vue'
import { RouterLink, RouterView  ,useRouter } from  'vue-router';
import MenuHeader from '@/components/MenuHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue'
const locale = ref('zh-CN');
const router = useRouter();
const currentRouteName = computed(() => router.currentRoute.value.name)
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
