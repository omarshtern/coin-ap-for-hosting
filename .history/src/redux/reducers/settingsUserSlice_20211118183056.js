import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
        state.
    }
  },
});

export const {getDbUser} = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
