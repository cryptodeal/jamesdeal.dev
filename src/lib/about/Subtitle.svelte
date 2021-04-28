<script>
  export let title = ''
  export let href = ''
  export let role = ''
</script>
{#if href !== '' && role != ''}
<h3
  class='font-extralight text-xl text-center text-red-800 w-3/4 inline-block items-center sm:(w-1/2 text-2xl) md:(text-left w-3/4) dark:text-green-400'>
  <a {href} target="_blank" rel="noopener noreferrer">{title}</a> / {role}</h3>
{:else if href !== ''}
<h3
  class='font-extralight text-xl text-center text-red-800 w-3/4 inline-block items-center sm:(w-1/2 text-2xl) md:(text-left w-3/4) dark:text-green-400'>
  <a {href} target="_blank" rel="noopener noreferrer">{title}</a></h3>
{:else}
<h3
  class='font-extralight text-xl text-center text-red-800 w-1/2 inline-block items-center sm:text-2xl md:(text-left w-3/4) dark:text-green-400'>
  {title}</h3>
{/if}