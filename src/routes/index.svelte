<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const url = `/api/github/commits.json`;
		const res = await fetch(url);
    const storedCommits = await res.json()
    
		if (res.ok) {
			return {
				props: {
					storedCommits
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
	import proHeadshot from '$images/headshot1.jpg?w=600&quality=75&meta';
	import proHeadshotWebP from '$images/headshot1.jpg?w=200;400;600;1000&format=webp&quality=75&srcset';
	import proHeadshotAvif from '$images/headshot1.jpg?w=200;400;600;1000&format=avif&quality=75&srcset';
	import proHeadshotBlur from '$images/headshot1.jpg?w=300&blur=100&quality=15';
	import test from '$images/test.jpg?w=800&quality=75&meta';
	import testWebP from '$images/test.jpg?w=500;1000;2000&format=webp&quality=75&srcset';
	import testAvif from '$images/test.jpg?w=500;1000;2000&format=avif&quality=75&srcset';
	import testBlur from '$images/test.jpg?w=300&blur=100&quality=15';
  import { nest } from 'd3-collection';
	import CalendarMonth from '$lib/Commits/CommitMap.svelte';
  import XAxis from '$lib/Commits/XAxis.svelte'
  import YAxis from '$lib/Commits/YAxis.svelte'
  import {LayerCake, Svg, Html} from 'layercake';
  import dayjs from 'dayjs';
	let alt = 'Professional headshot of James Deal';
	let proHeadshotRatio = `${(1 / (proHeadshot.width / proHeadshot.height)) * 100}%`;
	let testRatio = `${(1 / (test.width / test.height)) * 100}%`;
	let sizes = '(min-width: 1500px) 2000px, 100vw';
	let headshotSizes = '(min-width: 1500px) 1000px, 100vw';
	let style = 'border-radius:50%';
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

<div class="mx-auto h-20 max-w-3xl py-5 px-4 sm:(px-6 py-12) lg:(max-w-4xl py-16 px-8) xl:max-w-6xl">
		<Typewriter cursor={false}>
			<h1>Meet James Deal</h1>
		</Typewriter>
</div>
<section class="container mx-auto mt-5.5rem p-5 sm:mt-9rem md:mt-10.5rem lg:mt-12.5rem">
	<div class="flex flex-wrap-reverse mb-40 items-center">
		<div
			class="rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 lg:(w-4/9 p-8) dark:(bg-purple-900 bg-opacity-30)"
		>
			<h2
				class="mb-3 uppercase"
			>
				About Me
			</h2>
      <div class="flex-1 mb-2 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 stroke-current mr-3 text-red-800 w-6 dark:text-green-400" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <p class='font-light text-sm text-gray-900 dark:text-gray-200'>Austin, TX</p>
    </div>
    <div class='prose dark:prose-dark prose-sm md:prose'>
      <p>
				Specializing in full-stack development, with a focus on building light-weight front end applications (SPA, Static, PWA,
				SSR) using Svelte powered by high throughput APIs (REST/Websocket) using <a href='https://github.com/nanoexpress/nanoexpress' >NanoExpress</a>, 
        which provides an Express-like wrapper, as well as many other invaluable utilities, to the <a href='https://github.com/uNetworking/uWebSockets.js/'>µWebSockets.js</a> library.
        The µWebSockets.js library, in turn, provides node.js bindings to µWebSockets, a server written in C# with kernel level performance optimizations.
			</p>
      <p>
        By utilizing NanoExpress, the APIs backing my applications have proven, in testing, capable of scaling to <a href='https://web-frameworks-benchmark.netlify.app/result'>150,000+ Requests/Second</a> 
        and sustaining <a href='https://alexhultman.medium.com/millions-of-active-websockets-with-node-js-7dc575746a01'>over 1 million</a> active websocket connections per each instance of the server.
      </p>
    </div>
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
				class="mb-3 w-55 uppercase sm:(text-5xl w-65) md:w-75"
			>
				Git Commits:
			</h2>
      <div class='commitChart'>
        <LayerCake
        ssr={true}
        x={'key'}
        r={(d) => d.values.length}
        padding={{ top: 20, left: 30}}
        data={sortedData}
      >
        <Html>
          <XAxis/>
          <YAxis/>
        </Html>
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
				class="mb-3 uppercase"
			>
				Developer Interests
			</h2>
      <h3 class='mb-2'>Data Viz</h3>
      <p class='font-light text-sm text-gray-900 dark:text-gray-200'>Server Side Rendered Github Commit Activity Chart</p>
      <div class='prose dark:prose-dark prose-sm md:prose'>
        <p>
          Data visualization, charting, and graphics are of particular interest to me as the ability to convey complex data and information to users in a medium that is inviting (i.e. not intimidating), 
          easily understood, and interactive dramatically improve user experience.
        </p>
        <p>
          The advent of Javascript frameworks like REACT, Vue, Angular, and, more recently, Svelte, has greatly expanded the ease of which interactive data visualizations can be constructed as well as 
          greatly increased the extent to which user's can interact with the data. I see Data Visualization as one of the next great frontiers of frontend developers.
        </p>

      </div>
    </div>
	</div>

	<div class="flex flex-wrap-reverse mb-40 items-center">
		<div
			class="rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 lg:(w-4/9 p-8) dark:(bg-purple-900 bg-opacity-30)"
		>
			<h2
				class="mb-3 uppercase"
			>
				Personal Interests
			</h2>
			<p class='prose dark:prose-dark prose-sm md:prose'>
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
