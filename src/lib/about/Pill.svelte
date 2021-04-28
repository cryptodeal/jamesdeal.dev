<script>
  export let text = ''
  export let href = ''
</script>
{#if href !== ''}
<a class="rounded-full cursor-pointer font-extralight bg-red-800 my-1 mx-1 text-white text-sm py-1 px-2 inline-block dark:(bg-green-300 text-gray-900) hover:(transform-gpu -translate-x-1 -translate-y-1 shadow-animate transition duration-300 ease-in-out)"
  {href} target="_blank" rel="noopener noreferrer">{text}</a>
{:else}
<span
  class="rounded-full cursor-pointer font-extralight bg-red-800 my-1 mx-1 text-white text-sm py-1 px-2 inline-block dark:(bg-green-300 text-gray-900) hover:(transform-gpu -translate-x-1 -translate-y-1 shadow-animate transition duration-300 ease-in-out )">{text}</span>
{/if}