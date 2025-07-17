import { createApp } from 'vue'
import App from './App.vue'

// Vuetify setup
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import Firebase from the firebase.js module
import { db } from './firebase'

// Initialize Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Create and mount the Vue app
const app = createApp(App)

// Make Firebase available globally
app.config.globalProperties.$db = db

// Use plugins
app.use(vuetify)
app.mount('#app')
