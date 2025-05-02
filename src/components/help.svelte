<script>
  import HotkeyGuide from "./hotkey-guide.svelte";
</script>

<div
  class="absolute z-998 inset-0 flex items-center justify-center backdrop-blur-xs bg-(--color-fade)"
  data-tauri-drag-region
>
  <div
    class="absolute rounded-lg shadow-xl/20 py-8 px-12 flex flex-col items-center gap-8 bg-(--color-background)"
  >
    <div class="text-xl font-bold">Keyboard Shortcuts</div>

    <div class="flex flex-col gap-4">
      <HotkeyGuide action="Close Application" keys={["Ctrl", "W"]} />
      <HotkeyGuide action="Copy All" keys={["Ctrl", "C"]} />
      <HotkeyGuide action="Delete All" keys={["Ctrl", "D"]} />
      <HotkeyGuide action="Delete Line" keys={["Ctrl", "L"]} />
      <HotkeyGuide action="Toggle UI" keys={["Ctrl", "H"]} />
      <HotkeyGuide action="Decrease Font Size" keys={["Ctrl", "["]} />
      <HotkeyGuide action="Increase Font Size" keys={["Ctrl", "]"]} />
    </div>
  </div>
</div>
