<script context="module">
  const modules = import.meta.globEager('./interests/*.svelte');
  export const interests = Object.values(modules).map((mod) => ({ Interest: mod.default }));
</script>
<script>
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
	
	.tab-panel-content {
		margin: auto;
		padding: 3rem;
		color: #FFF;
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

<progress value={$progress}></progress>
<div class="tab-panels-container" bind:clientWidth={containerWidth} on:scroll={({target}) => handleScroll(target)}>
	{#each interests as {Interest}}
		<div class="tab-panel">
			<div class="tab-panel-content">
			  <Interest/>
			</div>
	</div>
	{/each}
</div>