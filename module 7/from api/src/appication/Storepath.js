import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "../fetrue/Userslice";

export default configureStore({
    reducer:{
        user : useReducer
    },
})