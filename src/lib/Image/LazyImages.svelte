<script>
  export let srcset
  export let alt
  import IntersectionObserver from './IntersectionObserver.svelte'
  import Image from './Image.svelte'
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
  {#if intersecting}
    <Image {alt} {srcset} />
  {/if}
</IntersectionObserver>