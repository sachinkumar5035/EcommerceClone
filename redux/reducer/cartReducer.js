import { createReducer } from "@reduxjs/toolkit";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants/cartConstant";

export const cartReducer = createReducer({cartItems:[]}, (builder) => {


    builder.addCase(ADD_TO_CART,(state,action)=>{
        console.log(action.payload);
    });


    builder.addCase(REMOVE_FROM_CART,(state,action)=>{

    })

    builder.addCase(CLEAR_CART,(state,action)=>{
        state.cartItems=[] // remove cartItems 
    })

})

