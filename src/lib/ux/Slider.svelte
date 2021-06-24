<script>
	export let interests;
	import { tweened } from 'svelte/motion';
	import { sineOut } from 'svelte/easing';
	const progress = tweened(1 / interests.length, {
		duration: 200,
		easing: sineOut
	});
	let containerWidth;
	let scrolledLeft = 0;
	const handleScroll = (target) => {
		scrolledLeft = target.scrollLeft;
		progress.set(target.scrollLeft / (interests.length * containerWidth) + 1 / interests.length);
	};
</script>

<progress class="rounded-lg px-5 lg:px-8" value={$progress} />
<div
	class="tab-panels-container"
	bind:clientWidth={containerWidth}
	on:scroll={({ target }) => handleScroll(target)}
>
	{#each interests as { Interest }, i}
		<div class="tab-panel">
			<div class="tab-panel-content">
				<Interest num={i} />
			</div>
		</div>
	{/each}
</div>

<style>
	progress {
		width: 100%;
		height: 5px;
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
