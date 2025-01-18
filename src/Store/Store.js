import { configureStore, createSlice } from "@reduxjs/toolkit";
import products from "../data/cards";
const productSlice = createSlice({
  name: "Product",
  initialState: [],
  reducers: {
    filterPost: (state, action) => {
      const filterProductData = products.filter(
        (data) => data.category === action.payload
      );
      return filterProductData;
    },
  
  },
});

const HairCareStore = configureStore({
  reducer: {
    Product: productSlice.reducer,
  },
});
export const ProductAction = productSlice.actions;
export default HairCareStore;
