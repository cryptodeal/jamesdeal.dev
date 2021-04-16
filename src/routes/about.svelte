<script>
  import Pill from '$lib/Pill.svelte'
  import Subtitle from '$lib/about/Subtitle.svelte'
  import SectionTitle from '$lib/about/SectionTitle.svelte'
  import Dates from '$lib/about/Dates.svelte'
  import BulletedList from '$lib/about/BulletedList.svelte'
  import {languages, frameworks, graphics, education, frontend, backend, unaliwear, reyReyPSC, COSS, reyReyIT} from '$lib/about/ResumeContent'
</script>
<svelte:head>
  <title>My Resume - James Deal</title>
  <meta name="description" content="My academic and profession experience, skills, and interests.">
  <meta name="keywords" content="James Deal">
  <meta property="og:title" content="My Resume - James Deal" />
  <meta property="og:description" content="My academic and profession experience, skills, and interests." />
</svelte:head>

<div class="grid auto-rows-min break-words grid-cols-1 my-5 h-full mx-10 py-5 rounded-lg gap-2 bg-opacity-80 bg-blue-800 dark:(bg-purple-900 bg-opacity-30) md:(gap-4 grid-cols-2 mx-20) lg:mx-30 xl:mx-40 2xl:mx-60">
  <SectionTitle title={'Education'}/>
  <div class='text-center'>
    <Subtitle title={'Texas A&M University'}/>
    <Dates dates={'AUG 2015 - DEC 2018, TX'}/>
    <BulletedList bulletItems={education}/>
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
    <BulletedList bulletItems={frontend}/>
    <Subtitle title={'Backend'}/>
    <BulletedList bulletItems={backend}/>
  </div>
  <SectionTitle title={'Experience'}/>
  <div class='text-center'>
    <Subtitle title={'UnaliWear'} href={'https://www.unaliwear.com/'} role={'UX, Customer Success & Acquisition'}/>
    <Dates dates={'May 2020 - PRESENT, AUSTIN, TX'}/>
    <BulletedList bulletItems={unaliwear}/>

    <Subtitle title={'Reynolds and Reynolds'} href={'https://www.reyrey.com/'} role={'Software Consultant'}/>
    <Dates dates={'DEC 2018 - MAY 2019, TX'}/>
    <BulletedList bulletItems={reyReyPSC}/>

    <Subtitle title={'Cryptocurrency One Stop Solution ($COSS)'} href={'https://www.coss.io/'} role={'Contract Developer'}/>
    <Dates dates={'OCT 2018 - DEC 2018, REMOTE'}/>
    <BulletedList bulletItems={COSS}/>

    <Subtitle title={'Reynolds and Reynolds'} href={'https://www.reyrey.com/'} role={'IT Consultant (Part Time)'}/>
    <Dates dates={'OCT 2017 - DEC 2018, TX'}/>
    <BulletedList bulletItems={reyReyIT}/>
  </div>
</div>
