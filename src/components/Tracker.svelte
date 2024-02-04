<script lang="ts">
  import type { TrackerItem } from '../types';

  export let data: TrackerItem[];
</script>

<div class="flex flex-row w-full">
  {#each data as item}
    <span class={`group relative h-8 w-2 mr-0.5 ${item.color ?? 'bg-black'}`}>
      <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto z-40">
        <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
          {item.tooltip}
          <svg class="absolute left-0 top-full h-2 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
        </div>
      </div>
      <span />
    </span>
  {/each}
</div>