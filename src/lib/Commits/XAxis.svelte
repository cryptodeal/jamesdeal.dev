<script>
	import { getContext } from 'svelte';
	const { width, height, padding } = getContext('LayerCake');
	import dayjs from 'dayjs';
	import weekOfYear from 'dayjs/plugin/weekOfYear.js';
	dayjs.extend(weekOfYear);
	const now = dayjs();
	let oneMonthBack = now.subtract(1, 'month').date(1);
	let twoMonthsBack = now.subtract(2, 'month').date(1);
	const months = [twoMonthsBack.format('MMM'), oneMonthBack.format('MMM'), now.format('MMM')];
	//date printed is the first sunday of the month 2 months back
	//console.log(twoMonthsBack)
	const numWeeks = now.week() - twoMonthsBack.week() + 1;

	$: calcWidth = $width / numWeeks;
	$: calcHeight = $height / 7;
	$: cellSize = $height >= $width ? calcHeight : calcWidth;
</script>

<div class="flex relative" style="top:0%;width:100%">
	{#each months as mon, i}
		<div
			class="text-xs text-left text-gray-800 textChart absolute whitespace-nowrap dark:text-gray-200"
			style="bottom:{$padding.top / 2 - 5}px;left:{i * 4.4 * cellSize}px;max-width:{cellSize}px;"
		>
			{mon}
		</div>
	{/each}
</div>
