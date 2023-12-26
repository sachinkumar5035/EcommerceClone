import axios from "axios";
import { GET_ADMIN_ORDER_FAIL, GET_ADMIN_ORDER_REQUEST, GET_ADMIN_ORDER_SUCCESS, GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PROCESS_ORDER_FAIL, PROCESS_ORDER_REQUEST, PROCESS_ORDER_SUCCESS } from "../constants/orderConstant";
import { server } from "../store";

export const getOrder=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ORDER_REQUEST});
        // console.log("1");
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        
        const {data} = await axios.get(`${server}/order/my`,config);
        // console.log("2");
        dispatch({
            type:GET_ORDER_SUCCESS,
            payload:data
        })
        // console.log("3");
    } catch (error) {
        dispatch({
            type:GET_ORDER_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in get order action method ",error);
    }
}



export const getOrder1=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_ADMIN_ORDER_REQUEST});
        // console.log("1");
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        
        const {data} = await axios.get(`${server}/order/admin`,config);
        // console.log("2");
        dispatch({
            type:GET_ADMIN_ORDER_SUCCESS,
            payload:data
        })
        // console.log("3");
    } catch (error) {
        dispatch({
            type:GET_ADMIN_ORDER_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in get admin order action method ",error);
    }
}

export const processOrder = (id)=>async(dispatch)=>{
    try {
        dispatch({type:PROCESS_ORDER_REQUEST});
        // console.log("1");
        // const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        
        await axios.put(`${server}/order/single/update/${id}`,{withCredentials:true});
        // console.log("2");
        dispatch({
            type:PROCESS_ORDER_SUCCESS,
            payload:data.message
        })
        // console.log("3");
    } catch (error) {
        dispatch({
            type:PROCESS_ORDER_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in process order method ",error);
    }
}