import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsSlice from "./productsSlice";
import searchSlice from "./searchSlice";
export const store= configureStore({
    reducer: {
        cart: cartReducer,
        products:productsSlice,
        search: searchSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch