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
  initialState: {
    cart: [],
    totalPrice: 0,
    favoriteitem: [],
  },
  reducers: {
    SelectedProduct: (state, action) => {
      const newitem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newitem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...newitem, quantity: 1 });
      }

      state.totalPrice += newitem.price;
    },

    RemoveProduct: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemToRemove = state.cart.find(
        (product) => product.id === itemIdToRemove
      );

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cart = state.cart.filter(
          (product) => product.id !== itemIdToRemove
        );
      }
    },

    updatedtotal: (state, action) => {
      const { itemId, newQuantity } = action.payload;

      const Item = state.cart.find((item) => item.id === itemId);

      if (Item) {
        const priceDifference = Item.price * (newQuantity - Item.quantity);

        Item.quantity = newQuantity;
        state.totalPrice += priceDifference;
      }
    },
    addFavorite: (state, action) => {
      let newItemId = action.payload;

     
      const existingFavorite = state.favoriteitem.find(
        (item) => item.id === newItemId
      );

      if (!existingFavorite) {
        let favoriteProduct = products.filter((item) => item.id === newItemId);
        state.favoriteitem.push(...favoriteProduct);
      } else {
        alert("Item already in favorites!");
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
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
