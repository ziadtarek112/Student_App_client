import { createSlice } from '@reduxjs/toolkit';



const authInitialState = {isLoggedIn : localStorage.getItem('isAuthenticated')==='true'};
console.log(authInitialState);

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
            localStorage.removeItem('isAuthenticated')
        }
    }
});
export const{logIn , logOut}  = authSlice.actions;
export default authSlice.reducer; 