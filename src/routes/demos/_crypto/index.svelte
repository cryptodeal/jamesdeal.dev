<script>
	import * as Pancake from '@sveltejs/pancake';
	import dayjs from 'dayjs';
	export let cryptoData;
	let { data } = cryptoData;
	let testData = data.slice(0, 100);
	$: console.log(testData);

	$: minX = Math.min.apply(
		null,
		testData.map((item) => item.openTimeInMillis)
	);
	$: console.log(minX);

	$: maxX = Math.max.apply(
		null,
		testData.map((item) => item.openTimeInMillis)
	);
	$: console.log(maxX);
	$: minY = Math.min.apply(
		null,
		testData.map((item) => item.low)
	);
	$: console.log(minY);

	$: maxY = Math.max.apply(
		null,
		testData.map((item) => item.high)
	);
	$: console.log(maxY);

	$: console.log(testData);
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
			<span class="x-label">{dayjs(value).format('HH:mm')}</span>
		</Pancake.Grid>

		{#each testData as d}
			<Pancake.Box
				x1={d.openTimeInMillis - 900000 / 2}
				x2={d.openTimeInMillis + 900000 / 2}
				y1={d.low}
				y2={d.high}
			>
				<div class="box" style="background-color:{d.open > d.close ? '#Df3604' : '#04DF08'}" />
			</Pancake.Box>
		{/each}
	</Pancake.Chart>
</div>

<style>
	.chart {
		height: 500px;
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
		left: 2px;
		top: 2px;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		border-radius: 2px;
	}
</style>
