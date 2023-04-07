import { createApp } from 'vue'
import App from './App.vue'
import { WebCounter } from 'vue-ui'
window.customElements.define('web-counter', WebCounter);

import './assets/main.css'

const app = createApp(App)
app.mount('#app')



declare module 'vue' {
  export interface GlobalComponents {
    'LtAspectRatio': typeof import("./components/HelloWorld.vue")['default'],
  }
}