
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const announcementInitialState = { announcements: [] };
const announcementSlice = createSlice({
    name: 'announcement',
    initialState: announcementInitialState,
    reducers: {
        getAnnouncements(state,action){
            state.announcements = action.payload;
        }
    }
});

export const {getAnnouncements} = announcementSlice.actions;
export const fetchAnnouncements = () => async (dispatch) => {
    try{
        const announcements = await axios.get('http://localhost:4000/api/Announcement');
        dispatch(getAnnouncements(announcements.data))
    }
    catch (error){
        console.log("Error fetching Data");
        
    }
}
export default announcementSlice.reducer; 