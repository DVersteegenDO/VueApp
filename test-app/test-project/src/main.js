import { createApp } from 'vue'
import App from './App.vue'

import ArtistItem from './components/ArtistComponent.vue'
import TimerItem from './components/TimerComponent.vue'

const app = createApp(App)
app.component('artist-item', ArtistItem)
app.component('timer-item', TimerItem)
app.mount('#app')
