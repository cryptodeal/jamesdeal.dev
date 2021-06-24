<script>
	import { tooltip } from './tooltip';
	import { getContext } from 'svelte';
	import { scaleQuantize } from 'd3-scale';
	import { timeFormat } from 'd3-time-format';
	import { timeDay } from 'd3-time';
	import dayjs from 'dayjs';
	import weekOfYear from 'dayjs/plugin/weekOfYear.js';
	dayjs.extend(weekOfYear);
	export let seriesColors = ['#fff5cc', '#ffeba9', '#ffe182', '#ffd754', '#ffcc00'];

	const { width, height, data, x, r, extents } = getContext('LayerCake');
	var now = dayjs();
	let days;
	var twoMonthsBack = now.subtract(2, 'month').date(1);
	if (twoMonthsBack.day() !== 0) {
		let daysTilSunday = 7 - twoMonthsBack.day();
		twoMonthsBack = twoMonthsBack.add(daysTilSunday, 'day');
	}

	const numWeeks = now.week() - twoMonthsBack.week() + 1;

	$: calcWidth = $width / numWeeks;
	$: calcHeight = $height / 7;
	const getDayOfWeek = timeFormat('%w');

	$: count = (date) => {
		const stringDate = date.toISOString().split('T')[0];
		const days = $data.filter((d) => $x(d) === stringDate)[0];
		if (days) {
			return $r(days);
		}
		return 0;
	};

	$: colorScale = scaleQuantize().domain($extents.r).range(seriesColors);

	$: fillColor = (day) => {
		const n = count(day);
		return n ? colorScale(n) : '#fff';
	};

	$: cellSize = $height >= $width ? calcHeight : calcWidth;
	days = timeDay.range(twoMonthsBack.subtract(1, 'day'), now);

	$: rectY = (day) => {
		return getDayOfWeek(day) * cellSize;
	};

	$: rectX = (day) => {
		const startWeek = twoMonthsBack.week();
		const thisWeek = dayjs(day).week();
		const weekDiff = thisWeek - startWeek;
		return weekDiff * cellSize;
	};
</script>

{#each days as day}
	<rect
		class="day"
		width={cellSize}
		height={cellSize}
		x={rectX(day)}
		y={rectY(day)}
		style="fill:{fillColor(day)};"
		title={`${dayjs(day).format('dddd, MMMM D')}: ${count(day)} ${
			count(day) == 1 ? 'Commit' : 'Commits'
		} to Github`}
		use:tooltip
	/>
{/each}

<style>
	.day {
		stroke: #000;
		stroke-width: 1;
		fill: #fff;
	}
</style>
