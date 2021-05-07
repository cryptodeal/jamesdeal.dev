<script>
  import '$static/prism.css'
</script>
<svelte:head>
  <meta property="og:type" content="article" />
</svelte:head>
<div class="container mx-auto p-10">
  <article class="text-left text-base content" itemscope itemtype="http://schema.org/TechArticle">
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