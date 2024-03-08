import { createApp } from 'vue'
import App from './App.vue'

import KadasterItem from './components/KadasterComponent.vue'

const app = createApp(App)
app.component('kadaster-item', KadasterItem)

app.mount('#app')
