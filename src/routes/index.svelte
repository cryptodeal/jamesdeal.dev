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
  import DevInterests from '$lib/index/DevInterests.svelte'
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
    <div class='prose dark:prose-dark prose-sm lg:prose'>
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
				class="mb-3 w-55 uppercase sm:w-65 md:w-75"
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
      <div class='h-98'>
        <DevInterests/>
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
      <div class='prose dark:prose-dark prose-sm lg:prose'>
        <p>
          I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack
          development, with a focus on building light-weight front end applications (SPA/Static, PWA,
          SSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js
          bindings for performance. My applications utilize both REST and Websocket API.
        </p>
      </div>
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

  <div class="flex flex-col mx-auto h-10 w-full text-red-800 justify-center items-center dark:text-green-400">
    <h2 class='text-center'>Connect With Me:</h2>
    <div class='flex mx-auto p-3 gap-4 inline-flex'>
      <a
        class='no-underline'
        title="email"
        href="mailto:me@jamesdeal.dev">
        <svg
          class="h-10 fill-current w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
        </svg>
      </a>
      <a
        class='no-underline'
        title="github"
        href="https://github.com/cryptodeal">
        <svg
          class="h-10 fill-current w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
        </svg>
      </a>
      <!--Remove placeholder link below-->
      <a
        class='no-underline'
        title="linkedin"
        href="https://placeholderlink.com">
        <svg
          class="h-10 fill-current w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
        </svg>
      </a>
      <a
        class='no-underline'
        title="twitter"
        href="https://twitter.com/jamespdeal">
        <svg
          class="h-10 fill-current w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/>
        </svg>
      </a>
    </div>
  </div>
</section>