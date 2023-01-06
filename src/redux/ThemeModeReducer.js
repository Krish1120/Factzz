import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const ThemeModeSlice = createSlice({
  name: "ThemeMode",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setThemeMode } = ThemeModeSlice.actions;

export default ThemeModeSlice.reducer;
