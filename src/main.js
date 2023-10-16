import { createApp } from 'vue'
import { createI18n  } from "vue-i18n";
import zh from "@/assets/language/zh-CN.json";
import en from "@/assets/language/en-US.json";
import { createPinia } from "pinia"
import router from './router'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const  i18n= createI18n({
    globalInjection: true, // 全域注入，讓你在 <template> 可以使用 $t
    legacy: true,         // 讓你可以在 composition API 中使用
    locale: localStorage.getItem("locale") ?? "zh-CN",
    fallbackLocale: "zh-CN",
    messages: {
      "zh-CN": zh,
      "en-US": en,
    }
  });
const app = createApp(App)
app.use(ElementPlus)
app.use(i18n)
app.use(router)
app.use(createPinia());
app.mount('#app')

