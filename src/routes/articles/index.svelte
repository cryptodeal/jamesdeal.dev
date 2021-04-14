<script context="module">
  export async function load({fetch}) {
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
      <h1 class='uppercase text-7xl font-thin text-orange-500 dark:text-green-400'>Recent Articles</h1>
    </Typewriter>
  </div>
  <div>
    <ul>
      {#each posts as post}
          <h2 class='text-2xl font-thin text-orange-500 no-underline dark:text-green-400 dark:hover:text-green-600'><a sveltekit:prefetch href='articles/read/{post.slug}'>{post.title}</a></h2>
          <p class='text-sm text-black dark:text-gray-300'>By: James Deal</p>
      {/each}
    </ul>
  </div>
</div>