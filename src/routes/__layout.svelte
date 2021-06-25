<script>
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import 'virtual:windi.css';
	import '$static/app.css';
	import Nav from '$lib/nav/Nav.svelte';
	import { theme } from '$lib/stores/localStore.js';
	import Particles from '$lib/nav/Particles.svelte';
	if (browser) {
		import('virtual:windi-devtools');
		theme.useLocalStorage();
	}
	$: segment = $page.path.split('/')[1];
</script>

<svelte:head>
	<script>
		(function () {
			if (typeof document === 'undefined') return; // SSR
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		})();
	</script>
</svelte:head>

<div class="flex bg-opacity-80 bg-blue-300 h-40 dark:(bg-purple-900 bg-opacity-30)">
	<Particles />
</div>
<Nav {segment} />
<slot />
