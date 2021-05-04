import pkg from 'mdsvex';
const { mdsvex } = pkg;
import { mdsvexConfig } from './mdsvex.config.js';
import node from '@sveltejs/adapter-node';
import pack from 'vite-imagetools';
const { imagetools } = pack;
import path from 'path';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig)],
	kit: {
		adapter: node(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			assets: 'src/static'
		},
		vite: {
			resolve: {
				alias: {
					$static: path.resolve('src/static')
				}
			},
			plugins: [WindiCSS.default(), imagetools()]
		}
	}
};

export default config;
