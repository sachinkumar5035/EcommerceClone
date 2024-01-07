import { createReducer } from "@reduxjs/toolkit";
import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, GET_ADMIN_PRODUCTS_FAIL, GET_ADMIN_PRODUCTS_REQUEST, GET_ADMIN_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";


export const productReducer = createReducer({products:[],product:{}}, (builder) => {

    builder.addCase(GET_ALL_PRODUCTS_REQUEST,(state)=>{
        state.loading=true
    }).addCase(GET_ADMIN_PRODUCTS_REQUEST,(state)=>{
        state.loading=true
    }).addCase(PRODUCT_DETAILS_REQUEST,(state)=>{
        state.loading=true
    }).addCase(CREATE_PRODUCT_REQUEST,(state,action)=>{
        state.loading=true
    });


    builder.addCase(GET_ALL_PRODUCTS_SUCCESS,(state,action)=>{
        state.loading=false,
        state.products=action.payload
    }).addCase(GET_ADMIN_PRODUCTS_SUCCESS,(state,action)=>{
        state.loading=false,
        state.products=action.payload.products,
        state.outOfStock=action.payload.outOfStock,
        state.inStock=action.payload.inStock 
    }).addCase(PRODUCT_DETAILS_SUCCESS,(state,action)=>{
        state.loading=false,
        // state.message=action.payload, // because we are also sending message from backend with product details 
        state.product=action.payload
    }).addCase(CREATE_PRODUCT_SUCCESS,(state,action)=>{
        state.loading=false,
        state.message=action.payload
    });

    builder.addCase(GET_ALL_PRODUCTS_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    }).addCase(GET_ADMIN_PRODUCTS_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    }).addCase(PRODUCT_DETAILS_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    }).addCase(CREATE_PRODUCT_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    });
})