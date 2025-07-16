import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ styles: { configFile: 'style.css' } }) // Points to your existing CSS
  ],
  resolve: {
    alias: {
      '@': '/', // Ensures imports work from root
      'vue': 'vue/dist/vue.esm-bundler.js' // Critical for Vuetify
    }
  },
  optimizeDeps: {
    include: ['vuetify'] // Pre-bundle Vuetify
  }
})