const c = [
	() => import('../../../src/routes/$layout.svelte'),
	() => import('../components/error.svelte'),
	() => import('../../../src/routes/index.svelte'),
	() => import('../../../src/routes/articles/$layout.svelte'),
	() => import('../../../src/routes/articles/index.svelte'),
	() => import('../../../src/routes/articles/read/$layout.svelte'),
	() => import('../../../src/routes/articles/read/adding-vite-imagetools-to-sveltekit.svx'),
	() => import('../../../src/routes/about.svelte')
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/articles/index.json.js
	[/^\/articles\.json$/],

	// src/routes/articles/index.svelte
	[/^\/articles\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/articles/read/adding-vite-imagetools-to-sveltekit.svx
	[/^\/articles\/read\/adding-vite-imagetools-to-sveltekit\/?$/, [c[0], c[3], c[5], c[6]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/api/github/commits.json.js
	[/^\/api\/github\/commits\.json$/]
];

export const fallback = [c[0](), c[1]()];
