<script context="module">
  import { browser, dev } from '$app/env';
	export const hydrate = dev;

	export const router = browser;

	export const prerender = true;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const url = `/api/github/commits.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					storedCommits: await res.json()
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
	export let storedCommits;
	import Typewriter from 'svelte-typewriter';
	import LazySrcset from '$lib/images/LazySrcsetPerf.svelte';
	import proHeadshot from '$static/headshot1.jpg?w=600&meta';
	import proHeadshotWebP from '$static/headshot1.jpg?w=200;400;600;1000&format=webp&srcset';
	import proHeadshotAvif from '$static/headshot1.jpg?w=200;400;600;1000&format=avif&srcset';
	import proHeadshotBlur from '$static/headshot1.jpg?w=300&blur=100&quality=30';
	import test from '$static/test.jpg?w=800&meta';
	import testWebP from '$static/test.jpg?w=500;1000;2000&format=webp&srcset';
	import testAvif from '$static/test.jpg?w=500;1000;2000&format=avif&srcset';
	import testBlur from '$static/test.jpg?w=300&blur=100&quality=30';
	let alt = 'Professional headshot of James Deal';
	let proHeadshotRatio = `${(1 / (proHeadshot.width / proHeadshot.height)) * 100}%`;
	let testRatio = `${(1 / (test.width / test.height)) * 100}%`;
	let sizes = '(min-width: 1500px) 2000px, 100vw';
	let headshotSizes = '(min-width: 1500px) 1000px, 100vw';
	let style = 'border-radius:50%';
	import { nest } from 'd3-collection';
	import CalendarMonth from '$lib/Commits/CommitMap.svelte';
  import {LayerCake, Svg} from 'layercake';
  import dayjs from 'dayjs';
  
  let dates = storedCommits.storedCommits.map(commit => {return dayjs(commit.date).toISOString()})
  
	const datesTransformed = dates.map((row) => {
		return { date: new Date(row), timestring: row };
	});

	const seriesColors = ['#fff5cc', '#ffeba9', '#ffe182', '#ffd754', '#ffcc00'];
	const byMonthByDate = nest()
		.key((d) => d.timestring.split('T')[0])
		.entries(datesTransformed);

	const sortedData = byMonthByDate.sort((a, b) => a.key - b.key);
</script>

<svelte:head>
	<title>The Musings of a Mad Dev</title>

	<meta
		name="description"
		content="Latest articles, anecdotes, projects, and cool code snippets from James Deal."
	/>
	<meta name="keywords" content="James Deal, Front End, Back End, Svelte, Javascript" />

	<meta property="og:title" content="The Musings of a Mad Dev" />
	<meta
		property="og:description"
		content="Latest articles, anecdotes, projects, and cool code snippets from James Deal."
	/>
</svelte:head>

<div class="flex flex-col h-40 m-5 text-center mb-15">
	<div class="py-1 relative">
		<Typewriter cursor={false}>
			<h1 class="font-extralight text-7xl text-red-800 uppercase dark:text-green-400">
				Meet James Deal
			</h1>
		</Typewriter>
	</div>
</div>
<section class="container mx-auto p-10">
	<div class="flex flex-wrap-reverse mb-40 items-center">
		<div
			class="rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 lg:(w-4/9 p-8) dark:(bg-purple-900 bg-opacity-30)"
		>
			<h2
				class="font-extralight mb-3 text-3xl text-red-800 uppercase sm:text-5xl dark:text-green-400"
			>
				About Me
			</h2>
			<p class="font-extralight text-sm text-gray-800 dark:text-gray-200">
				I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack
				development, with a focus on building light-weight front end applications (SPA/Static, PWA,
				SSR) using Svelte and leveraging uWebsocket.js or NanoExpress to build out a backend capable of scaling to <a href='https://web-frameworks-benchmark.netlify.app/result'>150,000+ Requests/Second</a>.
			</p>
		</div>
		<div class="mx-auto my-5 w-98">
			<LazySrcset
				src={proHeadshot}
				ratio={proHeadshotRatio}
				srcsetWebP={proHeadshotWebP}
				srcsetAvif={proHeadshotAvif}
				sizes={headshotSizes}
				{style}
				placeholder={proHeadshotBlur}
				{alt}
			/>
		</div>
	</div>

	<div class="flex flex-wrap mb-40 w-full items-center">
    <div class='mx-auto'>
      <h2
				class="font-extralight mb-3 text-3xl text-red-800 w-55 uppercase sm:(text-5xl w-65) md:w-75 lg:w-50 xl:w-60 2xl:w-75 dark:text-green-400"
			>
				Git Commit History:
			</h2>
      <div class='commitChart'>
        <LayerCake
        ssr={true}
        x={'key'}
        r={(d) => d.values.length}
        data={sortedData}
      >
        <Svg>
          <CalendarMonth {seriesColors}/>
        </Svg>
      </LayerCake>
    </div>
    </div>
      <div
			class="rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 content-center lg:(w-4/9 p-8) dark:(bg-purple-900 bg-opacity-30)"
		>
			<h2
				class="font-extralight mb-3 text-3xl text-red-800 uppercase sm:text-5xl dark:text-green-400"
			>
				Developer Interest
			</h2>
			<p class="font-extralight text-sm text-gray-800 dark:text-gray-200">
				I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack
				development, with a focus on building light-weight front end applications (SPA/Static, PWA,
				SSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js
				bindings for performance. My applications utilize both REST and Websocket API.
			</p>
    </div>
	</div>

	<div class="flex flex-wrap-reverse mb-40 items-center">
		<div
			class="rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 lg:(w-4/9 p-8) dark:(bg-purple-900 bg-opacity-30)"
		>
			<h2
				class="font-extralight mb-3 text-3xl text-red-800 uppercase sm:text-5xl dark:text-green-400"
			>
				About Me
			</h2>
			<p class="font-extralight text-sm text-gray-800 dark:text-gray-200">
				I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack
				development, with a focus on building light-weight front end applications (SPA/Static, PWA,
				SSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js
				bindings for performance. My applications utilize both REST and Websocket API.
			</p>
		</div>
		<div class="mx-auto my-5 w-98">
			<LazySrcset
				src={test}
				ratio={testRatio}
				srcsetWebP={testWebP}
				srcsetAvif={testAvif}
				{sizes}
				placeholder={testBlur}
				{alt}
			/>
		</div>
	</div>
</section>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cxantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>