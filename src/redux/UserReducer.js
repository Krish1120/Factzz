import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetch: {
    isFetching: false,
  },
  user: {
    name: "Monkey D. Luffy",
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.fetch.isFetching = true;
    },
    setUserAuthentication: (state, action) => {
      state.user.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setIsFetching, setUserAuthentication } = userSlice.actions;

export default userSlice.reducer;
