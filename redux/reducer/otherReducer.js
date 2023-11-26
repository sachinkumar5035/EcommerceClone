import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CLEAR_ERROR, CLEAR_MESSAGE } from "../constants/userConstants";


export const otherReducer = createReducer({}, (builder) => {
    builder.addCase(CHANGE_PASSWORD_REQUEST,(state)=>{
        state.loading=true
    });

    builder.addCase(CHANGE_PASSWORD_SUCCESS,(state,action)=>{
        state.loading=false,
        state.message=action.payload
    });

    builder.addCase(CHANGE_PASSWORD_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    });


    builder.addCase(CLEAR_ERROR,(state)=>{
        state.error= null
    });

    builder.addCase(CLEAR_MESSAGE,(state)=>{
        state.message=null
    });

})