<script>
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

	//test layercake copy github commits
	import LayerCake from '$lib/graphics/LayerCake.svelte';
	import ScaledSvg from '$lib/graphics/layouts/ScaledSvg.svelte';
	import { nest } from 'd3-collection';
	import CalendarMonth from '$lib/Commits/CalendarMonth.svelte';
	import dates from '$lib/Commits/dates.js';
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	$: console.log(dates);
	const datesTransformed = dates.split('\n').map((row) => {
		return { date: new Date(row), timestring: row };
	});

	const gutter = 10;
	const seriesColors = ['#fff5cc', '#ffeba9', '#ffe182', '#ffd754', '#ffcc00'];

	/* --------------------------------------------
	 * Group by month then by date
	 */
	const byMonthByDate = nest()
		.key((d) => d.date.getUTCMonth())
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
				SSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js
				bindings for performance. My applications utilize both REST and Websocket API.
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

	<div class="flex flex-wrap mb-40 items-center">
		<div class="mx-auto h-98 my-5 w-98">
			{#each sortedData as month, i}
				<div
					class="flex chart-container"
					style="width:calc({100 / sortedData.length}% - {gutter}px);{i === 0
						? `margin-right:${gutter * 2}px`
						: ''}"
					data-month={monthNames[+month.key + 1]}
				>
					<LayerCake
						ssr={true}
						percentRange={true}
						padding={{ top: 1, right: 1, bottom: 1, left: 1 }}
						x={'key'}
						r={(d) => d.values.length}
						data={month.values}
					>
						<ScaledSvg>
							<CalendarMonth {seriesColors} calcCellSize={() => 100 / 7} />
						</ScaledSvg>
					</LayerCake>
				</div>
			{/each}
		</div>
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

	/*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
    The width is being set inline-below.
  */
	.chart-container {
		display: inline-block;
		position: relative;
		vertical-align: top;
		height: 100%;
		margin-top: 25px;
	}

	.chart-container:before {
		content: attr(data-month);
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(0, -100%);
	}
</style>
