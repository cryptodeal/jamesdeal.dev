<script>
	import { Mfi } from '$lib/Urvin/TALib/MFI/Viz/mfi';
	import * as Pancake from '@sveltejs/pancake';
	import { theme } from '$lib/stores/localStore.js';

	/* export object with keys equal to MFI Num Lookback Periods */
	/* defaults 14, but can pass in custom values as prop */

	/* TODO: Add UX Controls, allowing user to specify their desired Num. lookback periods */
	export let mfiPeriods = [
		{
			periods: 14,
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

	$: mfiPeriods.forEach((per) => {
		let tempData = Mfi(
			data.map((dat) => dat.high),
			data.map((dat) => dat.low),
			data.map((dat) => dat.close),
			data.map((dat) => dat.volume),
			14
		);
		return tempData.forEach((dat, i) => {
			return (data[i][`mfi${per.periods}`] = dat);
		});
	});

	$: renderedData = data.slice(data.length - (count + 1), data.length - 1);
</script>

<div style="pointer-events:none">
	<Pancake.Svg>
		{#each mfiPeriods as mfi, i}
			{#if mfi.enabled}
				<Pancake.SvgLine
					data={renderedData}
					x={(d) => d.openTimeInMillis + d.sizeInMillis / 2}
					y={(d) => d[`mfi${mfi.periods}`]}
					let:d
				>
					<path class="trend" stroke={$theme === 'dark' ? mfi.darkColor : mfi.color} {d} />
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
