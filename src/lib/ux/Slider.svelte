
<script>
  export let interests;
	import { tweened } from 'svelte/motion';
	import { sineOut } from 'svelte/easing';
	const progress = tweened(1/interests.length, {
		duration: 200,
		easing: sineOut
	});
  let containerWidth;
	let scrolledLeft = 0;
  const handleScroll = (target) => {
    scrolledLeft = target.scrollLeft
    progress.set(target.scrollLeft / (interests.length * containerWidth) + 1 / interests.length)
  }
</script>
<style>
  progress {
		display: block;
		width: 100%;
    height: 5px;
    margin-bottom: .75rem;
	}
  
  progress[value]::-webkit-progress-bar {
    background-color: #34D399;
  }

  progress[value]::-webkit-progress-value {
    background-color: #15803D;
  }

  .tab-panels-container {
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		height: 100%;
		width: 100%;
		display: flex;
	}

  .tab-panels-container::-webkit-scrollbar {
    display: none;
  }

	.tab-panel {
    scroll-snap-align: start;
    /* only supported in Chrome */
    scroll-snap-stop: always;
		width: 100%;
		flex: 1 0 auto;
		height: auto;
		display: flex;
  }
</style>

<progress class='rounde-lg' value={$progress}></progress>
<div class="tab-panels-container" bind:clientWidth={containerWidth} on:scroll={({target}) => handleScroll(target)}>
	{#each interests as {Interest}, i}
		<div class="tab-panel">
			<div class="tab-panel-content">
			  <Interest num={i}/>
			</div>
	</div>
	{/each}
</div>