import axios from "axios";
import {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    GET_ADMIN_PRODUCTS_FAIL,
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS
} from "../constants/productConstants";
import { server } from "../store";

// all the routes related to products will be like this 
// http://localhost:3000/api/v1/product/all


export const getAllProducts = (keyword,category) => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        const { data } = await axios.get(`${server}/product/all?keyword=${keyword}&category=${category}`,config);
        // from backend we are getting data like success: true,
        // products: a list of all products so from here we will be sending that to reducer by using data.products 
        // console.log(data.products);
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data.products
        })
        // console.log(data.message);
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in get all product action method",error);
    }
}


// http://localhost:3000/api/v1/product/admin
export const getAdminProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_PRODUCTS_REQUEST });
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        const { data } = await axios.get(`${server}/product/admin`,config);
        dispatch({
            type: GET_ADMIN_PRODUCTS_SUCCESS,
            payload: data // in reducer we are fetching the properties with the name 
        })
        // console.log(data.message);
    } catch (error) {
        dispatch({
            type: GET_ADMIN_PRODUCTS_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in get get admin products action method",error);
    }
}


// http://localhost:3000/api/v1/product/:id
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true};
        const { data } = await axios.get(`${server}/product/${id}`,config);
        // console.log(data.product.images);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log("error in get product details action method",error);
    }
}


export const createProduct=(formData) => async(dispatch)=>{
        try {
            dispatch({type:CREATE_PRODUCT_REQUEST})
            // console.log("1 ",formData);
            const config = { headers: { "Content-Type": "multipart/form-data" } }; // multipart/form-data while uploading file and text data 
            const {data} = await axios.post(`${server}/product/new`,formData,config,{withCredentials:true});
            // console.log("2 ", formData )
            dispatch({
                type:CREATE_PRODUCT_SUCCESS,
                payload:data.message
            })
            // console.log(data);
        } catch (error) {
            dispatch({
                type:CREATE_PRODUCT_FAIL,
                payload:error?.response?.data?.message
            })
            console.log("error in create product action method ",error);
        }
}



export const deleteProduct=(id) => async(dispatch)=>{
    try {
        dispatch({type:DELETE_PRODUCT_REQUEST})
        // console.log(" formdata ",formData);
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true }; // multipart/form-data while uploading file and text data 
        const {data} = await axios.delete(`${server}/product/delete/${id}`,config);
        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:data.message
        });
        // console.log("3");
    } catch (error) {
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error?.response?.data?.message
        })
        console.log("error in delete product action method ",error);
    }
}

export const updateProduct=(name, id,description,category, price, stock) => async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PRODUCT_REQUEST});
        console.log(name, id,description,category, price, stock);
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true }; // multipart/form-data while uploading file and text data 
        const {data} = await axios.put(`${server}/product/update/${id}`,{name, description,category, price, stock},config);
        console.log("2");
        dispatch({
            type:UPDATE_PRODUCT_SUCCESS,
            payload:data.message
        });
        console.log("3");
    } catch (error) {
        dispatch({
            type:UPDATE_PRODUCT_FAIL,
            payload:error?.response?.data?.message
        })
        console.log("error in update product action method ",error);
    }
}



