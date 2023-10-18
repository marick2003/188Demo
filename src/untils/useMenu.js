// useMenu.js
import { ref } from 'vue';
import { useRouter,onBeforeRouteUpdate } from 'vue-router';

export function useMenu() {
  const router = useRouter();
  const menuItems = ref(router.options.routes.filter(item=>item.type=='page'));
 const activePath=  ref('/')
  onBeforeRouteUpdate((to) => {
    activePath.value = to.path
  })
  return {
    menuItems,
    activePath,
  };
}
