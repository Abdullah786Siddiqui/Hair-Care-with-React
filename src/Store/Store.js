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

const addToCartSlice = createSlice({
  name: "cartProduct",
  initialState: [],
  reducers: {
    SelectedProduct: (state, action) => {
      let selectedProd = products.filter((product) =>
        action.payload.includes(product.id)
      );
      state.push(...selectedProd);
    },
    RemoveProduct:(state, action)=>{
      return  state.filter((product)=> product.id !== action.payload)
    }
  },
});

const HairCareStore = configureStore({
  reducer: {
    Product: productSlice.reducer,
    cartProduct: addToCartSlice.reducer,
  },
});
export const ProductAction = productSlice.actions;
export const CartAction = addToCartSlice.actions;

export default HairCareStore;
