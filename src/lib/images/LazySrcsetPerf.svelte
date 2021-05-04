<script>
	import { onMount } from 'svelte';
	let blur = true;
	let observerCallback = function (entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				intersected = true;
				observer.unobserve(imgElement);
			}
		});
	};
	export let style;
	/**
	 * Image aspect ratio.
	 * @type {string}
	 */
	export let ratio;
	/**
	 * WebP Image srcset.
	 * @type {string}
	 */
	export let srcsetWebP;
	/**
	 * AVIF Image srcset.
	 * @type {string}
	 */
	export let srcsetAvif;
	/**
	 * WebP Image srcset.
	 * @type {string}
	 */
	export let sizes;
	/**
	 * Path to placeholder image.
	 * @type {string}
	 */
	export let placeholder;
	/**
	 * Path to image.
	 * @type {string}
	 */
	export let src;
	/**
	 * Alt image text description for accessibility.
	 * @type {string}
	 */
	export let alt;
	let imgElement;
	let path;
	let observer;
	let intersected = false;
	let loaded = false;
	let placeholderAlt = 'placeholder image';
	$: path = intersected ? src : placeholder;
	onMount(() => {
		observer = new IntersectionObserver(observerCallback);
		observer.observe(imgElement);
		return () => {
			observer.unobserve(imgElement);
		};
	});
	function handleLoad() {
		if (!loaded && path === src) {
			loaded = true;
		}
	}
</script>

<div class:loaded class="w-full relative">
	<div class="w-full relative overflow-hidden">
		<div style="padding-bottom:{ratio};" class="w-full">
			<img class="placeholder" class:blur src={placeholder} alt={placeholderAlt} {style} />
			<picture>
				<!--default to .avif i-->
				<source type="image/avif" srcset={srcsetAvif} {sizes} />

				<!--fall back to .webp srcset-->
				<source type="image/webp" srcset={srcsetWebP} {sizes} />

				<img
					src={path}
					{alt}
					{style}
					on:load={handleLoad}
					bind:this={imgElement}
					class="svelte-lazy-image main"
					class:svelte-lazy-image--loaded={loaded}
				/>
			</picture>
		</div>
	</div>
</div>

<style>
	img {
		object-position: center;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: contain;
		will-change: opacity;
		width: 100%;
	}

	.blur {
		transition: opacity 1000ms;
	}

	.placeholder {
		opacity: 1;
		transition: opacity 1000ms ease-out;
		transition-delay: 0.4s;
	}

	.main {
		opacity: 0;
		transition: opacity 1000ms ease-out;
		transition-delay: 0.4s;
	}

	.loaded .placeholder {
		opacity: 0;
		position: absolute;
	}

	.loaded .main {
		opacity: 1;
	}
</style>
