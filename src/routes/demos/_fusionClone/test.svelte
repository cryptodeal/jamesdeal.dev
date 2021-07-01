<script>
	import data from '$lib/dataviz/FusionClone/data.json';
	import Candlestick from '$lib/dataviz/FusionClone/graphics/Candlestick.svelte';
	//$: console.log(parsed)
</script>

<Candlestick {data} />
