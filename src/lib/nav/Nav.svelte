<script>
  export let segment
  import '$static/nav.css'
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

<nav
  class="border-b flex font-light bg-opacity-80 bg-blue-300 border-yellow-50 py-0 px-4 text-red-800 items-center justify-between dark:(text-green-400 bg-purple-900 bg-opacity-30 border-gray-900)">
  <ul class='m-0 p-0'>
    <li class='block float-left'><a class='py-4 px-2 no-underline block'
        aria-current='{segment === "" ? "page" : undefined}' sveltekit:prefetch href='/'>home</a></li>
    <li class='block float-left'><a class='py-4 px-2 no-underline block'
        aria-current='{segment === "articles" ? "page" : undefined}' sveltekit:prefetch href='/articles'>articles</a>
    </li>
    <li class='block float-left'><a class='py-4 px-2 no-underline block'
        aria-current='{segment === "about" ? "page" : undefined}' sveltekit:prefetch href='/about'>about</a></li>
  </ul>
  <ul>
    {#if toggled !== null}
    <Toggle hideLabel label="Toggle Theme" switchColor="{toggled ? '#111827' : '#FFFBEB'}" toggledColor="#34D399"
      untoggledColor="#991B1B" on="Dark" off="Light" on:click={toggle} bind:toggled />
    {/if}
  </ul>
</nav>