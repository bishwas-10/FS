import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../components/Card";

export interface productState {
selectedProduct: ProductsProps|null;
products: ProductsProps[];

}



const initialState:productState= {
selectedProduct:null,
 products:[],
 
}



const productsSlice= createSlice({
    name:"products",
    initialState,
    reducers:{
            setSelectedProduct:(state, actions:PayloadAction<ProductsProps>)=>{
                state.selectedProduct= actions.payload;
            },
            setAllProducts:(state, actions: PayloadAction<[]>)=>{
                state.products= actions.payload;
            }
    }
})

export const{setSelectedProduct, setAllProducts}= productsSlice.actions;
export default productsSlice.reducer;