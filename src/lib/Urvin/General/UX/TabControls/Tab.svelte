<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button
	class:selected={$selectedTab === tab}
	class="text-red-800 dark:text-green-400"
	on:click={() => selectTab(tab)}
>
	<slot />
</button>

<style>
	button {
		background: none;
		border: none;
		padding-right: 1em;
		border-radius: 0;
		margin: 0;
	}

	.selected {
		border-bottom: 2px solid teal;
	}
</style>
