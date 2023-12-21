import axios from 'axios';
import { server} from '../store.js'
import { CHANGE_PASSWORD_FAIL,
        CHANGE_PASSWORD_REQUEST, 
        CHANGE_PASSWORD_SUCCESS, 
        UPDATE_PIC_FAIL, 
        UPDATE_PIC_REQUEST, 
        UPDATE_PIC_SUCCESS, 
        UPDATE_PROFILE_FAIL, 
        UPDATE_PROFILE_REQUEST, 
        UPDATE_PROFILE_SUCCESS 
    } from '../constants/userConstants.js';
import { PLACE_ORDER_FAIL, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from '../constants/cartConstant.js';



export const changePassword=(oldPassword,newPassword)=>async(dispatch)=>{
    try {
        dispatch({type:CHANGE_PASSWORD_REQUEST});
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        const {data} = await axios.put(`${server}/user/password/change`,{oldPassword,newPassword},config);
        dispatch({
            type:CHANGE_PASSWORD_SUCCESS,
            payload:data.message
        })
        // console.log(data.message);
    } catch (error) {
        dispatch({
            type:CHANGE_PASSWORD_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in change password action method ",error);
    }
}


export const updateProfile = (name,email,address,country,pinCode,city) => async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PROFILE_REQUEST});
        // console.log(name,email,address,country,pinCode,city);
        const config = {headers:{"Content-Type":"application/json"}};
        const {data} = await axios.put(`${server}/user/profile/update`,{name,email,address,country,pinCode,city},config,{withCredentials:true});
        // console.log(data);
        dispatch({
            type:UPDATE_PROFILE_SUCCESS,
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:UPDATE_PROFILE_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in update profile action method ",error);
    }
}



export const updatePic=(formData) => async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PIC_REQUEST})
        // console.log("@@formData request se phle ",formData);
        const config = { headers: { "Content-Type": "multipart/form-data" },withCredentials:true }; // multipart/form-data while uploading file and text data 
        const {data} = await axios.put(`${server}/user/updatepic`,formData,config,);
        // console.log("request ke bad me formData",data);
        dispatch({
            type:UPDATE_PIC_SUCCESS,
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:UPDATE_PIC_FAIL,
            payload:error?.response?.data?.message
        })
        console.log("error in update pic action method ",error);
    }
}


                      // cartItems,shippingInfo,paymentMethod,itemsPrice,taxPrice,shippingCharges,totalAmount,paymentInfo
export const placeOrder=(orderItems,shippingInfo,paymentMethod,itemsPrice,taxPrice,shippingCharges,totalAmount,paymentInfo)=>async(dispatch)=>{
    try {
        dispatch({type:PLACE_ORDER_REQUEST});
        console.log("1");
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        
        const {data} = await axios.post(`${server}/order/new`,{shippingInfo,orderItems,paymentMethod,paymentInfo,itemsPrice,shippingCharges,taxPrice,totalAmount},config);
        console.log("2");
        dispatch({
            type:PLACE_ORDER_SUCCESS,
            payload:data.message
        })
        console.log("3");
    } catch (error) {
        dispatch({
            type:PLACE_ORDER_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in place order action method ",error);
    }
}
