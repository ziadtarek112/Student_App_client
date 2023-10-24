import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import quizReducer from './quizSlice'
import announcementReducer from './announcementSlice'


const store =configureStore({
    reducer : {
        auth : authReducer,
        quiz : quizReducer,
        announcement : announcementReducer
    }
});
export default store;