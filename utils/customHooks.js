import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CLEAR_ERROR, CLEAR_MESSAGE } from "../redux/constants/userConstants";
import Toast from "react-native-toast-message";



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
