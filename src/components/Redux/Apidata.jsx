import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  status: "done",
};

const apiData = createSlice({
  name: "Api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "done";
      })
      .addCase(getItems.rejected, (state) => {
        state.status = "erro";
      });
  },
});

export const getItems = createAsyncThunk("Api/getItems", async () => {
  try {
    const result = await axios("https://fakestoreapi.com/products");
    return result.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});

export default apiData.reducer;