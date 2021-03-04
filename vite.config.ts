import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import voie from 'vite-plugin-voie';
import Components from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';

export default defineConfig({
	server: {
		port: 4000
	},
	plugins: [
		vue(),
		voie({
			importMode: 'async',
		}),
		Components({
			customComponentResolvers: ViteIconsResolver(),
		}),
		ViteIcons(),
	],
});
