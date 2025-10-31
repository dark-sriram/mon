import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("MONAMI-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("MONAMI-theme", theme);
    set({ theme });
  },
}));
