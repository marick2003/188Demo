import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  
  },
  css:{
    preprocessorOptions:{
      scss: {
        additionalData: `@import "@/assets/global.scss";`
      }
    },
    postcss: {
      plugins: [
          postcssNesting,
          tailwindcss
      ],
    },
  }
})
