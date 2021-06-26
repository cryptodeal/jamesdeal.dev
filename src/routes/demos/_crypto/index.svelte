<script>
	import * as Pancake from '@sveltejs/pancake';
	import * as yootils from 'yootils';
	let w;
	import dayjs from 'dayjs';
	export let cryptoData;
	let { data } = cryptoData;
	//const resize
	$: console.log(w);
	$: count = w <= 650 ? 40 : w <= 800 ? 60 : w <= 1000 ? 125 : w <= 1500 ? 150 : 175;

	$: testData = data.slice(data.length - count, data.length - 1);

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

<div class="flex">
	<h3
		class="font-extralight font-sans mx-auto my-5 text-xl text-red-800 break-words lg:text-2xl dark:text-green-400"
	>
		Coinbase Pro ETH-USD Candlestick Chart (In Progress):
	</h3>
</div>
<div bind:clientWidth={w} class="chart">
	<Pancake.Chart x1={minX} x2={maxX} y1={minY} y2={maxY}>
		<Pancake.Grid horizontal count={5} let:value let:first>
			<div class="grid-line horizontal"><span>{`$${yootils.commas(value)}`}</span></div>
		</Pancake.Grid>

		<Pancake.Grid vertical count={10} let:value>
			<div class="grid-line vertical" />
			<span class="x-label">{dayjs(value).format('HH:mm')}</span>
		</Pancake.Grid>

		{#each testData as d, i}
			{#if d.open > d.close}
				<Pancake.Box
					x1={d.openTimeInMillis - 900000 / 2}
					x2={d.openTimeInMillis + 900000 / 2}
					y1={d.open}
					y2={d.close}
				>
					<div class="box" style="background-color:#Df3604" />
				</Pancake.Box>
				<Pancake.Box
					x1={d.openTimeInMillis - 150000}
					x2={d.openTimeInMillis + 150000}
					y1={d.high}
					y2={d.low}
				>
					<div class="box" style="background-color:#Df3604" />
				</Pancake.Box>
			{:else if d.close > d.open}
				<Pancake.Box
					x1={d.openTimeInMillis - 900000 / 2}
					x2={d.openTimeInMillis + 900000 / 2}
					y1={d.close}
					y2={d.open}
				>
					<div class="box" style="background-color:#04DF08" />
				</Pancake.Box>
				<Pancake.Box
					x1={d.openTimeInMillis - 150000}
					x2={d.openTimeInMillis + 150000}
					y1={d.high}
					y2={d.low}
				>
					<div class="box" style="background-color:#04DF08" />
				</Pancake.Box>
			{:else}
				<Pancake.Box
					x1={d.openTimeInMillis - 900000 / 2}
					x2={d.openTimeInMillis + 900000 / 2}
					y1={d.open}
					y2={d.close}
				>
					<div
						class="box"
						style="background-color:{d[i - 1].open >= d[i - 1].close ? '#Df3604' : '#04DF08'}"
					/>
				</Pancake.Box>
				<Pancake.Box
					x1={d.openTimeInMillis - 150000}
					x2={d.openTimeInMillis + 150000}
					y1={d.high}
					y2={d.low}
				>
					<div
						class="box"
						style="background-color:{d[i - 1].open >= d[i - 1].close ? '#Df3604' : '#04DF08'}"
					/>
				</Pancake.Box>
			{/if}
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
		left: -1.5em;
		border: 1px dashed rgba(204, 204, 204, 0.5);
	}

	.grid-line.vertical {
		height: 100%;
		border-left: 1px dashed rgba(204, 204, 204, 0.5);
	}

	.grid-line span {
		position: absolute;
		left: -3em;
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
		left: 1px;
		width: calc(100% - 2px);
		height: 100%;
		border-radius: 0.5px;
	}
</style>
