<script>
	import * as Pancake from '@sveltejs/pancake';
	import dayjs from 'dayjs';
	//import points from '$lib/dataviz/crypto/points.js';
	export let cryptoData;
	let { data } = cryptoData;
	$: console.log(data);
	//const fruits = ['apples', 'bananas', 'cherries', 'dates'];
	const colors = ['#00bbff', '#8bcef6', '#c4e2ed', '#f7f6e3'];
	$: minX = data.reduce((min, candle) =>
		Math.min(minX ? minX : candle.openTimeInMillis, candle.openTimeInMillis)
	);
	$: console.log(minX);
	$: maxX = data.reduce((max, candle) => Math.max(max, candle.high), 0);
	$: console.log(minX);
	$: minY = data.reduce((min, candle) => Math.min(minY ? minY : candle.low, candle.low));
	$: maxY = data.reduce((max, candle) => Math.max(max, candle.high), 0);
</script>

<div class="flex">
	<h3
		class="font-extralight font-sans mx-auto my-5 text-xl text-red-800 break-words lg:text-2xl dark:text-green-400"
	>
		Coinbase Pro ETH-USD Candlestick Chart (In Progress):
	</h3>
</div>
<div class="chart">
	<Pancake.Chart x1={minX} x2={maxX} y1={minY} y2={maxY}>
		<Pancake.Grid horizontal count={5} let:value let:first>
			<div class="grid-line horizontal"><span>{value}</span></div>
		</Pancake.Grid>

		<Pancake.Grid vertical count={10} let:value>
			<div class="grid-line vertical" />
			<span class="x-label">{new dayjs(value).format('HH:mm')}</span>
		</Pancake.Grid>

		{#each data as d}
			<Pancake.Box x1={d.openTimeInMillis} x2={d.openTimeInMillis + 900000} y1={d.low} y2={d.high}>
				<div class="box" style="background-color:{colors[0]}" />
			</Pancake.Box>
		{/each}
	</Pancake.Chart>
</div>

<style>
	.chart {
		height: 200px;
		padding: 3em 0 2em 3em;
		margin: 0 0 36px 0;
	}

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: calc(100% + 3em);
		left: -3em;
		border: 0.5px dashed #ccc;
	}

	.grid-line.vertical {
		height: 100%;
		border-left: 1px dashed #ccc;
	}

	.grid-line span {
		position: absolute;
		left: 0;
		bottom: -0.5em;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		line-height: 1;
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

	.box {
		position: absolute;
		left: 0;
		top: 2px;
		width: 100%;
		height: 100%;
		border-radius: 1px;
	}
</style>
