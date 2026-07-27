import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  getSystemTheme,
  markThemeManual,
  type ThemeValue,
} from "../hooks/useThemeUtils";

const THEME_KEY = "theme";

const getInitialTheme = (): ThemeValue => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return getSystemTheme();
  }
  return "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialTheme(),
  reducers: {
    // Usado por el botón: elección manual del usuario
    setTheme: (_state, action: PayloadAction<ThemeValue>) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(THEME_KEY, action.payload);
      }
      markThemeManual();
      return action.payload;
    },
    // Usado SOLO por ThemeSync al entrar a docs: no cuenta como elección manual
    setThemeAuto: (_state, action: PayloadAction<ThemeValue>) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(THEME_KEY, action.payload);
      }
      return action.payload;
    },
  },
});

export const { setTheme, setThemeAuto } = themeSlice.actions;
export default themeSlice.reducer;
