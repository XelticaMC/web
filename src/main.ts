// import 'normalize.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'voie-pages';

import App from './App.vue';
import NotFound from './components/NotFound.vue';
import * as Themes from './theme';
import { createHead } from '@vueuse/head';

Themes.syncTheme();

const router = createRouter({
	routes: [
		...routes,
		{
			path: '/docs/rule',
			redirect: _ => '/rule',
		},
		{
			path: '/docs/:path(.*)',
			redirect: to => {
				window.location.href = (`https://wiki.craft.xeltica.work/${to.params.path}`);
				return '';
			},
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
	.use(createHead())
	.mount('#app');
