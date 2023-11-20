import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data"
import authReducer from "./Auth"
export default configureStore({
    reducer: {
        data: dataReducer,
        auth: authReducer,
    }
})