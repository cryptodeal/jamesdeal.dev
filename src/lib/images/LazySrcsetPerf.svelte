<script>
  import {onMount} from "svelte";
  let blur = true;
  let observerCallback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersected = true;
        observer.unobserve(imgElement);
      }
    });
  };
  /**
   * Image aspect ratio.
   * @type {string}
   */
  export let ratio;
  /**
   * WebP Image srcset.
   * @type {string}
   */
  export let srcsetWebP;
  /**
   * AVIF Image srcset.
   * @type {string}
   */
  export let srcsetAvif;
  /**
   * WebP Image srcset.
   * @type {string}
   */
  export let sizes;
  /**
   * Path to placeholder image.
   * @type {string}
   */
  export let placeholder;
  /**
   * Path to image.
   * @type {string}
   */
  export let src;
  /**
   * Alt image text description for accessibility.
   * @type {string}
   */
  export let alt;
  let imgElement;
  //let path;
  let observer;
  let intersected = false;
  let loaded = false;
  let placeholderAlt = 'test'
  //$: path = intersected ? src : placeholder;
  onMount(() => {
    observer = new IntersectionObserver(observerCallback)
    observer.observe(imgElement);
    return () => {
      observer.unobserve(imgElement);
    };
  });
  function handleLoad() {
    if (!loaded && path === src) {
      loaded = true;
    }
  }
  function load(img) {
    img.onload = () => (loaded = true);
  }
</script>

<div class:loaded class='relative w-full'>
  <div class="relative overflow-hidden">
    <div style="padding-bottom:{ratio};" class='w-full'>
      <img class="placeholder" class:blur src={placeholder} {alt} />
      <picture>
        <!--fall back to .webp srcset-->
        <source 
          type="image/avif"
          srcset={srcsetAvif}
          sizes={sizes}
          class='lazy'
        />
      
        <!--fall back to .webp srcset-->
        <source
          type="image/webp"
          srcset={srcsetWebP}
          sizes={sizes}
          class='lazy'
        />
      
        <img
          {src}
          {alt}
          use:load
          bind:this={imgElement}
          class="svelte-lazy-image main"
        />
      </picture>
    </div>
  </div>
</div>


<style>
  img, canvas {
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    will-change: opacity;
  }
  .blur {
    filter: blur(15px);
    transition: opacity 1000ms;
  }
  .placeholder {
    opacity: 1;
    width: 100%;
    height: 100%;
    transition: opacity 1000ms ease-out;
    transition-delay: 0.4s;
  }
  .main {
    opacity: 0;
    transition: opacity 1000ms ease-out;
    transition-delay: 0.4s;
  }
  .loaded .placeholder {
    opacity: 0;
    position: absolute;
  }
  .loaded .main {
    opacity: 1;
  }
</style>