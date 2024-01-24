import { createReducer } from '@reduxjs/toolkit';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERROR,
    CLEAR_MESSAGE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL
} from '../constants/userConstants';


export const userReducer = createReducer({}, (builder) => {
    builder.addCase(LOGIN_REQUEST, (state) => {
        state.loading = true
    }).addCase(LOAD_USER_REQUEST, (state) => {
        state.loading = true
    }).addCase(LOGOUT_REQUEST,(state)=>{
        state.loading=true
    }).addCase(REGISTER_USER_REQUEST,(state)=>{
        state.loading=true
    }).addCase(FORGET_PASSWORD_REQUEST,(state)=>{
        state.loading=true
    }).addCase(RESET_PASSWORD_REQUEST,(state)=>{
        console.log(state)
        state.loading=true
    });

    builder.addCase(LOGIN_SUCCESS, (state, action) => {
        state.loading = false,
        state.isAuthenticated = true,
        state.message = action.payload
    }).addCase(LOAD_USER_SUCCESS, (state, action) => {
        state.loading = false,
        state.isAuthenticated = true,
        state.user = action.payload
    }).addCase(LOGOUT_SUCCESS,(state,action)=>{
        state.loading=false,
        state.isAuthenticated=false,
        state.message=action.payload,
        state.user=null
    }).addCase(REGISTER_USER_SUCCESS,(state,action)=>{
        state.loading=false,
        state.isAuthenticated=true,
        state.message=action.payload
    }).addCase(FORGET_PASSWORD_SUCCESS,(state,action)=>{
        console.log(action.payload),
        state.loading=false,
        state.message=action.payload
    }).addCase(RESET_PASSWORD_SUCCESS,(state,action)=>{
        console.log(action.payload),
        state.loading=false,
        state.message=action.payload
    });

    builder.addCase(LOGIN_FAIL, (state, action) => {
        state.loading = false,
        state.isAuthenticated = false,
        state.error = action.payload
    }).addCase(LOAD_USER_FAIL, (state, action) => {
        state.loading = false,
        state.isAuthenticated = false,
        state.error = action.payload
    }).addCase(LOGOUT_FAIL,(state,action)=>{
        state.loading=false,
        state.isAuthenticated=true,
        state.error=action.payload
    }).addCase(REGISTER_USER_FAIL,(state,action)=>{
        state.loading=false,
        state.isAuthenticated=false,
        state.error=action.payload
    }).addCase(FORGET_PASSWORD_FAIL,(state,action)=>{
        state.loading=false,
        state.error=action.payload
    }).addCase(RESET_PASSWORD_FAIL,(state,action)=>{
        console.log(action.payload),
        state.loading=false,
        state.error=action.payload
    });

    builder.addCase(CLEAR_ERROR, (state) => {
        state.error = null
    });
    builder.addCase(CLEAR_MESSAGE, (state) => {
        state.message = null
    })
});



//classical way of creating a reducer 
// export const userReducer = (state = { }, action) => {

//     switch (action.type) {
//         case LOGIN_REQUEST:
//             return {
//                 loading: true,
//                 isAuthenticated: false,
//             };
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 isAuthenticated: true,
//                 message: action.payload,
//             };
//         case LOGIN_FAIL:
//             return {
//                 ...state,
//                 loading: false,
//                 isAuthenticated: false,
//                 message: "No User found",
//                 error: action.payload,
//             };
//         case CLEAR_ERROR:
//             return {
//                 ...state,
//                 error: null,
//             };
//         case   CLEAR_MESSAGE:
//             return{
//                 ...state,
//                 message:null
//             }
//         default:
//             return state;
//     }
// };





