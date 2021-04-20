<script>
  export let src
  export let alt
  export let srcsetAvif
  export let srcsetWebp
  export let srcset
  export let sizes
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
  import IntersectionObserver from './IntersectionObserver.svelte'
  import Image from './Image.svelte'
  let nativeLoading = false
  // Determine whether to bypass our intersecting check
  // onMount(() => {
  //   if ('loading' in HTMLImageElement.prototype) {
  //     nativeLoading = true
  //   }
  // })
  
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
  {#if intersecting || nativeLoading}
    <Image {alt} {src} />
  {/if}
</IntersectionObserver> 