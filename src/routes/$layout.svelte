<script>
  import {page, navigating} from '$app/stores';
  import '../app.css'
  import {browser} from '$app/env';
  import 'virtual:windi.css'
  import Nav from '$lib/nav/Nav.svelte'
  import {theme} from '$lib/stores/localStore.js';
	import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
  import Particles from '$lib/nav/Particles.svelte';
  if (browser){
    import('virtual:windi-devtools');
    theme.useLocalStorage();
  }
  $: segment = $page.path.split('/')[1];
</script>

<svelte:head>
  <script>
    (function() {
        if(typeof document === 'undefined') return // SSR
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark')
        }
    })()
  </script>
</svelte:head>

<div class='flex h-40 bg-opacity-80 bg-blue-300 dark:(bg-purple-900 bg-opacity-30)'>
  <Particles/>
</div>
<Nav {segment}/>
{#if $navigating}
  <PreloadingIndicator/>
{/if}

<slot/>


