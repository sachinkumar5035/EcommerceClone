import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL
} from '../constants/userConstants';
import axios from 'axios';
import { server} from '../store.js'


export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST});
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        // console.log(email,password);
        const {data} = await axios.post(`${server}/user/login`, { email, password },config); // api for login a user
        // console.log(data);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data.message // from server we are sending message as response from send token that will be collected as data
            // data will be look like 
            // {
                // success:true,
                // message:message
            // }
        }); 
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error?.response?.data?.message,
        });
        // console.log("login method me error aa gya bc",error);
    }
}

// at the time of app opening this loadUser will be called and is user is already logged in then it will be shown as footer 
export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST});
        const config = { headers: { "Content-Type": "application/json" } }; // while sending text data only
        const {data} = await axios.get(`${server}/user/me`,{withCredentials:true}); // api for login a user
        dispatch({
            type:LOAD_USER_SUCCESS,
            payload:data.user // from backend we are sending message so we have to receive message here also 
        }); 
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error?.response?.data?.message,
        });
        // console.log("load user me error aa gya bc",error);
    }
}



export const logout=()=>async(dispatch)=>{
    try {
        dispatch({type:LOGOUT_REQUEST});
        const {data} = await axios.get(`${server}/user/logout`,{withCredentials:true}); // api for login a user
        dispatch({
            type:LOGOUT_SUCCESS,
            payload:data.message 
        }); 
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error?.response?.data?.message,
        });
        // console.log("log out user me error aa gya bc",error);
    }
}


export const registerUser=(formData) => async(dispatch)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST})
        // console.log("@@formData request se phle ",formData);
        const config = { headers: { "Content-Type": "multipart/form-data" } }; // multipart/form-data while uploading file and text data 
        const {data} = await axios.post(`${server}/user/register`,formData,config,{withCredentials:true});
        // console.log("request ke bad me formData",data.message);
        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error?.response?.data?.message
        })
        // console.log("register user me error aa gya bc",error);
    }
}

export const forgetPassword=(email) => async(dispatch)=>{
    try {
        dispatch({type:FORGET_PASSWORD_REQUEST})
        console.log("1");
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true}; // multipart/form-data while uploading file and text data 
        const {data} = await axios.post(`${server}/user/forgetpassword`,{email},{config});
        dispatch({
            type:FORGET_PASSWORD_SUCCESS,
            payload:data.message
        })
        console.log("2");
    } catch (error) {
        dispatch({
            type:FORGET_PASSWORD_FAIL,
            payload:error?.response?.data?.message
        })
        console.log("error in forget password action method",error);
    }
}

export const resetPassword=(otp,newPassword) => async(dispatch)=>{
    try {
        dispatch({type:RESET_PASSWORD_REQUEST})
        // console.log("1 ",otp,newPassword);
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true}; // multipart/form-data while uploading file and text data 
        const {data} = await axios.put(`${server}/user/forgetpassword`,{otp,newPassword},{config});
        dispatch({
            type:RESET_PASSWORD_SUCCESS,
            payload:data.message
        })
        // console.log("2");
    } catch (error) {
        dispatch({
            type:RESET_PASSWORD_FAIL,
            payload:error?.response?.data?.message
        })
        console.log("error in reset password action method",error);
    }
}
