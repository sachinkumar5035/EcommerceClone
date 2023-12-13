import { createReducer } from "@reduxjs/toolkit";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants/cartConstant";

export const cartReducer = createReducer({cartItems:[]}, (builder) => {


    builder.addCase(ADD_TO_CART,(state,action)=>{
        // console.log(action.payload);
        const item = action.payload;
        const isExist = state.cartItems.find((i)=>i.product===item.product)
        if(isExist){
            state.cartItems = state.cartItems.filter((i)=>i.product===isExist.product ? item : i)
        }
        else{
            state.cartItems.push(item);
        }
    });

    builder.addCase(REMOVE_FROM_CART,(state,action)=>{
        const id = action.payload;
        state.cartItems = state.cartItems.filter((i)=>i.product!==id)
    })

    builder.addCase(CLEAR_CART,(state,action)=>{
        state.cartItems=[] // remove cartItems 
    })

})

