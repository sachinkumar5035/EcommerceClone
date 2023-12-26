import { createReducer } from "@reduxjs/toolkit";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants/cartConstant";
import { GET_ADMIN_ORDER_FAIL, GET_ADMIN_ORDER_REQUEST, GET_ADMIN_ORDER_SUCCESS, GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PROCESS_ORDER_FAIL, PROCESS_ORDER_REQUEST, PROCESS_ORDER_SUCCESS } from "../constants/orderConstant";
import { CLEAR_ERROR } from "../constants/userConstants";



// store is created with the name orders
export const orderReducer = createReducer({orders:[]}, (builder) => {

    builder.addCase(GET_ORDER_REQUEST,(state)=>{
        state.loading=true
    }).addCase(GET_ADMIN_ORDER_REQUEST,(state)=>{
        state.loading=true
    }).addCase(PROCESS_ORDER_REQUEST,(state)=>{
        state.loading=true
    });

    builder.addCase(GET_ORDER_SUCCESS,(state,action)=>{
        // console.log(action.payload.orders);
        state.loading=false,
        state.orders=action.payload.orders
        // state.message=action.payload.message
    }).addCase(GET_ADMIN_ORDER_SUCCESS,(state,action)=>{
        // console.log(action.payload.orders);
        state.loading=false,
        state.orders=action.payload.orders
    }).addCase(PROCESS_ORDER_SUCCESS,(state,action)=>{
        // console.log("process order success",action.payload);
        state.loading=false,
        state.message=action.payload
    })  

    builder.addCase(GET_ORDER_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    }).addCase(GET_ADMIN_ORDER_FAIL,(state,action)=>{
        state.loading=false,
        state.error = action.payload
    }).addCase(PROCESS_ORDER_FAIL,(state,action)=>{
        // console.log(action.payload)
        state.loading=false,
        state.error=action.payload
        // state.message=action.payload.message
    })

    builder.addCase(CLEAR_ERROR,(state)=>{
        state.error=null
    })

})