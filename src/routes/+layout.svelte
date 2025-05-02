<script lang="ts">
  import "../app.css";

  import { getCurrentWindow } from "@tauri-apps/api/window";
  import { writeText } from "@tauri-apps/plugin-clipboard-manager";
  import { register, unregister } from "@tauri-apps/plugin-global-shortcut";

  import { settingsStore } from "../stores/setting.svelte";
  import { stateStore } from "../stores/state.svelte";
  import { lineStore } from "../stores/line.svelte";
  import CloseButton from "../components/close-button.svelte";

  const app = getCurrentWindow();

  let { children } = $props();

  type Hotkey = {
    ctrl: boolean;
    shift: boolean;
    alt: boolean;
    key: string;
    callback: () => void;
  };

  const copyAll = async () => {
    let text = lineStore.lines.reduce((acc, line) => {
      return acc + line.content + "\n";
    }, "");

    if (stateStore.states.currentContent) {
      text += stateStore.states.currentContent;
    }

    await writeText(text);
  };

  const deleteAll = () => {
    lineStore.clear();
    stateStore.states.currentContent = "";
  };

  const hotkeys: Record<string, Hotkey> = {
    toggleHelp: {
      ctrl: false,
      shift: false,
      alt: false,
      key: "Escape",
      callback: stateStore.toggleHelp,
    },
    close: {
      ctrl: true,
      shift: false,
      alt: false,
      key: "w",
      callback: app.close,
    },
    deleteAll: {
      ctrl: true,
      shift: false,
      alt: false,
      key: "d",
      callback: deleteAll,
    },
    copyAll: {
      ctrl: true,
      shift: false,
      alt: false,
      key: "c",
      callback: copyAll,
    },
    increaseFontSize: {
      ctrl: true,
      shift: false,
      alt: false,
      key: "]",
      callback: settingsStore.increaseFontSize,
    },
    decreaseFontSize: {
      ctrl: true,
      shift: false,
      alt: false,
      key: "[",
      callback: settingsStore.decreaseFontSize,
    },
    hideStatusBar: {
      ctrl: true,
      shift: false,
      alt: false,
      key: "h",
      callback: stateStore.toggleStatusBar,
    },
  };

  async function init() {
    await unregister("CommandOrControl+Space");

    // await register("CommandOrControl+7", () => {
    //   console.log("Shortcut triggered");
    // });

    window.addEventListener("contextmenu", (event) => event.preventDefault());
    window.addEventListener("keydown", (event) => {
      // if (event.key === "F5") {
      //   event.preventDefault();
      // }

      for (let name in hotkeys) {
        let hotkey = hotkeys[name];
        if (
          event.ctrlKey === hotkey.ctrl &&
          event.shiftKey === hotkey.shift &&
          event.altKey === hotkey.alt &&
          event.key === hotkey.key
        ) {
          event.preventDefault();
          hotkey.callback();
        }
      }
    });
  }

  init();

  $effect(() => {
    localStorage.setItem("fontSize", settingsStore.settings.fontSize.toString());
  });

  $effect(() => {
    localStorage.setItem("currentContent", stateStore.states.currentContent.toString());
  });

  $effect(() => {
    localStorage.setItem("showUI", stateStore.states.showUI.toString());
  });
</script>

<main class="h-full flex flex-col items-center justify-center">
  {#if stateStore.states.showUI}
    <div class="absolute z-999 top-0 right-0">
      <CloseButton />
    </div>
  {/if}
  {@render children()}
</main>

<style>
  main {
    background-color: var(--color-background);
  }
</style>
