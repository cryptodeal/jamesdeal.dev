<svelte:head>
  <meta property="og:type" content="article" />
</svelte:head>
<div class="mx-auto max-w-3xl py-5 px-4 sm:(px-6 py-12) lg:(max-w-4xl py-16 px-8) xl:max-w-6xl">
  <article class="mx-auto prose dark:prose-dark prose-sm sm:prose lg:prose-xl 2xl:prose-2xl">
    <slot />
  </article>
  <div class="flex py-1 twitter justify-center">
    <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Check%20this%20out:%20" rel="noopener"
      data-size="large">
      Tweet
    </a>
    <script src="https://platform.twitter.com/widgets.js" />
  </div>
</div>