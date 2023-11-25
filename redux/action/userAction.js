import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/userConstants';
import axios from 'axios';
import { server} from '../store.js'


export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST});
        const config = { headers: { "Content-Type": "application/json" } };
        const {data} = await axios.post(`${server}/user/login`, { email, password },config); // api for login a user
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data.message
        }); 
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error?.response?.data?.message,
        });
    }
}
