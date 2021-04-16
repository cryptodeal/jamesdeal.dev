<script>
  export let segment
  import Toggle from "svelte-toggle";
  import {browser} from '$app/env';
  let toggled = null
  $: theme = toggled == false ? "light" : "dark"
  if(browser){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      toggled = true
    } else {
      toggled = false
    }
  }
  const toggle = () => {
    if(theme === "dark"){
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }else{
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    }
  }
</script>
<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
	/* clearfix */
	ul::after {
		content: '';
    vertical-align: center;
		clear: both;
	}
	
</style>

<nav class="flex items-center py-0 px-4 justify-between bg-opacity-80 text-gray-50 border-b font-light border-yellow-50 bg-blue-800 dark:(text-green-400 bg-purple-900 bg-opacity-30 border-gray-900)">
	<ul class='m-0 p-0'>
		<li class='block float-left'><a class='no-underline block py-4 px-2' aria-current='{segment === "" ? "page" : undefined}' sveltekit:prefetch href='/'>home</a></li>
		<li class='block float-left'><a class='no-underline block py-4 px-2' aria-current='{segment === "articles" ? "page" : undefined}' sveltekit:prefetch href='/articles'>articles</a></li>
    <li class='block float-left'><a class='no-underline block py-4 px-2' aria-current='{segment === "about" ? "page" : undefined}' sveltekit:prefetch href='/about'>about</a></li>
	</ul>
  <ul>
    {#if toggled !== null}
      <Toggle
        hideLabel
        label="Toggle Theme"
        switchColor="{toggled ? '#111827' : '#FFFFFF'}"
        toggledColor="#34D399"
        untoggledColor="#FA923D"
        on="Dark"
        off="Light"
        on:click={toggle}
        bind:toggled
      />
    {/if}
  </ul>
</nav>
