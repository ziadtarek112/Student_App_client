import { createSlice } from '@reduxjs/toolkit';



const authInitialState = {isLoggedIn : localStorage.getItem('isAuthenticated')==='false'};

const authSlice =createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers : {
        logIn(state){
            state.isLoggedIn = true;
            localStorage.setItem('isAuthenticated','true');
        },
        logOut(state){
            state.isLoggedIn= false;
            localStorage.setItem('isAuthenticated','false');
        }
    }
});
export const{logIn , logOut}  = authSlice.actions;
export default authSlice.reducer; 