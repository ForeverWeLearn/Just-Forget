<script lang="ts">
  import Code from "./code.svelte";

  let { keys }: { keys: string[] } = $props();
</script>

<div class="flex flex-wrap gap-2">

    {#each keys as key}
    <Code content={key} />
    {/each}
</div>
