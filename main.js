import { createApp } from 'vue'
import App from './App.vue'

// Vuetify setup
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Firebase 11.10.0 setup
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Initialize Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

// Create and mount the Vue app
const app = createApp(App)

// Make Firebase available globally
app.config.globalProperties.$db = db

// Use plugins
app.use(vuetify)
app.mount('#app')