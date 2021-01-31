// import 'normalize.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'voie-pages';

import App from './App.vue';
import * as Themes from './theme';

Themes.syncTheme();

const router = createRouter({
	routes: [
		...routes,
		{
			path: '/rule',
			redirect: _ => '/docs/rule',
		}
	],
	history: createWebHistory(),
	scrollBehavior(_, __, savedPosition) {
		return new Promise((res) => {
			if (savedPosition) {
				res(savedPosition);
			} else {
				res({ left: 0, top: 0 });
			}
		});
	},
});


createApp(App)
	.use(router)
	.mount('#app');
