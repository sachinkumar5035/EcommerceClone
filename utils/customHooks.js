import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CLEAR_ERROR, CLEAR_MESSAGE } from "../redux/constants/userConstants";
import Toast from "react-native-toast-message";
import axios from "axios";
import { server } from "../redux/store";


export const useMessageAndError = (navigation, navigateTo="login", dispatch) => {

    const { loading, error, message } = useSelector((state) => state.user);
    // console.log("@@@loading ",loading, "@@@error ",error,"@@@message ",message);

    useEffect(() => {
        if (error) {
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: CLEAR_ERROR
            })
        }
        else if (message) {
            // navigation.navigate(navigateTo);
            navigation.reset({
                index:0,
                routes:[{name:navigateTo}]
            })
            Toast.show({
                type: "success",
                text1: message
            })
            dispatch({
                type: CLEAR_MESSAGE
            })
        }
    }, [error, message, dispatch])

    return loading;
}


export const useMessageAndErrorOther = (dispatch,navigation, navigateTo,func) => {

    const { loading, error, message } = useSelector((state) => state.other);
    // console.log("@@@loading ",loading, "@@@error ",error,"@@@message ",message);

    useEffect(() => {
        if (error) {
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: CLEAR_ERROR
            })
        }
        if (message) {
            Toast.show({
                type: "success",
                text1: message
            })
            dispatch({
                type: CLEAR_MESSAGE
            })
            navigateTo&&navigation.navigate(navigateTo);
            func&&dispatch(func());
        }
    }, [error, message, dispatch])

    return loading;
}


export const useSetCategories = (setCategories,isFocused)=>{
    useEffect(() => {
        axios.get(`${server}/category/all`).then(res=>{
            setCategories(res.data.categories) // from backend in all categories route we sending {categories} 
        }).catch((e)=>{
            Toast.show({
                type:"error",
                text1:e.response.data.message
            })
        })
    }, [isFocused])
    
}


// we can use when we want to get the orders(admin/user for both)
export const useGetOrders = (isFocused,isAdmin=false) =>{
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`${server}/order/${isAdmin?"admin":"me"}`).then(res=>{
            setOrders(res.data.orders) // from backend for both routes admin and me we are sending orders as result 
            setLoading(false);
        }).catch((e)=>{
            Toast.show({
                type:"error",
                text1:e.response.data.message
            })
            setLoading(false);
        })
    }, [isFocused])
    return {
        loading,
        orders
    }
}