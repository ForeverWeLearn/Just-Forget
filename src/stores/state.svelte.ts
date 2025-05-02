function createStateStore() {
  const states = $state({
    currentContent: "",
    showHelp: false,
    showUI: true,
  });

  const load = () => {
    states.currentContent = localStorage.getItem("currentContent") || "";
    states.showUI = localStorage.getItem("showUI") !== "false";
  };

  const toggleHelp = () => {
    states.showHelp = !states.showHelp;
  };

  const toggleUI = () => {
    states.showUI = !states.showUI;
  };

  return {
    states,
    load,
    toggleHelp,
    toggleStatusBar: toggleUI,
  };
}

export const stateStore = createStateStore();
stateStore.load();
