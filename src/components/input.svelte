<script lang="ts">
  import { onMount } from "svelte";
  import { lineStore } from "../stores/line.svelte";
  import { settingsStore } from "../stores/setting.svelte";
  import { stateStore } from "../stores/state.svelte";

  let self: HTMLInputElement;

  onMount(() => {
    self.addEventListener(
      "select",
      function () {
        this.selectionStart = this.selectionEnd;
      },
      false
    );
  });

  const onsubmit = () => {
    lineStore.push(stateStore.states.currentContent);
    lineStore.save();
    stateStore.states.currentContent = "";
  };
</script>

<form class="w-full" {onsubmit}>
  <!-- svelte-ignore a11y_autofocus -->
  <input
    bind:this={self}
    bind:value={stateStore.states.currentContent}
    type="text"
    class="w-full py-3 px-5 focus:outline-none font-bold"
    autofocus
    maxlength="80"
    spellcheck="false"
    autocorrect="off"
    autocomplete="off"
    autocapitalize="off"
    onblur={() => self.focus()}
    style="font-size: {settingsStore.settings.fontSize}px;"
    data-tauri-drag-region
  />
</form>

<style>
  input {
    text-align: center;
    color: var(--color-primary);
    background-color: var(--color-background);
  }
</style>
