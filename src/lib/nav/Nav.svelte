<script>
  export let segment
  import Toggle from "svelte-toggle";
  import { browser } from '$app/env';
  import { theme } from '$lib/stores/localStore'
  let toggled = null
  if (browser) toggled = localStorage.getItem('theme') === 'dark' ? true : false
  const saveTheme = (mode, toggled) => {
    theme.set(mode)
    // eslint-disable-next-line no-unused-vars
    toggled = !toggled
  }
  const toggle = () => {
    if ($theme === "dark") {
      document.documentElement.classList.remove('dark')
      saveTheme('light', toggled)
    } else {
      document.documentElement.classList.add('dark')
      saveTheme('dark', toggled)
    }
  }
</script>

<style>
  
  ul {
    margin: 0px;
    padding: 0px;
  }

  li {
    display: block;
    float: left;
  }
  
  a {
		padding: 1em 0.5em;
    display: block;
    text-decoration: none;
  }
</style>

<nav>
  <ul>
    <li><a aria-current='{segment === "" ? "page" : undefined}' sveltekit:prefetch href='/'>home</a></li>
    <li><a aria-current='{segment === "articles" ? "page" : undefined}' sveltekit:prefetch href='/articles'>articles</a></li>
    <li><a aria-current='{segment === "about" ? "page" : undefined}' sveltekit:prefetch href='/about'>about</a></li>
    <li><a aria-current='{segment === "demos" ? "page" : undefined}' sveltekit:prefetch href='/demos'>demos</a></li>
  </ul>
  <ul>
    {#if toggled !== null}
    <Toggle hideLabel label="Toggle Theme" switchColor="{toggled ? '#111827' : '#FFFBEB'}" toggledColor="#34D399"
      untoggledColor="#991B1B" on="Dark" off="Light" on:click={toggle} bind:toggled />
    {/if}
  </ul>
</nav>