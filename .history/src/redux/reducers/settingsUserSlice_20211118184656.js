import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  blogs: [
    {
      id: 1,
      name: "Hey",
    },
    {
      id: 2,
      name: "Hey2",
    },
    {
      id: 3,
      name: "He3",
    },
    {
      id: 4,
      name: "Hey",
    },
    {
      id: 5,
      name: "Hey",
    },
  ],
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
      return state.blogs.filter((a) => a.id !== action.payload);
    },
  },
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
