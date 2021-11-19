import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsnycUser = createAsyncThunk(
  "user/fetchAsnycCoins",
  async (currency) => {
    // const currency = "USD";
    const data = await axios(
        "https://jsonplaceholder.typicode.com/users?_limit=3"
    ).then((res) => res.data);
    return data;
  }
);


const initialState = {
  user: [],
};

const settingsUserSlice = createSlice({
  name: "seetingsUser",
  initialState,
  reducers: {
    getDbUser(state, action) {
      state.user = action.payload;
    },
    deleteDbuser(state, action) {
      return state.user.filter((a) => a.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchAsnycCoins.pending]: () => {
    },
    [fetchAsnycCoins.rejected]: () => {
    },
    [fetchAsnycCoins.fulfilled]: (state, { payload }) => {
      return { ...state, coins: payload };
    },
 
  },
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
