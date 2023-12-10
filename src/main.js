import App from './App.vue';
import router from './router';

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(router)
app.mount('#app')