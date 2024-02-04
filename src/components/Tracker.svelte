<script lang="ts">
  import type { TrackerItem } from '../types';

  export let data: TrackerItem[];
</script>

<div class="flex flex-row w-full">
  {#each data as item}
    <div class={`h-8 w-2 mr-0.5 ${item.color ?? 'bg-black'}`} />
  {/each}
</div>