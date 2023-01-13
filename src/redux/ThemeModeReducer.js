import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const ThemeModeSlice = createSlice({
  name: "ThemeMode",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setThemeMode } = ThemeModeSlice.actions;

export default ThemeModeSlice.reducer;
