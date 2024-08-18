import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import productImageReducerfrom from "./slices/ProductImageSelectionSlice";

export const store = configureStore({
    reducer: {
        cartItems: cartReducer,
        productImage: productImageReducerfrom,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store