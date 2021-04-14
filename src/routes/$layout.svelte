<script>
  import {page, navigating} from '$app/stores';
  import '../app.css'
  import {browser} from '$app/env';
  import {onMount} from 'svelte'
  import 'virtual:windi.css'
  import Nav from '$lib/Nav.svelte'
	import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
  if (browser) import('virtual:windi-devtools');
  let ParticlesComponent
  onMount(async () => {
    const module = await import("svelte-particles");

    ParticlesComponent = module.default;
  });
  let particlesUrl = "http://foo.bar/particles.json";
  let particlesConfig = {
    fpsLimit: 60,
    particles: {
      links: {
        enable: true,
        distance: 50
      },
      move: {
        enable: true,
        speed: 1,
        outModes: {
          default: "bounce"
        }
      },
      size: {
        value: 1
      }
    }
  }
  $: segment = $page.path.split('/')[1];
  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
  };

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  };
</script>

<svelte:head>
  <script>
    (function() {
        if(typeof document === 'undefined') return // SSR
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
    })()
  </script>
</svelte:head>

<div class='flex h-40 bg-opacity-80 bg-blue-600 dark:(bg-purple-900 bg-opacity-30)'>
    <svelte:component
      this="{ParticlesComponent}"
      id="tsparticles"
      options="{particlesConfig}"
      on:particlesLoaded="{onParticlesLoaded}"
      on:particlesInit="{onParticlesInit}"
    />
</div>
<Nav {segment}/>
{#if $navigating}
  <PreloadingIndicator/>
{/if}

<slot></slot>


