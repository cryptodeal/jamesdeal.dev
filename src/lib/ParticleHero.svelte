<script>
  import { onMount } from "svelte";
  let ParticlesComponent;
  onMount(async () => {
    const module = await import("svelte-particles");

    ParticlesComponent = module.default;
  });
</script>