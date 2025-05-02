<script lang="ts">
  import Hotkey from "./hotkey.svelte";

  let { action, keys }: { action: string; keys: string[] } = $props();
</script>

<div class="flex justify-between gap-10">
  <div>{action}</div>
  <Hotkey {keys} />
</div>
