import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import vercel from '@sveltejs/adapter-vercel';
import { imagetools } from 'vite-imagetools';
import path from 'path';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig)],
	kit: {
		adapter: vercel(),
		target: '#svelte',
		files: {
			assets: 'src/static'
		},
		vite: {
			resolve: {
				alias: {
					$static: path.resolve('src/static'),
					$images: path.resolve('src/images')
				}
			},
			optimizeDeps: {
				include: ['layercake']
			},
			ssr: {
				external: ['mongodb-client-encryption']
			},
			plugins: [WindiCSS.default(), imagetools()]
		}
	}
};

export default config;
