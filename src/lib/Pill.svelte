<script>
  export let text;
  export let href;
</script>
{#if href}
  <a class="inline-block cursor-pointer transform-gpu hover:(-translate-x-1 -translate-y-1 shadow-animate transition) duration-100 ease-in-out my-1 mx-1 bg-orange-400 text-white dark:(bg-green-300 text-gray-900) text-sm font-thin py-1 px-2 rounded-full" {href} target="_blank" rel="noopener noreferrer">{text}</a>
{:else}
  <span class="inline-block cursor-pointer transform-gpu hover:(-translate-x-1 -translate-y-1 shadow-animate transition) duration-100 ease-in-out my-1 mx-1 bg-orange-400 dark:(bg-green-300 text-gray-900) text-white text-sm font-thin py-1 px-2 rounded-full">{text}</span>
{/if}