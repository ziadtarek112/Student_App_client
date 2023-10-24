import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const quizInitialState = { quizzes: [] };
const quizSlice = createSlice({
    name: 'quiz',
    initialState: quizInitialState,
    reducers: {
        getQuizzes(state,action) {
            state.quizzes = action.payload;
        }
    }

});

export const {getQuizzes} = quizSlice.actions;

export const fetchQuizzes = () => async (dispatch) => {
    try{    
        const quizzes = await axios.get('http://localhost:4000/api/Quiz');
        dispatch(getQuizzes(quizzes.data))
    }
    catch (error){
        console.log(error);
        
    }
}

export default quizSlice.reducer;