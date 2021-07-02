<script>
	import * as Pancake from '@sveltejs/pancake';
	import { genPolygon, formatBase } from '$lib/dataviz/crypto/utils';
	import { tooltip } from '$lib/dataviz/crypto/tooltip';

	/* export data, exposing as component prop */
	export let data;

	/* export count, exposing as component prop */
	export let count;

	$: renderedData = data.slice(data.length - (count + 1), data.length - 1);

	const determineColor = (d, i) => {
		if (d.close > d.open) {
			return '#04DF08';
		} else if (d.open > d.close) {
			return '#DF3604';
		} else if (i == 0) {
			return '#04DF08';
		} else {
			return determineColor(d, i - 1);
		}
	};
</script>

<Pancake.Svg>
	{#each renderedData as dat, i}
		{#if dat && dat.open && dat.close && dat.low && dat.high}
			<Pancake.SvgPolygon data={genPolygon(dat)} let:d>
				<path
					{d}
					class="candle"
					style="fill:{determineColor(dat, i)}"
					title={`Open: ${formatBase(dat.open, dat.counter)}\nClose: ${formatBase(
						dat.close,
						dat.counter
					)}\nHigh: ${formatBase(dat.high, dat.counter)}\nLow: ${formatBase(dat.low, dat.counter)}`}
					use:tooltip
				/>
			</Pancake.SvgPolygon>
		{/if}
	{/each}
</Pancake.Svg>

<style>
	.candle {
		pointer-events: all;
	}
</style>
