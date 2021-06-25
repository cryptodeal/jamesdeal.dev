<script>
	export let storedCommits;
	import { nest } from 'd3-collection';
	import CalendarMonth from '$lib/Commits/CommitMap.svelte';
	import XAxis from '$lib/Commits/XAxis.svelte';
	import YAxis from '$lib/Commits/YAxis.svelte';
	import { LayerCake, Svg, Html } from 'layercake';
	import dayjs from 'dayjs';

	let dates = storedCommits.storedCommits.map((commit) => {
		return dayjs(commit.date).toISOString();
	});

	const datesTransformed = dates.map((row) => {
		return { date: new Date(row), timestring: row };
	});

	const seriesColors = ['#fff5cc', '#ffeba9', '#ffe182', '#ffd754', '#ffcc00'];
	const byMonthByDate = nest()
		.key((d) => d.timestring.split('T')[0])
		.entries(datesTransformed);

	const sortedData = byMonthByDate.sort((a, b) => a.key - b.key);
</script>

<div class="flex">
	<h3
		class="font-extralight font-sans mx-auto my-5 text-xl text-red-800 center break-words lg:text-2xl dark:text-green-400"
	>
		My Github Commit Activity:
	</h3>
</div>
<div class="mx-auto h-55 w-80">
	<LayerCake
		ssr={true}
		x={'key'}
		r={(d) => d.values.length}
		padding={{ top: 20, left: 30 }}
		data={sortedData}
	>
		<Html>
			<XAxis />
			<YAxis />
		</Html>
		<Svg>
			<CalendarMonth {seriesColors} />
		</Svg>
	</LayerCake>
</div>
<div class="text-center md:container md:mx-auto">
	<p>
		Adapted from <a
			href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/showing-an-overview-of-your-activity-on-your-profile"
			>Github Activity overview calendar heatmap
		</a>using
		<a href="https://layercake.graphics/">Layer Cake</a>, a Svelte graphics framework.
	</p>
</div>
