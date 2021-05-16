<script context="module">
  export async function load({ fetch }) {
    const url = `/articles.json`;
    const res = await fetch(url);
    const jsonBody = await res.json()
    if (res.ok) {
      return {
        props: {
          posts: JSON.parse(jsonBody.articles)
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
  <div class='h-40 sm:h-20'>
    <Typewriter cursor={false}>
      <h1 class='font-extralight text-7xl text-red-800 uppercase dark:text-green-400'>Recent Articles</h1>
    </Typewriter>
  </div>
  <div>
    <ul>
      {#each posts as post}
      <h2 class='font-extralight text-2xl text-red-800 no-underline dark:text-green-400 dark:hover:text-green-600'><a
          href='articles/read/{post.slug}'>{post.title}</a></h2>
      <p class='font-extralight text-sm text-left text-gray-900 w-3/4 dark:text-gray-200'>By: James Deal</p>
      {/each}
    </ul>
  </div>
</div>