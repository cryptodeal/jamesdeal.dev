<script>
	import { BBands } from '$lib/Urvin/TALib/BBands/Viz/bbands';
	import * as Pancake from '@sveltejs/pancake';
	import { theme } from '$lib/stores/localStore.js';

	/* export object with keys equal to EMA Num Lookback Periods */
	/* defaults 12 & 26 false, but can pass in custom values as prop */
	/* enabling EMA 12 & 26 w checkboxes & custom EMA periods */
	export let bBandPeriods = [
		{
			periods: 20,
			enabled: true,
			color: '#1d4ed8',
			darkColor: '#7dd3fc',
			data: []
		}
	];

	/* export data, exposing as component prop */
	export let data;

	/* export count, exposing as component prop */
	export let count;

	$: bBandPeriods.forEach((per) => {
		let [outRealUpperBand, outRealMiddleBand, outRealLowerBand] = BBands(
			data.map((dat) => dat.close),
			per.periods,
			2,
			2
		);
		return data.forEach((dat, i) => {
			data[i][`outRealUpperBand${per.periods}`] = outRealUpperBand[i];
			data[i][`outRealMiddleBand${per.periods}`] = outRealMiddleBand[i];
			data[i][`outRealLowerBand${per.periods}`] = outRealLowerBand[i];
			return data[i];
		});
	});

	$: renderedData = data.slice(data.length - (count + 1), data.length - 1);
</script>

<div style="pointer-events:none">
	<Pancake.Svg>
		{#each bBandPeriods as bBand, i}
			{#if bBand.enabled}
				<!-- Plot Upper Band -->
				<Pancake.SvgLine
					data={renderedData}
					x={(d) => d.openTimeInMillis + d.sizeInMillis / 2}
					y={(d) => d[`outRealUpperBand${bBand.periods}`]}
					let:d
				>
					<path class="trend" stroke={$theme === 'dark' ? bBand.darkColor : bBand.color} {d} />
				</Pancake.SvgLine>

				<!-- Plot Middle Band -->
				<Pancake.SvgLine
					data={renderedData}
					x={(d) => d.openTimeInMillis + d.sizeInMillis / 2}
					y={(d) => d[`outRealMiddleBand${bBand.periods}`]}
					let:d
				>
					<path class="trend" stroke={$theme === 'dark' ? bBand.darkColor : bBand.color} {d} />
				</Pancake.SvgLine>

				<!-- Plot Lower Band -->
				<Pancake.SvgLine
					data={renderedData}
					x={(d) => d.openTimeInMillis + d.sizeInMillis / 2}
					y={(d) => d[`outRealLowerBand${bBand.periods}`]}
					let:d
				>
					<path class="trend" stroke={$theme === 'dark' ? bBand.darkColor : bBand.color} {d} />
				</Pancake.SvgLine>
			{/if}
		{/each}
	</Pancake.Svg>
</div>

<style>
	path.trend {
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 1.5px;
		fill: none;
	}
</style>
