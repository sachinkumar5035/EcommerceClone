import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer.js";

import axios from 'axios';

export const store = configureStore({
    reducer:{
        user: userReducer
    }
});






// this is the server link for the api's
export const server = "https://portal-service-m54p.onrender.com/api/v1"

// abhishek's server link 
// export const server = "https://ecommerce-server-i8ns.onrender.com/api/v1";

// export const server  = "http://localhost:3000/api/v1";