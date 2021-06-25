<script context="module">
	const modules = import.meta.globEager(`./*/index.svelte`);
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const url = `api/github/commits.json`;
		const res = await fetch(url);
		const storedCommits = await res.json();
		const url2 = `api/coinbase-pro/ETH-USD.json`;
		const res2 = await fetch(url2);
		const cryptoData = await res2.json();

		if (res.ok && res2.ok) {
			return {
				props: {
					storedCommits,
					cryptoData
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
	export const interests = Object.values(modules).map((mod) => ({ Interest: mod.default }));
	export const charts = Object.values(modules).map((mod) => ({ Chart: mod.default }));
</script>

<script>
	export let storedCommits;
	export let cryptoData;
	function nextChart() {
		number + 1 < charts.length ? (number += 1) : (number = 0);
	}
	function prevChart() {
		number - 1 >= 0 ? (number -= 1) : (number = charts.length - 1);
	}
	let number;
	$: number = 0;
</script>

<svelte:head>
	<title>Demos</title>
</svelte:head>

<h1
	class="font-light font-sans my-5 text-center text-5xl text-red-800 break-words md:text-7xl dark:text-green-400"
>
	Demos
</h1>
<div class="flex mb-5">
	<nav class="mx-auto h-8 gap-20 inline-flex">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			on:click={prevChart}
			class="cursor-pointer h-8 fill-current stroke-none w-auto text-red-800 backIcon dark:text-green-400"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
			/>
		</svg>
		<h2
			class="font-extralight font-sans text-2xl text-red-800 self-center lg:text-4xl dark:text-green-400"
		>
			Data Viz
		</h2>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			on:click={nextChart}
			class="cursor-pointer h-8 fill-current stroke-none w-auto text-red-800 dark:text-green-400"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
			/>
		</svg>
	</nav>
</div>
<section class="md:container md:mx-auto">
	{#if charts !== null}
		{#each charts as { Chart }, index}
			{#if number === index}
				<Chart {storedCommits} {cryptoData} />
			{/if}
		{/each}
	{/if}
</section>

<style>
	.backIcon {
		transform: rotate(180deg);
	}
</style>
