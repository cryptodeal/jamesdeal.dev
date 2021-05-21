<script>
  import { getContext } from 'svelte';
  const { width, height, padding } = getContext('LayerCake');
  import dayjs from 'dayjs'
  import weekOfYear from 'dayjs/plugin/weekOfYear.js'
  dayjs.extend(weekOfYear)
  const now = dayjs()
  let twoMonthsBack = now.subtract(2, 'month').date(1)
  const days = ['Mon','Wed','Fri'];
  //date printed is the first sunday of the month 2 months back
  //console.log(twoMonthsBack)
  const numWeeks = now.week() - twoMonthsBack.week() + 1

  $: calcWidth = $width / numWeeks
  $: calcHeight = $height / 7
  $: cellSize = $height >= $width ? calcHeight : calcWidth

</script>
<div class='flex relative' style='left:0%;height:100%'>
  {#each days as day, i}
      <div
        class="text-xs text-left text-gray-800 textChart absolute whitespace-nowrap dark:text-gray-200"
        style='left:-{$padding.left}px;top:{1.4 * cellSize + 2.1 * i * cellSize}px;max-width:20px;'>{day}
      </div>
  {/each}
</div>