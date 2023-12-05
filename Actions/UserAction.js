import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        console.log(email,password);
        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`https://fakestoreapi.com/products`, { email, password }, config); // api for login a user

        // console.log(data);

        dispatch({type:LOGIN_SUCCESS,
            payload:data
        });

    } catch (error) {
        dispatch({
            payload: error.response.data.message,
        });
        // console.log(error);
    }
};