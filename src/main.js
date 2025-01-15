import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createApp } from 'vue'
import '@/scss/style.scss';
import VueTablerIcons from 'vue-tabler-icons';

const app = createApp(App)
    app
    .use(router)
    .use(vuetify)
    .use(VueTablerIcons)
    .mount('#app')
