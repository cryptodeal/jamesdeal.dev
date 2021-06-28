<script>
	import { LayerCake, Svg } from 'layercake';
	import Hexbin from '$lib/dataviz/shotmap/hex/Hexbin.svelte';
	import Court from '$lib/dataviz/shotmap/court/index.svelte';
	import { points } from '$lib/dataviz/shotmap/points.js';
</script>

<div class="flex mx-auto">
	<h3
		class="font-extralight font-sans mx-auto my-5 text-xl text-red-800 break-words lg:text-2xl dark:text-green-400"
	>
		Keldon Johnson Career Shotmap:
	</h3>
</div>
<div class="flex mx-auto w-full md:w-1/2">
	<div class="dimensions-container overflow-hidden">
		<div class="chart-container">
			<LayerCake
				ssr={true}
				x="x"
				y="y"
				z="z"
				xDomain={[-250, 250]}
				yDomain={[-50, 420]}
				data={points}
			>
				<Svg>
					<!-- You can expose properties on your chart components to make them more reusable -->
					<Court />
					<Hexbin />
				</Svg>
			</LayerCake>
		</div>
	</div>
</div>
<div class="flex flex-col">
	<h4
		class="font-extralight font-sans mx-auto my-5 text-xl text-red-800 break-words lg:text-2xl dark:text-green-400"
	>
		Shooting Efficiency:
	</h4>
	<div class="flex-wrap mx-auto gap-10 inline-flex items-center">
		<div class="block">
			<p>0% &#8804; Eff. &#8804; 20%</p>
			<div class="h-3 w-auto" style="background-color:#5458A2" />
		</div>
		<div class="block">
			<p>20% &#60; Eff. &#8804; 40%</p>
			<div class="h-3 w-auto" style="background-color:#6689BB" />
		</div>
		<div class="block">
			<p>40% &#60; Eff. &#8804; 60%</p>
			<div class="h-3 w-auto" style="background-color:#FADC97" />
		</div>
		<div class="block">
			<p>60% &#60; Eff. &#8804; 80%</p>
			<div class="h-3 w-auto" style="background-color:#F08460" />
		</div>
		<div class="block">
			<p>60% &#80; Eff. &#8804; 100%</p>
			<div class="h-3 w-auto" style="background-color:#B02B48" />
		</div>
	</div>
</div>

<style>
	.dimensions-container {
		position: relative;
		width: 100%;
		padding-bottom: 94%;
	}
	.chart-container {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
