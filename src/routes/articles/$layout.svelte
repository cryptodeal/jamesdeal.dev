<svelte:head>
  <title>Recent Articles</title>

  <meta name="description" content="Recent Articles: The latest musings of a sleep deprived dev.">
  <meta name="keywords" content="James Deal, Developer, Front End, Svelte, Back End">

  <meta property="og:title" content="Recent Articles" />
  <meta property="og:description" content="Recent Articles: The latest musings of a sleep deprived dev." />
</svelte:head>
<main>
  <slot></slot>
</main>
<style>

  main {
    position: static;
    padding: 2em;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>