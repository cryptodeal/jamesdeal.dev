import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import vercel from '@sveltejs/adapter-vercel';
import { imagetools } from 'vite-imagetools';
import path from 'path';

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
			ssr: {
				noExternal: ['saslprep']
			},
			optimizeDeps: {
				include: ['layercake']
			},
			plugins: [imagetools()]
		}
	}
};

export default config;
