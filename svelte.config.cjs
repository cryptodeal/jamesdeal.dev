const { mdsvex } = require('mdsvex');
const mdsvexConfig = require('./mdsvex.config.cjs');
const node = require('@sveltejs/adapter-node');
//const pkg = require('./package.json');
const { imagetools } = require('vite-imagetools');
const path = require('path');
//const svelte = require('@sveltejs/vite-plugin-svelte');
const vitePluginWindicss = require('vite-plugin-windicss').default;
//const windicssPlugins = vitePluginWindicss()
//const windicssPreprocess = windicssPlugins.find(v => v.name.includes(':css:svelte')).sveltePreprocess

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [mdsvex(mdsvexConfig)],
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
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
			plugins: [
				//svelte(),
				vitePluginWindicss(),
				imagetools()
			]
		}
	}
};
