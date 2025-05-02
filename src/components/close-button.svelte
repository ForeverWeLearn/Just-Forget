<script lang="ts">
  import { getCurrentWindow } from "@tauri-apps/api/window";

  const app = getCurrentWindow();
</script>

<button class="rounded-full" aria-label="Close Application" onclick={app.close}>
  <div class="w-4 h-4 rounded-full shadow-md m-6 transition-all duration-300 bg-(--color-background-dim)"></div>
</button>

<style>
  button:hover div {
    background-color: var(--color-primary);
    box-shadow: 0 0 9px var(--color-primary);
  }
</style>
