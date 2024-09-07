import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import productImageReducerfrom from "./slices/ProductImageSelectionSlice";
import menuReducer from "./slices/MenuSlice";
export const store = configureStore({
    reducer: {
        cartItems: cartReducer,
        productImage: productImageReducerfrom,
        menu: menuReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store