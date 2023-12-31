import { createReducer } from "@reduxjs/toolkit";
import {
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CLEAR_ERROR, CLEAR_MESSAGE,
    UPDATE_PIC_FAIL,
    UPDATE_PIC_REQUEST,
    UPDATE_PIC_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS
} from "../constants/userConstants";
import { PLACE_ORDER_FAIL, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from "../constants/cartConstant";
import { ADD_CATEGORY_FAIL, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS } from "../constants/categoryConstant";


export const otherReducer = createReducer({}, (builder) => {
    // request cases
    builder.addCase(CHANGE_PASSWORD_REQUEST, (state) => {
        state.loading = true
    }).addCase(UPDATE_PROFILE_REQUEST, (state) => {
        state.loading = true
    }).addCase(UPDATE_PIC_REQUEST, (state) => {
        state.loading = true
    }).addCase(PLACE_ORDER_REQUEST, (state) => {
        state.loading = true
    }).addCase(ADD_CATEGORY_REQUEST,(state)=>{
        state.loading=true;
    }).addCase(DELETE_CATEGORY_REQUEST,(state)=>{
        state.loading=true
    });

    //success cases
    builder.addCase(CHANGE_PASSWORD_SUCCESS, (state, action) => {
        state.loading = false,
        state.message = action.payload
    }).addCase(UPDATE_PROFILE_SUCCESS, (state, action) => {
        state.loading = false,
        state.message = action.payload
    }).addCase(UPDATE_PIC_SUCCESS, (state, action) => {
        state.loading = false,
        state.message = action.payload
    }).addCase(PLACE_ORDER_SUCCESS, (state, action) => {
        state.loading=false,
        state.message=action.payload
    }).addCase(ADD_CATEGORY_SUCCESS,(state,action)=>{
        state.loading=false,
        state.message=action.payload
    }).addCase(DELETE_CATEGORY_SUCCESS,(state,action)=>{
        state.loading=false,
        state.message=action.payload
    });

    // fail cases
    builder.addCase(CHANGE_PASSWORD_FAIL, (state, action) => {
        state.loading = false,
        state.error = action.payload
    }).addCase(UPDATE_PROFILE_FAIL, (state, action) => {
        state.loading = false,
        state.error = action.payload
    }).addCase(UPDATE_PIC_FAIL, (state, action) => {
        state.loading = false,
        state.error = action.payload
    }).addCase(PLACE_ORDER_FAIL, (state, action) => {
        state.loading = false,
        state.error = action.payload
    }).addCase(ADD_CATEGORY_FAIL,(state,action)=>{
        state.loading=false
        state.error=action.payload
    }).addCase(DELETE_CATEGORY_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    });


    builder.addCase(CLEAR_ERROR, (state) => {
        state.error = null
    });

    builder.addCase(CLEAR_MESSAGE, (state) => {
        state.message = null
    });

})