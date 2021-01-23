// import 'normalize.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'voie-pages';

import App from './App.vue';
import * as Themes from './theme';

Themes.syncTheme();

const router = createRouter({
    routes,
    history: createWebHistory(),
});


createApp(App)
    .use(router)
    .mount('#app');
