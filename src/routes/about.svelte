<script context="module">
	import { browser } from '$app/env';

	export const router = browser;

	export const prerender = true;
</script>

<script>
	import Pill from '$lib/about/Pill.svelte';
	import Subtitle from '$lib/about/Subtitle.svelte';
	import SectionTitle from '$lib/about/SectionTitle.svelte';
	import Dates from '$lib/about/Dates.svelte';
	import BulletedList from '$lib/about/BulletedList.svelte';
	import { titles, content } from '$lib/about/_ResumeContent';
</script>

<svelte:head>
	<title>My Resume - James Deal</title>
	<meta name="description" content="Academic and professional experience, skills, and interests." />
	<meta name="keywords" content="James Deal" />
	<meta property="og:title" content="My Resume - James Deal" />
	<meta
		property="og:description"
		content="My academic and professional experience, skills, and interests."
	/>
</svelte:head>

<div
	class="rounded-lg h-full bg-opacity-80 bg-blue-300 my-5 mx-10 auto-rows-min grid py-5 gap-2 grid-cols-1 break-words md:(gap-4 grid-cols-2 mx-20) lg:mx-30 xl:mx-40 2xl:mx-60 dark:(bg-purple-900 bg-opacity-30)"
>
	<SectionTitle title={titles.edu} />
	<div class="text-center">
		<Subtitle title={content.edu.subtitle} />
		<Dates dates={content.edu.dates} />
		<BulletedList bulletItems={content.edu.info} />
	</div>

	<SectionTitle title={titles.skills} />
	<div class="text-center">
		<Subtitle title={content.skills.lang.subtitle} />
		<div class="text-center w-3/4 inline-block md:text-left">
			{#each content.skills.lang.list as text}
				<Pill {text} />
			{/each}
		</div>

		<Subtitle title={content.skills.libs.subtitle} />
		<div class="text-center w-3/4 inline-block md:text-left">
			{#each content.skills.libs.list as t}
				<Pill text={t[0]} href={t[1]} />
			{/each}
		</div>

		<Subtitle title={content.skills.graphics.subtitle} />
		<div class="text-center w-3/4 inline-block md:text-left">
			{#each content.skills.graphics.list as t}
				{#if Array.isArray(t)}
					<Pill text={t[0]} href={t[1]} />
				{:else}
					<Pill text={t} />
				{/if}
			{/each}
		</div>
	</div>

	<SectionTitle title={titles.stack} />
	<div class="text-center">
		<Subtitle title={content.stack.frontend.subtitle} />
		<BulletedList bulletItems={content.stack.frontend.list} />
		<Subtitle title={content.stack.backend.subtitle} />
		<BulletedList bulletItems={content.stack.backend.list} />
	</div>

	<SectionTitle title={titles.exp} />
	<div class="text-center">
		<Subtitle
			title={content.exp.uw.subtitle.title}
			href={content.exp.uw.subtitle.href}
			role={content.exp.uw.subtitle.role}
		/>
		<Dates dates={content.exp.uw.dates} />
		<BulletedList bulletItems={content.exp.uw.info} />

		<Subtitle
			title={content.exp.reyReyPSC.subtitle.title}
			href={content.exp.reyReyPSC.subtitle.href}
			role={content.exp.reyReyPSC.subtitle.role}
		/>
		<Dates dates={content.exp.reyReyPSC.dates} />
		<BulletedList bulletItems={content.exp.reyReyPSC.info} />

		<Subtitle
			title={content.exp.coss.subtitle.title}
			href={content.exp.coss.subtitle.href}
			role={content.exp.coss.subtitle.role}
		/>
		<Dates dates={content.exp.coss.dates} />
		<BulletedList bulletItems={content.exp.coss.info} />

		<Subtitle
			title={content.exp.reyReyIT.subtitle.title}
			href={content.exp.reyReyIT.subtitle.href}
			role={content.exp.reyReyIT.subtitle.role}
		/>
		<Dates dates={content.exp.reyReyIT.dates} />
		<BulletedList bulletItems={content.exp.reyReyIT.info} />
	</div>
</div>
