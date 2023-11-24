import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../components/Card";

export interface ICartData {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}

interface cartState {
  products: ICartData[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: cartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state: cartState, actions: PayloadAction<ICartData[]>) => {
      state.products = actions.payload;
      state.totalQuantity=0;
      state.totalPrice=0
    },
    addToCart: (state: cartState, actions: PayloadAction<ICartData>) => {
      const newItem = actions.payload;
      const existingItem = state.products.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItem === -1) {
        state.products.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
      } else {
        state.products[existingItem].quantity += newItem.quantity;
        state.products[existingItem].totalPrice = Number(
          state.products[existingItem].price *
            state.products[existingItem].price
        );
      }
      state.totalQuantity+= newItem.quantity;
      state.totalPrice+= Number(newItem.price)* newItem.quantity;
    },
    removeFromCart:(state: cartState, actions: PayloadAction<number>)=>{
        const id = actions.payload;
        const existingItem= state.products.find((item)=> item.id=== id);

        if(existingItem){
            state.totalQuantity--;
            state.totalPrice-= existingItem.price;
             if(existingItem.quantity === 1 ){
                state.products= state.products.filter((item)=> item.id!==id);
             } else{
                existingItem.quantity--;
                existingItem.totalPrice= existingItem.price* existingItem.quantity;
             }
        }
    },
    deleteFromCart:(state: cartState, actions: PayloadAction<number>)=>{
        const id = actions.payload;
        state.products= state.products.filter((item)=> item.id!==id);
    }
  },
});

export const {setCart, addToCart, removeFromCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;
