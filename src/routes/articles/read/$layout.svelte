<script>
  import '$static/prism.css'
</script>
<svelte:head>
  <meta property="og:type" content="article" />
</svelte:head>
<div class="container mx-auto">
  <article class="content text-left text-base" itemscope itemtype="http://schema.org/TechArticle">
    <slot/>
  </article>
  <div class="twitter flex py-1 justify-center">
    <a
      class="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Check%20this%20out:%20"
      rel="noopener"
      data-size="large"
      >
      Tweet
    </a>
    <script src="https://platform.twitter.com/widgets.js"/>
  </div>
</div>