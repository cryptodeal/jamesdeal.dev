<script>
  import { onMount } from 'svelte'
  import Waypoint from 'svelte-waypoint';
  export let alt = '';
  export let srcsetAvif = '';
  export let srcsetWebp = '';
  export let srcset = '';
  export let sizes = ''
  export let src= ''
  const srcsetAvifSizes = [];
  const srcsetWebpSizes = [];
  const createSizeMap = (srcset) => {
    const srcArray = srcset.split(' ')
    srcArray.forEach((item, i)=> {
      if(i % 2 !== 0){
        //console.log(item)
        console.log(item.slice(0,item.length-2))
      }
    })
  }

</script>

<style>
  
</style>

<Waypoint
  class="{wrapperClass}"
  style="min-height: 100px; width: 100%;"
  once
  {threshold}
  {offset}
  disabled="{!lazy}"
>  
  <div class:loaded style="position: relative; width: 100%;">
    <div style="position: relative; overflow: hidden;">
      <div style="width:100%;padding-bottom:{ratio};"></div>
      {#if blurhash}
        <canvas class="placeholder" use:decodeBlurhash width={blurhashSize.width} height={blurhashSize.height} />
      {:else}
        <img class="placeholder {placeholderClass}" class:blur {src} {alt} />
      {/if}
      <picture>
        <source type="image/avif" srcset="{srcsetAvif}" {sizes} />
        <source type="image/webp" srcset="{srcsetWebp}" {sizes} />
        <source {srcset} {sizes} />
        <img
          {src}
          use:load
          class="main {c} {className}"
          {alt}
          {width}
          {height}
          {usemap}
        />
      </picture>
    </div>
  </div>
</Waypoint>
