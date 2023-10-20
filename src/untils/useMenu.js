// useMenu.js
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useMenu() {
  const router = useRouter();
  const menuItems = ref(router.options.routes.filter(item => item.type === 'page'));
  const activePath=  ref('/')

  router.beforeEach((to, from, next) => {
    activePath.value = to.path;
    next(); // 必须调用 next()，以继续路由导航
  });
  return {
    menuItems,
    activePath,
  };
}
