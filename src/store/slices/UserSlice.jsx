import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    removeAllUsers: () => {
      return [];
    },
  },
});

export const { addUser, removeUser, removeAllUsers } = userSlice.actions;
export default userSlice.reducer;
