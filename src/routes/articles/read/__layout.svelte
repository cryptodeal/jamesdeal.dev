<svelte:head>
  <meta property="og:type" content="article" />
</svelte:head>
<div class="mx-auto max-w-3xl py-10 px-4 sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
  <article class="mx-auto prose prose-sm sm:prose lg:prose-xl 2xl:prose-2xl">
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