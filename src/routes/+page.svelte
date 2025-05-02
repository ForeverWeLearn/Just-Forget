<script lang="ts">
  import Help from "../components/help.svelte";
  import Input from "../components/input.svelte";
  import Line from "../components/line.svelte";
  import Statusbar from "../components/statusbar.svelte";
  import { lineStore } from "../stores/line.svelte";
  import { settingsStore } from "../stores/setting.svelte";
  import { stateStore } from "../stores/state.svelte";
</script>

<div
  class="relative h-full w-full px-16 flex flex-col items-center justify-center bg-(--color-background)"
  data-tauri-drag-region
>
  {#if stateStore.states.showHelp}
    <Help />
  {/if}

  {#if stateStore.states.showUI}
    <div class="absolute right-0 bottom-0">
      <Statusbar />
    </div>
  {/if}

  <div class="relative w-full" data-tauri-drag-region>
    <div
      class="absolute top-0 left-0 -translate-y-full w-full flex flex-col items-center justify-center"
      data-tauri-drag-region
    >
      {#each lineStore.last(settingsStore.settings.maxLines) as line, i}
        <Line content={line.content} level={settingsStore.settings.maxLines - i} />
      {/each}
    </div>

    <Input />
  </div>
</div>
