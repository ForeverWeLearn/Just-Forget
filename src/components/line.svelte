<script lang="ts">
  import { settingsStore } from "../stores/setting.svelte";

  // level: how close it is to input field, min 1, max settings.maxLines.
  let { content, level }: { content: string; level: number } = $props();

  const opacity = 0.65 - (0.65 * level) / settingsStore.settings.maxLines + 0.1;
  const fontSize = $derived(
    opacity * (settingsStore.settings.fontSize - 1) + Math.max(0.75, settingsStore.settings.fontSize * 0.3)
  );
</script>

<div class="text-center font-bold" style="opacity: {opacity}; font-size: {fontSize}px" data-tauri-drag-region>
  {content}
</div>
