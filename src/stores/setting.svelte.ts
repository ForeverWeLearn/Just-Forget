export const MIN_FONT_SIZE = 12;
export const MAX_FONT_SIZE = 72;

export type Settings = {
  maxLines: number;
  fontSize: number;
};

function createSettingsStore() {
  const settings: Settings = $state({
    maxLines: 4,
    fontSize: 32,
  });

  const load = () => {
    settings.fontSize = parseInt(localStorage.getItem("fontSize") || "32");
  }

  const increaseFontSize = () => {
    settings.fontSize++;

    if (settings.fontSize > MAX_FONT_SIZE) {
      settings.fontSize = MAX_FONT_SIZE;
    }
  };

  const decreaseFontSize = () => {
    settings.fontSize--;

    if (settings.fontSize < MIN_FONT_SIZE) {
      settings.fontSize = MIN_FONT_SIZE;
    }
  };

  return {
    settings,
    load,
    increaseFontSize,
    decreaseFontSize,
  };
}

export const settingsStore = createSettingsStore();
settingsStore.load();
