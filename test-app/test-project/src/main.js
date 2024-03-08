import { createApp } from 'vue'
import App from './App.vue'

import ArtistItem from './components/ArtistComponent.vue'
import TimerItem from './components/TimerComponent.vue'

import ParentItem from './components/ParentComponent.vue'
import ChildItem from './components/ChildComponent.vue'


const app = createApp(App)
app.component('artist-item', ArtistItem)
app.component('timer-item', TimerItem)

app.component('parent-item', ParentItem)
app.component('child-item', ChildItem)

app.mount('#app')
