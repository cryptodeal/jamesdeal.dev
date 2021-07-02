<script>
	import { Ema } from '$lib/dataviz/crypto/ema';
	import * as Pancake from '@sveltejs/pancake';
	import { theme } from '$lib/stores/localStore.js';

	/* export object with keys equal to EMA Period Value */
	/* defaults 12 & 26 false, but can pass in custom values as prop */
	/* enabling EMA 12 & 26 w checkboxes & custom EMA periods */
	export let emaPeriods = [
		{
			periods: 12,
			enabled: false,
			color: '#1d4ed8',
			darkColor: '#7dd3fc',
			data: []
		},
		{
			periods: 26,
			enabled: false,
			color: '#c026d3',
			darkColor: '#e879f9',
			data: []
		}
	];

	/* export data, exposing as component prop */
	export let data;

	/* export count, exposing as component prop */
	export let count;

	$: emaPeriods.forEach((per) => {
		let tempData = Ema(
			data.map((dat) => dat.close),
			per.periods
		);
		return tempData.forEach((dat, i) => {
			return (data[i][`ema${per.periods}`] = dat);
		});
	});

	$: renderedData = data.slice(data.length - (count + 1), data.length - 1);
</script>

<div style="pointer-events:none">
	<Pancake.Svg>
		{#each emaPeriods as ema, i}
			{#if ema.enabled}
				<Pancake.SvgLine
					data={renderedData}
					x={(d) => d.openTimeInMillis + d.sizeInMillis / 2}
					y={(d) => d[`ema${ema.periods}`]}
					let:d
				>
					<path class="trend" stroke={$theme === 'dark' ? ema.darkColor : ema.color} {d} />
				</Pancake.SvgLine>
			{/if}
		{/each}
	</Pancake.Svg>
</div>

<style>
	path.trend {
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 1px;
		fill: none;
	}
</style>
