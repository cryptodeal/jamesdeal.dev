<script>
  import Typewriter from "svelte-typewriter";
  import LazySrcset from '$lib/images/LazySrcsetPerf.svelte'
  import proHeadshot from '$static/headshot1.jpg?w=600&meta'
  import proHeadshotWebP from '$static/headshot1.jpg?w=200;400;600;1000&format=webp&srcset'
  import proHeadshotAvif from '$static/headshot1.jpg?w=200;400;600;1000&format=avif&srcset'
  import proHeadshotBlur from '$static/headshot1.jpg?w=300&blur=100&quality=30'
  import nahNahNah from '$static/nahNahNah.jpeg?w=800&meta'
  import nahNahNahWebP from '$static/nahNahNah.jpeg?w=500;1000;2000&format=webp&srcset'
  import nahNahNahAvif from '$static/nahNahNah.jpeg?w=500;1000;2000&format=avif&srcset'
  import nahNahNahBlur from '$static/nahNahNah.jpeg?w=300&blur=100&quality=30'
  import test from '$static/test.jpg?w=800&meta'
  import testWebP from '$static/test.jpg?w=500;1000;2000&format=webp&srcset'
  import testAvif from '$static/test.jpg?w=500;1000;2000&format=avif&srcset'
  import testBlur from '$static/test.jpg?w=300&blur=100&quality=30'
  let alt = 'Professional headshot of James Deal'
  let proHeadshotRatio = `${(1 / (proHeadshot.width / proHeadshot.height)) * 100}%`
  let nahNahNahRatio = `${(1 / (nahNahNah.width / nahNahNah.height)) * 100}%`
  let testRatio = `${(1 / (test.width / test.height)) * 100}%`
  let sizes = "(min-width: 1500px) 2000px, 100vw"
  let headshotSizes = "(min-width: 1500px) 1000px, 100vw"
</script>

<svelte:head>
  <title>The Musings of a Mad Dev</title>

  <meta name="description" content="Latest articles, anecdotes, projects, and cool code snippets from James Deal." />
  <meta name="keywords" content="James Deal, Front End, Back End, Svelte, Javascript" />

  <meta property="og:title" content="The Musings of a Mad Dev" />
  <meta property="og:description"
    content="Latest articles, anecdotes, projects, and cool code snippets from James Deal." />
</svelte:head>

<div class="flex flex-col text-center h-40 my-10">
  <div class="py-1 relative">
    <Typewriter cursor={false}>
      <h1 class="font-thin text-7xl text-red-800 uppercase dark:text-green-400">
        Meet James Deal
      </h1>
    </Typewriter>
  </div>
</div>
<section class="container mx-auto px-6 p-10">
  <div class="flex items-center flex-wrap mb-15">
    <div class="w-full md:(w-1/2 pr-10)">
      <h2 class='uppercase text-3xl mb-3 sm:text-5xl font-thin text-red-800 dark:text-green-400'>About Me</h2>
      <p class="text-gray-800 text-sm font-thin dark:text-gray-200 mb-8">I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack development, with a focus on building light-weight front end applications (SPA/Static, PWA, SSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js bindings for performance. My applications utilize both REST and Websocket API.</p>
    </div>
    <div class="w-full h-98 md:(w-1/2 pl-10)">
      <LazySrcset
        src={proHeadshot}
        ratio={proHeadshotRatio}
        srcsetWebP={proHeadshotWebP}
        srcsetAvif={proHeadshotAvif}
        sizes={headshotSizes}
        placeholder={proHeadshotBlur}
        {alt}
      />
    </div>
  </div>

  <div class="flex items-center flex-wrap-reverse mb-15">
    <div class="w-full h-98 md:(w-1/2 pr-10) object-contain">
      <LazySrcset
        src={nahNahNah}
        ratio={nahNahNahRatio}
        srcsetWebP={nahNahNahWebP}
        srcsetAvif={nahNahNahAvif}
        {sizes}
        placeholder={nahNahNahBlur}
        {alt}
      />
    </div>
    <div class="w-full md:(w-1/2 pl-10)">
      <h2 class='uppercase text-3xl mb-3 sm:text-5xl font-thin text-red-800 dark:text-green-400'>About Me</h2>
      <p class="text-gray-800 text-sm font-thin dark:text-gray-200 mb-8">I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack development, with a focus on building light-weight front end applications (SPA/Static, PWA, SSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js bindings for performance. My applications utilize both REST and Websocket API.</p>
    </div>
  </div>

  <div class="flex items-center flex-wrap mb-15">
    <div class="w-full md:(w-1/2 pr-10)">
      <h2 class='uppercase text-3xl mb-3 sm:text-5xl font-thin text-red-800 dark:text-green-400'>About Me</h2>
      <p class="text-gray-800 text-sm font-thin dark:text-gray-200 mb-8">I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack development, with a focus on building light-weight front end applications (SPA/Static, PWA, SSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js bindings for performance. My applications utilize both REST and Websocket API.</p>
    </div>
    <div class="w-full md:(w-1/2 pl-10)">
      <LazySrcset
        src={test}
        ratio={testRatio}
        srcsetWebP={testWebP}
        srcsetAvif={testAvif}
        {sizes}
        placeholder={testBlur}
        {alt}
      />
    </div>
  </div>
</section>

<style>
  :root {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cxantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
  }
</style>