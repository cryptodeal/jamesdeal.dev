<script>
	import * as Pancake from '@sveltejs/pancake';
	import dayjs from 'dayjs';
	import { filterUnwanted, formatBase } from '$lib/dataviz/crypto/utils';
	import EMALine from '$lib/Urvin/TALib/EMALine.svelte';
	import Candles from '$lib/Urvin/General/Candles.svelte';
	export let cryptoData;
	/*function addEmaPeriod(periods, ) {
		emaPeriods = [...emaPeriods, {
			periods: 12,
			enabled: false,
			color: '#1d4ed8',
			darkColor: '#7dd3fc',
			data: []
		}];
		newItem = '';
	}*/
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
	let emaPeriods = [
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

	/* Reactive portion of code */
	$: count =
		w <= 400 ? 30 : w <= 650 ? 40 : w <= 800 ? 60 : w <= 1000 ? 125 : w <= 1500 ? 150 : 175;

	$: testData = data.slice(data.length - (count + 1), data.length - 1);

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
				bind:checked={emaPeriods[0].enabled}
			/>
			<span class="mt-1 text-blue-700 dark:text-light-blue-300">EMA 12</span>
		</label>

		<label class="block">
			<input
				type="checkbox"
				class="text-fuchsia-600 form-checkbox dark:text-fuchsia-400"
				bind:checked={emaPeriods[1].enabled}
			/>
			<span class="mt-1 text-fuchsia-600 dark:text-fuchsia-400">EMA 26</span>
		</label>
	</div>
</div>

<!-- In Progress: Break All Existing Charts into Reusable Components for Urvin.Finance -->
<div bind:clientWidth={w} class="chart">
	<Pancake.Chart x1={minX} x2={maxX} y1={minY} y2={maxY}>
		<Pancake.Grid horizontal count={5} let:value let:first>
			<div class="grid-line horizontal"><span>{formatBase(value, testData[0].counter)}</span></div>
		</Pancake.Grid>

		<Pancake.Grid vertical count={w <= 650 ? 5 : 10} let:value>
			<div class="grid-line vertical" />
			<span class="x-label">{dayjs(value).format('HH:mm')}</span>
		</Pancake.Grid>

		<!-- Reusable EMA Trend Line Component for Urvin.Finance -->
		<EMALine {emaPeriods} {data} {count} />

		<!-- Reusable Candle Chart Component for Urvin.Finance -->
		<Candles {data} {count} />
	</Pancake.Chart>
</div>

<style>
	.chart {
		height: 500px;
		padding: 3em 0 2em 3em;
		margin: 0 3em 36px 3em;
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
