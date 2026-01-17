import { createApp } from 'vue'
import App from './App.vue'

// Import CSS
import './assets/main.css'

// Import npm package styles (only packages that have CSS)
import '@aivue/emotion-ui/style.css'
import '@aivue/doc-intelligence/style.css'
import '@aivue/predictive-input/style.css'

// Create and mount the Vue application
createApp(App).mount('#app')
