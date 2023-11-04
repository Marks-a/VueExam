import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
// import { useAuthStore } from './auth.js'
// import NavigationComponent from './components/NavigationComponent.vue';
// import Header from "/src/components/HeaderComponent.vue"
// import AudioPlayer from "/src/components/AudioPlayerComponent.vue"
const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(useAuthStore);
// app.component('NavigationComponent', NavigationComponent);
// app.component('Header', Header);
// app.component('AudioPlayer', AudioPlayer);

app.mount('#app')
