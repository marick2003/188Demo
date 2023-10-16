import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia"
import router from './router'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

