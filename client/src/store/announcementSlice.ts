
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const announcementInitialState = { announcements: [] };
const announcementSlice = createSlice({
    name: 'announcement',
    initialState: announcementInitialState,
    reducers: {
        getAnnouncements(state,action){
            state = action.payload;
        }
    }
});

export const {getAnnouncements} = announcementSlice.actions;
export const fetchAnnouncements = () => async (dispatch) => {
    try{
        const announcements = await  axios.get('/api/Quiz');
        dispatch(getAnnouncements(announcements))
    }
    catch (error){
        console.log("Error fetchin Data");
        
    }
}
export default announcementSlice.reducer; 