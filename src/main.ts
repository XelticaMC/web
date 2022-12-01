// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createHead } from '@vueuse/head';

import App from './App.vue';
import { RULE_URL } from './scripts/consts';
import * as Themes from './scripts/theme';

import 'xeltica-ui/dist/css/xeltica-ui.min.css';
import './style.scss';

import routes from '~pages';

Themes.syncTheme();

const router = createRouter({
	routes: [
		...routes,
		{
			path: '/docs/rule',
			redirect: _ => '/rule',
		},
		{
			path: '/rule',
			redirect: () => {
				window.location.href = RULE_URL;
				return '';
			},
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
