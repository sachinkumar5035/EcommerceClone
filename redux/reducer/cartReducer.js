import { createReducer } from "@reduxjs/toolkit";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants/cartConstant";

export const cartReducer = createReducer({cartItems:[]}, (builder) => {


    builder.addCase(ADD_TO_CART,(state,action)=>{
        const item = action.payload;
        // console.log(item);
        const index = state.cartItems.findIndex((i)=>i.product===item.product);
        // console.log("index ",isExist);
        if(index>-1){
            state.cartItems[index]={
                ...state.cartItems[index],
                quantity:item.quantity
            };
        }
        else{
            state.cartItems.push(item);
        }
    });

    builder.addCase(REMOVE_FROM_CART,(state,action)=>{
        const id = action.payload.id;
        state.cartItems = state.cartItems.filter((i)=>i.product!==id);
    })

    builder.addCase(CLEAR_CART,(state,action)=>{
        state.cartItems=[] // remove cartItems 
    })

})

