<script context="module">
  export async function load({ fetch }) {
    const url = `/articles.json`;
    const res = await fetch(url);
    const posts = await res.json()
    if (res.ok) {
      return {
        props: {
          posts
        }
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  import Typewriter from 'svelte-typewriter';
  export let posts;
</script>

<svelte:head>
  <title>Articles</title>
</svelte:head>
<div class="flex flex-col items-center">
  <div class='absolute'>
    <Typewriter cursor={false}>
      <h1>Recent Articles</h1>
    </Typewriter>
  </div>
  <div class='mx-4 mt-30 absolute'>
    <ul>
      {#each posts as {slug, title, author}}
      <h2 class='hover:text-red-900 dark:hover:text-green-600'>
        <a class='no-underline' href='articles/read/{slug}'>{title}</a>
      </h2>
      <p class='font-extralight text-sm text-left text-gray-900 w-3/4 dark:text-gray-200'>By: {author}</p>
      {/each}
    </ul>
  </div>
</div>