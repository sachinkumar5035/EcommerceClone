import axios from 'axios';
import { server} from '../store.js'
import { CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS } from '../constants/userConstants.js';



export const changePassword=(oldPassword,newPassword)=>async(dispatch)=>{
    try {
        dispatch({type:CHANGE_PASSWORD_REQUEST});
        const config = { headers: { "Content-Type": "application/json" },withCredentials:true };
        const {data} = await axios.put(`${server}/user/password/change`,{oldPassword,newPassword},config);
        dispatch({
            type:CHANGE_PASSWORD_SUCCESS,
            payload:data.message
        })
        console.log(data.message);
    } catch (error) {
        dispatch({
            type:CHANGE_PASSWORD_FAIL,
            payload: error?.response?.data?.message,
        })
        console.log(error);
    }
}


