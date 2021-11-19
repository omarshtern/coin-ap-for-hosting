import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAsnycUser = createAsyncThunk(
    "coins/fetchAsnycCoins",
    async (currency) => {
      // const currency = "USD";
      const data = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      ).then((res) => res.data);
      return data;
    }
  );
  

"https://jsonplaceholder.typicode.com/users?_limit=3"

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
    [fetchUsers.pending]: () => {
      console.log("Pending");
    },
  },
  [fetchUsers.rejected]: () => {
    console.log("rejected");
  },
  [fetchUsers.fulfilled]: (state, { payload }) => {
    return { ...state, user: payload };
  },
});

export const { getDbUser, deleteDbuser } = settingsUserSlice.actions;
export default settingsUserSlice.reducer;
