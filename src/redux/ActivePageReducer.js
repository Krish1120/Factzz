import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: {
    index: 0,
    screen: "Home",
  },
};

export const ActivePageSlice = createSlice({
  name: "Active",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage.index = action.payload.index;
      state.activePage.screen = action.payload.screen;
    },
  },
});

export const { setActivePage } = ActivePageSlice.actions;

export default ActivePageSlice.reducer;
