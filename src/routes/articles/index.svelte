<script context="module">
	export async function load({ fetch }) {
		const url = `articles.json`;
		const res = await fetch(url);
		const posts = await res.json();
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
	<title>Recent Articles</title>

	<meta name="description" content="Recent Articles: The latest musings of a sleep deprived dev." />
	<meta name="keywords" content="James Deal, Developer, Front End, Svelte, Back End" />

	<meta property="og:title" content="Recent Articles" />
	<meta
		property="og:description"
		content="Recent Articles: The latest musings of a sleep deprived dev."
	/>
</svelte:head>
<div
	class="flex flex-col mx-auto max-w-3xl py-5 px-4 items-center sm:(px-6 py-12) lg:(max-w-4xl py-16 px-8) xl:max-w-6xl"
>
	<div class="absolute">
		<Typewriter cursor={false}>
			<h1>Recent Articles</h1>
		</Typewriter>
	</div>
	<div class="mx-4 mt-15 absolute md:mt-30">
		<ul>
			{#each posts as { slug, title, author }}
				<h2 class="hover:text-red-900 dark:hover:text-green-600">
					<a class="no-underline" sveltekit:prefetch href="articles/read/{slug}">{title}</a>
				</h2>
				<p class="prose dark:prose-dark prose-sm md:prose">By: {author}</p>
			{/each}
		</ul>
	</div>
</div>
