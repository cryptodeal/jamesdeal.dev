<script>
  import Pill from '$lib/Pill.svelte'
  import Subtitle from '$lib/about/Subtitle.svelte'
  import SectionTitle from '$lib/about/SectionTitle.svelte'
  import Dates from '$lib/about/Dates.svelte'

  let languages = [
    `Javascript`,
    `Typescript`,
    `NoSQL`,
    `Bash`
  ]
  let frameworks = [
    [`Node`, `https://nodejs.org/en/`],
    [`Svelte`, `https://svelte.dev/`],
    [`Sapper`, `https://sapper.svelte.dev/`],
    [`SvelteKit`, `https://kit.svelte.dev/`],
    [`TailwindCSS`, `https://tailwindcss.com/`],
    [`WindiCSS`, `https://windicss.org/`],
    [`Rollup`, `https://rollupjs.org`],
    [`Vite`, `https://vitejs.dev/`],
    [`Express`, `https://expressjs.com/`],
    [`uWebsockets.js`, `https://github.com/uNetworking/uWebSockets.js`]
  ]
  let graphics = [
    'SVG',
    ['D3.js', `https://d3js.org/`],
    [`Layer Cake`, `https://layercake.graphics/`]
  ]
</script>
<svelte:head>
  <title>My Resume - James Deal</title>
  <meta name="description" content="My academic and profession experience, skills, and interests.">
  <meta name="keywords" content="James Deal">
  <meta property="og:title" content="My Resume - James Deal" />
  <meta property="og:description" content="My academic and profession experience, skills, and interests." />
</svelte:head>

<div class="grid auto-rows-min break-words grid-cols-1 my-5 h-full mx-10 py-5 rounded-lg gap-2 bg-opacity-80 bg-blue-600 dark:(bg-purple-900 bg-opacity-30) md:(gap-4 grid-cols-2 mx-20) lg:mx-30 xl:mx-40 2xl:mx-60">
  <SectionTitle title={'Education'}/>
  <div class='text-center'>
    <Subtitle title={'Texas A&M University'}/>
    <Dates dates={'AUG 2015 - DEC 2018, TX'}/>
    <ul class="inline-block items-center w-3/4 sm:w-1/2 md:w-3/4 list-disc list-inside text-left text-sm font-thin text-white dark:text-gray-200">
      <li>Bachelor of Arts in Philosophy</li>
      <li>Business Minor</li>
      <li>Undergraduate research into Nietzsche’s conception of ressentiment with Prof. <a href='https://liberalarts.tamu.edu/philosophy/profile/robert-burch/'>Robert Burch</a></li>
    </ul>
  </div>
  <SectionTitle title={'Skills'}/>
  <div class='text-center'>
    <Subtitle title={'Languages'}/>
    <div class='inline-block w-3/4 text-center md:text-left'>
      {#each languages as text}
        <Pill {text}/>
      {/each}
    </div>
    <Subtitle title={'Frameworks/Libraries'}/>
    <div class='inline-block w-3/4 text-center md:text-left'>
      {#each frameworks as t}
        <Pill text={t[0]} href={t[1]}/>
      {/each}
    </div>
    <Subtitle title={'Graphics/Data Viz'}/>
    <div class='inline-block w-3/4 text-center md:text-left'>
      {#each graphics as t}
        {#if Array.isArray(t)}
          <Pill text={t[0]} href={t[1]}/>
        {:else}
          <Pill text={t}/>
        {/if}
      {/each}
    </div>
  </div>
  <SectionTitle title={'My Stack'}/>
  <div class='text-center'>
    <Subtitle title={'Frontend'}/>
    <ul class="inline-block items-center w-3/4 sm:w-1/2 md:w-3/4 list-disc list-inside text-left text-sm font-thin text-white dark:text-gray-200">
      <li>Current Stack: SvelteKit (Vite + Windi Css)</li>
      <li>Previously: Sapper (Rollup)</li>
    </ul>
    <Subtitle title={'Backend'}/>
    <ul class="inline-block items-center w-3/4 sm:w-1/2 md:w-3/4 list-disc list-inside text-left text-sm font-thin text-white dark:text-gray-200">
      <li>Node.js</li>
      <li>uWebsockets.js (REST, Websockets, and Pub/Sub Support)</li>
      <li>MongoDb (Native & Mongoose)</li>
    </ul>
  </div>
  <SectionTitle title={'Experience'}/>
  <div class='text-center'>
    <Subtitle title={'UnaliWear'} href={'https://www.unaliwear.com/'} role={'UX, Customer Success & Acquisition'}/>
    <Dates dates={'May 2020 - PRESENT, AUSTIN, TX'}/>
    <ul class="inline-block items-center w-3/4 sm:w-1/2 md:w-3/4 list-disc list-inside text-left text-sm font-thin text-white dark:text-gray-200">
      <li>Worked to train new customers</li>
      <li>Fleshed out data aggregation pipelines to gather accelerometer data for on the wrist fall detection (responsible for doubling our dataset)</li>
      <li>Oversaw 500% increase in month to month sales rate</li>
      <li>Helped automate our workflow</li>
      <li>Worked with developers to create tools enabling us to better support our user base</li>
    </ul>
    <Subtitle title={'Reynolds and Reynolds'} href={'https://www.reyrey.com/'} role={'Software Consultant'}/>
    <Dates dates={'DEC 2018 - MAY 2019, TX'}/>
    <ul class="inline-block items-center w-3/4 sm:w-1/2 md:w-3/4 list-disc list-inside text-left text-sm font-thin text-white dark:text-gray-200">
      <li>Managed ~15 accounts with major car dealerships</li>
      <li>Resolved customer issues with the software</li>
      <li>Submitted bug reports to development team</li>
    </ul>
    <Subtitle title={'Cryptocurrency One Stop Solution ($COSS)'} href={'https://www.coss.io/'} role={'Contract Developer'}/>
    <Dates dates={'OCT 2018 - DEC 2018, REMOTE'}/>
    <ul class="inline-block items-center w-3/4 sm:w-1/2 md:w-3/4 list-disc list-inside text-left text-sm font-thin text-white dark:text-gray-200">
      <li>Contracted to write official Node.Js <a href='https://github.com/coss-exchange/trading-api-wrapper-node-js'>API wrapper</a></li>
      <li>Worked with COSS's backend head dev to flesh API requirements</li>
      <li>Reported bugs/security vulnerabilities to dev team during beta testing under NDA</li>
    </ul>
    <Subtitle title={'Reynolds and Reynolds'} href={'https://www.reyrey.com/'} role={'IT Consultant (Part Time)'}/>
    <Dates dates={'OCT 2017 - DEC 2018, TX'}/>
    <ul class="inline-block items-center w-3/4 sm:w-1/2 md:w-3/4 list-disc list-inside text-left text-sm font-thin text-white dark:text-gray-200">
      <li>Handled incoming calls and emails to provide IT support for contracted UK clients</li>
      <li>Dispatched an Engineer to manage the problem when appropriate</li>
    </ul>
  </div>
</div>
