<script>
	import * as Pancake from '@sveltejs/pancake';
	import dayjs from 'dayjs';
	import { Ema } from '$lib/dataviz/crypto/ema';
	import { tooltip } from '$lib/dataviz/crypto/tooltip';
	import { genPolygon, filterUnwanted, formatBase } from '$lib/dataviz/crypto/utils';
	export let cryptoData;

	let tradingPair = `ETH-USD`;
	const candleGranularity = [
		{ label: `1 Min`, value: 60 },
		{ label: `5 Min`, value: 300 },
		{ label: `15 Min`, value: 900 },
		{ label: `1 Hour`, value: 3600 },
		{ label: `6 Hours`, value: 21600 },
		{ label: `1 Day`, value: 86400 }
	];
	let w;
	let ema12Enabled = false;
	let ema26Enabled = false;
	let tempGranularity = 900;
	let granularity = 900;
	let { data, pairs } = cryptoData;

	/* TODO: Allow users to pick EMA periods */
	//const emaList = [];

	/* TODO: Utilize other TA functions ported from GO's talib */
	//1 - MACD
	//2 - MFI
	//3 - BB
	//4 - SMA
	//5 - Port additional functions?

	/* Fetches new data on:blur when user selects tradingPair || granularity */
	async function loadData() {
		let res = await fetch(`api/coinbase-pro/${tradingPair}.json?granularity=${granularity}`);
		let tempData = await res.json();
		tempGranularity = granularity;
		data = filterUnwanted(tempData.data);
	}

	const determineColor = (d, i) => {
		if (d.close > d.open) {
			return '#04DF08';
		} else if (d.open > d.close) {
			return '#DF3604';
		} else if (i == 0) {
			return '#04DF08';
		} else if (testData[i - 1].close > testData[i - 1].open) {
			return '#04DF08';
		} else if (testData[i - 1].open > testData[i - 1].close) {
			return '#DF3604';
		} else {
			return determineColor(i - 1);
		}
	};

	/* Reactive portion of code */
	$: count =
		w <= 400 ? 30 : w <= 650 ? 40 : w <= 800 ? 60 : w <= 1000 ? 125 : w <= 1500 ? 150 : 175;

	$: ema12 = Ema(
		data.map((dat) => dat.close),
		12
	).slice(data.length - count, data.length - 1);

	$: ema26 = Ema(
		data.map((dat) => dat.close),
		26
	).slice(data.length - count, data.length - 1);

	$: testData = data.slice(data.length - count, data.length - 1);

	$: testData.forEach((dat, i) => {
		dat.ema12 = ema12[i];
		dat.ema26 = ema26[i];
	});

	$: minX = Math.min.apply(
		null,
		testData.map((item) => item.openTimeInMillis)
	);

	$: maxX = Math.max.apply(
		null,
		testData.map((item) => item.openTimeInMillis)
	);

	$: minY = Math.min.apply(
		null,
		testData.map((item) => item.low)
	);

	$: maxY = Math.max.apply(
		null,
		testData.map((item) => item.high)
	);
</script>

<div class="flex flex-col">
	<h3
		class="font-extralight font-sans mx-auto my-5 text-xl text-red-800 break-words lg:text-2xl dark:text-green-400"
	>
		Coinbase Pro {testData[0].productId} Candlestick Chart (In Progress):
	</h3>
	<div class="mx-auto gap-4 inline-flex items-center">
		<label class="block">
			<span class="text-gray-800 dark:text-gray-200">Trading Pair:</span>
			<select bind:value={tradingPair} on:blur={loadData} class="mt-1 w-full form-select block">
				{#each pairs as pair}
					<option value={pair}>{pair}</option>
				{/each}
			</select>
		</label>
		<label class="block">
			<span class="text-gray-800 dark:text-gray-200">Candle Duration:</span>
			<select bind:value={granularity} on:blur={loadData} class="mt-1 w-full form-select block">
				{#each candleGranularity as period}
					<option value={period.value}>{period.label}</option>
				{/each}
			</select>
		</label>
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

<div bind:clientWidth={w} class="chart">
	<Pancake.Chart x1={minX} x2={maxX} y1={minY} y2={maxY}>
		<Pancake.Grid horizontal count={5} let:value let:first>
			<div class="grid-line horizontal"><span>{formatBase(value, testData[0].counter)}</span></div>
		</Pancake.Grid>

		<Pancake.Grid vertical count={w <= 650 ? 5 : 10} let:value>
			<div class="grid-line vertical" />
			<span class="x-label">{dayjs(value).format('HH:mm')}</span>
		</Pancake.Grid>
		<Pancake.Svg>
			{#each testData as dat, i}
				{#if dat && dat.open && dat.close && dat.low && dat.high}
					<Pancake.SvgPolygon data={genPolygon(dat)} let:d>
						<path
							{d}
							class="candle"
							style="fill:{determineColor(dat, i)}"
							title={`Open: ${formatBase(dat.open, dat.counter)}\nClose: ${formatBase(
								dat.close,
								dat.counter
							)}\nHigh: ${formatBase(dat.high, dat.counter)}\nLow: ${formatBase(
								dat.low,
								dat.counter
							)}`}
							use:tooltip
						/>
					</Pancake.SvgPolygon>
				{/if}
			{/each}
		</Pancake.Svg>
		{#if ema12Enabled}
			<div style="pointer-events:none">
				<Pancake.Svg>
					<Pancake.SvgLine
						data={testData}
						x={(d) => d.openTimeInMillis + d.sizeInMillis / 2}
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
						data={testData}
						x={(d) => d.openTimeInMillis + d.sizeInMillis / 2}
						y={(d) => d.ema26}
						let:d
					>
						<path class="stroke-fuchsia-600 trend dark:stroke-fuchsia-400" {d} />
					</Pancake.SvgLine>
				</Pancake.Svg>
			</div>
		{/if}
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
