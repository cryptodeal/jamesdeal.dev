import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from '../../src/hooks.js';

const template = ({ head, body }) =>
	'<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<link rel="icon" href="/favicon.ico" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n\t\t' +
	head +
	'\n\t</head>\n\n\t<body>\n\t\t<div id="svelte">' +
	body +
	'</div>\n\t</body>\n</html>\n';

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: '/./_app/start-5f2b5a31.js',
			css: ['/./_app/assets/start-25a78b07.css', '/./_app/assets/vendor-c5979ca8.css'],
			js: [
				'/./_app/start-5f2b5a31.js',
				'/./_app/chunks/vendor-112f5557.js',
				'/./_app/chunks/preload-helper-9f12a5fd.js'
			]
		},
		fetched: undefined,
		floc: false,
		get_component_path: (id) => '/./_app/' + entry_lookup[id],
		get_stack: (error) => String(error), // for security
		handle_error: (error) => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: '#svelte',
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [
		{ file: 'NahNahNah.jpeg', size: 16991, type: 'image/jpeg' },
		{ file: 'favicon.ico', size: 1150, type: 'image/vnd.microsoft.icon' },
		{ file: 'headshot.jpg', size: 9444311, type: 'image/jpeg' },
		{ file: 'headshot1.jpg', size: 9081575, type: 'image/jpeg' },
		{ file: 'prism.css', size: 2091, type: 'text/css' },
		{ file: 'robots.txt', size: 67, type: 'text/plain' },
		{ file: 'test.jpg', size: 15483160, type: 'image/jpeg' }
	],
	layout: 'src/routes/$layout.svelte',
	error: '.svelte-kit/build/components/error.svelte',
	routes: [
		{
			type: 'page',
			pattern: /^\/$/,
			params: empty,
			a: ['src/routes/$layout.svelte', 'src/routes/index.svelte'],
			b: ['.svelte-kit/build/components/error.svelte']
		},
		{
			type: 'endpoint',
			pattern: /^\/articles\.json$/,
			params: empty,
			load: () => import('../../src/routes/articles/index.json.js')
		},
		{
			type: 'page',
			pattern: /^\/articles\/?$/,
			params: empty,
			a: [
				'src/routes/$layout.svelte',
				'src/routes/articles/$layout.svelte',
				'src/routes/articles/index.svelte'
			],
			b: ['.svelte-kit/build/components/error.svelte']
		},
		{
			type: 'page',
			pattern: /^\/articles\/read\/adding-vite-imagetools-to-sveltekit\/?$/,
			params: empty,
			a: [
				'src/routes/$layout.svelte',
				'src/routes/articles/$layout.svelte',
				'src/routes/articles/read/$layout.svelte',
				'src/routes/articles/read/adding-vite-imagetools-to-sveltekit.svx'
			],
			b: ['.svelte-kit/build/components/error.svelte']
		},
		{
			type: 'page',
			pattern: /^\/about\/?$/,
			params: empty,
			a: ['src/routes/$layout.svelte', 'src/routes/about.svelte'],
			b: ['.svelte-kit/build/components/error.svelte']
		},
		{
			type: 'endpoint',
			pattern: /^\/api\/github\/commits\.json$/,
			params: empty,
			load: () => import('../../src/routes/api/github/commits.json.js')
		}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = (hooks) => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	'src/routes/$layout.svelte': () => import('../../src/routes/$layout.svelte'),
	'.svelte-kit/build/components/error.svelte': () => import('./components/error.svelte'),
	'src/routes/index.svelte': () => import('../../src/routes/index.svelte'),
	'src/routes/articles/$layout.svelte': () => import('../../src/routes/articles/$layout.svelte'),
	'src/routes/articles/index.svelte': () => import('../../src/routes/articles/index.svelte'),
	'src/routes/articles/read/$layout.svelte': () =>
		import('../../src/routes/articles/read/$layout.svelte'),
	'src/routes/articles/read/adding-vite-imagetools-to-sveltekit.svx': () =>
		import('../../src/routes/articles/read/adding-vite-imagetools-to-sveltekit.svx'),
	'src/routes/about.svelte': () => import('../../src/routes/about.svelte')
};

const metadata_lookup = {
	'src/routes/$layout.svelte': {
		entry: '/./_app/pages/$layout.svelte-ad82bdbb.js',
		css: ['/./_app/assets/pages/$layout.svelte-af9e3b5d.css', '/./_app/assets/vendor-c5979ca8.css'],
		js: [
			'/./_app/pages/$layout.svelte-ad82bdbb.js',
			'/./_app/chunks/preload-helper-9f12a5fd.js',
			'/./_app/chunks/vendor-112f5557.js'
		],
		styles: null
	},
	'.svelte-kit/build/components/error.svelte': {
		entry: '/./_app/error.svelte-e8bcd22f.js',
		css: ['/./_app/assets/vendor-c5979ca8.css'],
		js: ['/./_app/error.svelte-e8bcd22f.js', '/./_app/chunks/vendor-112f5557.js'],
		styles: null
	},
	'src/routes/index.svelte': {
		entry: '/./_app/pages/index.svelte-42c85b22.js',
		css: [
			'/./_app/assets/pages/index.svelte-f6733d84.css',
			'/./_app/assets/vendor-c5979ca8.css',
			'/./_app/assets/test-d7099871.css'
		],
		js: [
			'/./_app/pages/index.svelte-42c85b22.js',
			'/./_app/chunks/vendor-112f5557.js',
			'/./_app/chunks/test-7f96a728.js'
		],
		styles: null
	},
	'src/routes/articles/$layout.svelte': {
		entry: '/./_app/pages/articles/$layout.svelte-25574478.js',
		css: [
			'/./_app/assets/pages/articles/$layout.svelte-305a5ad1.css',
			'/./_app/assets/vendor-c5979ca8.css'
		],
		js: ['/./_app/pages/articles/$layout.svelte-25574478.js', '/./_app/chunks/vendor-112f5557.js'],
		styles: null
	},
	'src/routes/articles/index.svelte': {
		entry: '/./_app/pages/articles/index.svelte-e7a84173.js',
		css: ['/./_app/assets/vendor-c5979ca8.css'],
		js: ['/./_app/pages/articles/index.svelte-e7a84173.js', '/./_app/chunks/vendor-112f5557.js'],
		styles: null
	},
	'src/routes/articles/read/$layout.svelte': {
		entry: '/./_app/pages/articles/read/$layout.svelte-8f090e86.js',
		css: [
			'/./_app/assets/pages/articles/read/$layout.svelte-d4d89311.css',
			'/./_app/assets/vendor-c5979ca8.css'
		],
		js: [
			'/./_app/pages/articles/read/$layout.svelte-8f090e86.js',
			'/./_app/chunks/vendor-112f5557.js'
		],
		styles: null
	},
	'src/routes/articles/read/adding-vite-imagetools-to-sveltekit.svx': {
		entry: '/./_app/pages/articles/read/adding-vite-imagetools-to-sveltekit.svx-2c291b3e.js',
		css: ['/./_app/assets/vendor-c5979ca8.css', '/./_app/assets/test-d7099871.css'],
		js: [
			'/./_app/pages/articles/read/adding-vite-imagetools-to-sveltekit.svx-2c291b3e.js',
			'/./_app/chunks/vendor-112f5557.js',
			'/./_app/chunks/test-7f96a728.js'
		],
		styles: null
	},
	'src/routes/about.svelte': {
		entry: '/./_app/pages/about.svelte-4c6e4bd6.js',
		css: ['/./_app/assets/vendor-c5979ca8.css'],
		js: ['/./_app/pages/about.svelte-4c6e4bd6.js', '/./_app/chunks/vendor-112f5557.js'],
		styles: null
	}
};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: { base: '', assets: '/.' } });

export function render(request, { prerender } = {}) {
	const host = request.headers['host'];
	return respond({ ...request, host }, options, { prerender });
}
