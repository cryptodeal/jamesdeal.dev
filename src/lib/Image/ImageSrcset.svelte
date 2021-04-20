<script>
  export let src
  export let srcsetAvif
  export let srcsetWebp
  export let srcset
  export let sizes
  export let alt
  const createSizeMap = (srcset) => {
    const srcArray = srcset.split(' ')
    srcArray.forEach((item, i)=> {
      if(i % 2 !== 0){
        //console.log(item)
        console.log(item.slice(0,item.length-2))
      }
    })
  }
  import { onMount } from 'svelte'
  let loaded = false
  let thisImage
  onMount(() => {
    thisImage.onload = () => {
      loaded = true
    }
  }) 
</script>

<style>
  img {
    height: 200px;
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
</style>

<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />