<script>
  import {onMount} from 'svelte'
  import {theme} from '$lib/stores/localStore.js';
  let ParticlesComponent 
  onMount(async () => {
    const module = await import("svelte-particles");
    ParticlesComponent = module.default;
  });
  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
  };

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  };
  $: particleConfig = {
    fpsLimit: 60,
    particles: {
      color: {
        value: $theme === 'dark' ? '#FFF' : '#000'
      }, 
      links: {
        color: $theme === 'dark' ? '#FFF' : '#000',
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
</script>
<svelte:component
  this="{ParticlesComponent}"
  id="tsparticles"
  options="{particleConfig}"
  on:particlesLoaded="{onParticlesLoaded}"
  on:particlesInit="{onParticlesInit}"
/>