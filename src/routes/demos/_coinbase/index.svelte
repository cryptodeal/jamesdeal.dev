<script>
	import * as Pancake from '@sveltejs/pancake';
	import dayjs from 'dayjs';
	import { filterUnwanted, formatBase } from '$lib/dataviz/crypto/utils';
	import EMALine from '$lib/Urvin/TALib/EMA/Viz/EMALine.svelte';
	import Candles from '$lib/Urvin/General/Candles.svelte';
	import { theme } from '$lib/stores/localStore.js';
	import { getNotificationsContext } from 'svelte-notifications';
	const { addNotification } = getNotificationsContext();
	export let cryptoData;

	/* Adds user defined EMA Trend Calc */
	function addEmaPeriod() {
		if (newPeriods == null) {
			addNotification({
				text: `ERROR: Must Specify Num. of Periods Used to Calc. EMA`,
				position: 'top-right',
				type: 'danger',
				removeAfter: 4000
			});
		} else {
			let alreadyExists = emaPeriods.some((el) => el.periods === parseInt(newPeriods));
			if (!alreadyExists) {
				emaPeriods = [
					...emaPeriods,
					{
						periods: parseInt(newPeriods),
						enabled: true,
						color: colorLight,
						darkColor: colorDark,
						userDefined: true,
						data: []
					}
				];
				newPeriods = null;
				colorLight = randomColor();
				colorDark = randomColor();
			} else {
				addNotification({
					text: `ERROR: Cannot use Num. of Periods for EMA Trend More Than Once!`,
					position: 'top-right',
					type: 'danger',
					removeAfter: 4000
				});
			}
		}
	}

	/* Removes user defined EMA Trend Calc */
	function removeEmaPeriod(index) {
		emaPeriods.splice(index, 1);
		emaPeriods = emaPeriods;
	}

	/* Returns a randomly generated color */
	const randomColor = () => {
		return (
			'#' +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, '0')
		);
	};

	/* Initialize variables used to add EMA Lines */
	let newPeriods = null;
	let colorLight = randomColor();
	let colorDark = randomColor();

	let tradingPair = `ETH-USD`;
	const candleGranularity = [
		{ label: `1 Min`, value: 60 },
		{ label: `5 Min`, value: 300 },
		{ label: `15 Min`, value: 900 },
		{ label: `1 Hour`, value: 3600 },
		{ label: `6 Hours`, value: 21600 },
		{ label: `1 Day`, value: 86400 }
	];

	/* Define w (binds to width of chart)
  used to calc # of visible candlesticks */
	let w;
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
	$: emaPeriods = [
		{
			periods: 12,
			enabled: false,
			color: '#1d4ed8',
			darkColor: '#7dd3fc',
			userDefined: false,
			data: []
		},
		{
			periods: 26,
			enabled: false,
			color: '#c026d3',
			darkColor: '#e879f9',
			userDefined: false,
			data: []
		}
	];

	$: count =
		w <= 400 ? 30 : w <= 650 ? 40 : w <= 800 ? 60 : w <= 1000 ? 125 : w <= 1500 ? 150 : 175;

	$: testData = data.slice(data.length - (count + 1), data.length - 1);

	/* Calc min X value for chart scale */
	$: minX = Math.min.apply(
		null,
		testData.map((item) => item.openTimeInMillis)
	);

	/* Calc max X value for chart scale */
	$: maxX = Math.max.apply(
		null,
		testData.map((item) => item.openTimeInMillis)
	);

	/* Calc min Y value for chart scale */
	$: minY = Math.min.apply(
		null,
		testData.map((item) => item.low)
	);

	/* Calc max Y value for chart scale */
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
	<div class="mx-auto my-3 gap-4 inline-flex items-center">
		<label class="block">
			<span class="text-red-800 block dark:text-green-400">Trading Pair:</span>
			<select bind:value={tradingPair} on:blur={loadData}>
				{#each pairs as pair}
					<option value={pair}>{pair}</option>
				{/each}
			</select>
		</label>
		<label class="block">
			<span class="text-red-800 block dark:text-green-400">Candle Duration:</span>
			<select bind:value={granularity} on:blur={loadData}>
				{#each candleGranularity as period}
					<option value={period.value}>{period.label}</option>
				{/each}
			</select>
		</label>
	</div>
	<!-- EMA Config -->
	<div class="flex-wrap mx-auto gap-4 inline-flex items-center">
		<label class="mx-auto block">
			<span class="text-red-800 block dark:text-green-400">Num Periods:</span>
			<input bind:value={newPeriods} type="number" min="1" placeholder="EMA Periods" />
		</label>
		<label class="mx-auto block">
			<span class="text-red-800 block dark:text-green-400">Light Mode:</span>
			<input bind:value={colorLight} class="ml-5" type="color" />
		</label>
		<label class="mx-auto block">
			<span class="mx-auto text-red-800 block dark:text-green-400">Dark Mode:</span>
			<input bind:value={colorDark} class="ml-5" type="color" />
		</label>
		<div class="mx-auto block">
			<button
				on:click={addEmaPeriod}
				class="border rounded font-semibold bg-blue-300 border-blue-600 shadow py-2 px-4 text-red-800 block dark:(bg-purple-900 text-green-400 border-purple-500) hover:bg-blue-400 dark:hover:bg-purple-700"
			>
				Add EMA
			</button>
		</div>
	</div>
	<div class="flex-wrap mx-auto my-3 gap-4 inline-flex items-center">
		{#each emaPeriods as ema, index}
			<label class="block">
				<input
					type="checkbox"
					style="color:{$theme === 'dark' ? ema.darkColor : ema.color}"
					bind:checked={emaPeriods[index].enabled}
				/>
				<span class="mt-1" style="color:{$theme === 'dark' ? ema.darkColor : ema.color}"
					>EMA{ema.periods}</span
				>
				{#if ema.userDefined == true}
					<button on:click={() => removeEmaPeriod(index)}>❌</button>
				{/if}
			</label>
		{/each}
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

		<!-- Reusable Candle Chart Component for Urvin.Finance -->
		<Candles {data} {count} />

		<!-- Reusable EMA Trend Line Component for Urvin.Finance -->
		<EMALine {emaPeriods} {data} {count} />
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

	input[type='color'] {
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 40px;
		background: none;
	}
	input[type='color']::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	input[type='color']::-webkit-color-swatch {
		border: solid 1px #000; /*change color of the swatch border here*/
		border-radius: 40px;
	}
</style>
