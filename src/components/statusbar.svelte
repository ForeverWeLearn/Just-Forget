<script lang="ts">
  import { lineStore } from "../stores/line.svelte";
</script>

<div class="text-sm flex m-6 mx-8 gap-4 opacity-90">
    <div class="font-bold text-(--color-error)">{lineStore.wordCount} W</div>
    <div class="font-bold text-(--color-success)">{lineStore.charCount} C</div>
</div>