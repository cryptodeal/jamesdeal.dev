<script>
	import * as Pancake from '@sveltejs/pancake';
	import * as yootils from 'yootils';
	import { tooltip } from '$lib/dataviz/crypto/tooltip';
	import dayjs from 'dayjs';
	import { parseData, genPolygon } from '../utils';
	import { Ema } from '$lib/dataviz/crypto/ema';
	export let data;
	let ema12Enabled;
	let ema26Enabled;

	/* Determines color of a given candlestick */
	const determineColor = (d, i) => {
		if (d.close > d.open) {
			return '#04DF08';
		} else if (d.open > d.close) {
			return '#DF3604';
		} else if (i == 0) {
			return '#04DF08';
		} else return renderedData[i - 1], i - 1;
	};

	const chartEpoch = (dat) => {
		return dat.date.diff(startDate);
	};

	/* parse data for chart */
	$: renderedData = parseData(data);

	$: startDate = renderedData[0][0];

	/* Reactive portion of the code */
	$: ema12 = Ema(
		renderedData.map((dat) => dat.close),
		12
	);

	$: ema26 = Ema(
		renderedData.map((dat) => dat.close),
		26
	);

	$: renderedData.forEach((dat, i) => {
		dat.ema12 = ema12[i];
		dat.ema26 = ema26[i];
	});

	$: minX = Math.min.apply(
		null,
		renderedData.map((item) => chartEpoch(item))
	);

	$: maxX = Math.max.apply(
		null,
		renderedData.map((item) => chartEpoch(item))
	);

	$: minY = Math.min.apply(
		null,
		renderedData.map((item) => item.low)
	);

	$: maxY = Math.max.apply(
		null,
		renderedData.map((item) => item.high)
	);
</script>

<div class="flex flex-col">
	<h3
		class="font-extralight font-sans mx-auto my-5 text-xl text-red-800 break-words lg:text-2xl dark:text-green-400"
	>
		FusionCharts Clone Using Pancake - Apple Inc. Stock Price (In Progress):
	</h3>
	<div class="mx-auto gap-4 inline-flex items-center">
		<label class="block">
			<input
				type="checkbox"
				class="text-blue-700 form-checkbox dark:text-light-blue-300"
				bind:checked={ema12Enabled}
			/>
			<span class="mt-1 text-blue-700 dark:text-light-blue-300">EMA 12</span>
		</label>

		<label class="block">
			<input
				type="checkbox"
				class="text-fuchsia-600 form-checkbox dark:text-fuchsia-400"
				bind:checked={ema26Enabled}
			/>
			<span class="mt-1 text-fuchsia-600 dark:text-fuchsia-400">EMA 26</span>
		</label>
	</div>
</div>

<div class="chart">
	<Pancake.Chart x1={minX} x2={maxX} y1={minY} y2={maxY}>
		<Pancake.Grid horizontal count={5} let:value let:first>
			<div class="grid-line horizontal"><span>{`$${yootils.commas(value.toFixed(2))}`}</span></div>
		</Pancake.Grid>

		<Pancake.Grid vertical count={10} let:value>
			<div class="grid-line vertical" />
			<span class="x-label">{dayjs(value).format('YYYY')}</span>
		</Pancake.Grid>
		<Pancake.Svg>
			{#each renderedData as dat, i}
				{#if dat && dat.open && dat.close && dat.low && dat.high}
					<Pancake.SvgPolygon data={genPolygon(dat)} let:d>
						<path
							{d}
							class="candle"
							style="fill:{determineColor(dat, i)}"
							title={`Open: $${yootils.commas(dat.open.toFixed(2))}\nClose: $${yootils.commas(
								dat.close.toFixed(2)
							)}\nHigh: $${yootils.commas(dat.high.toFixed(2))}\nLow: $${yootils.commas(
								dat.low.toFixed(2)
							)}`}
							use:tooltip
						/>
					</Pancake.SvgPolygon>
				{/if}
			{/each}
		</Pancake.Svg>
		<!--
		{#if ema12Enabled}
			<div style="pointer-events:none">
				<Pancake.Svg>
					<Pancake.SvgLine
						data={renderedData}
						x={(d) => d.date}
						y={(d) => d.ema12}
						let:d
					>
						<path class="stroke-blue-700 trend dark:stroke-light-blue-300" {d} />
					</Pancake.SvgLine>
				</Pancake.Svg>
			</div>
		{/if}
		{#if ema26Enabled}
			<div style="pointer-events:none">
				<Pancake.Svg>
					<Pancake.SvgLine
						data={renderedData}
						x={(d) => d.date}
						y={(d) => d.ema26}
						let:d
					>
						<path class="stroke-fuchsia-600 trend dark:stroke-fuchsia-400" {d} />
					</Pancake.SvgLine>
				</Pancake.Svg>
			</div>
		{/if}
  -->
	</Pancake.Chart>
</div>

<style>
	.chart {
		height: 500px;
		padding: 3em 0 2em 3em;
		margin: 0 3em 36px 3em;
	}

	path.trend {
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 1px;
		fill: none;
	}

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: calc(100% + 3em);
		left: -1em;
		border: 1px dashed rgba(204, 204, 204, 0.5);
	}

	.grid-line.vertical {
		height: 100%;
		border-left: 1px dashed rgba(204, 204, 204, 0.5);
	}

	.grid-line span {
		position: absolute;
		left: -5em;
		bottom: -0.5em;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		line-height: 1;
		white-space: pre-wrap;
	}

	.candle {
		pointer-events: all;
	}

	.x-label {
		position: absolute;
		width: 4em;
		left: -2em;
		bottom: -22px;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
