import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VolunteerI } from "./VolunteerType";

const initialState:VolunteerI  = {
    isAuthenticated: false,
    isVolunteer: false,
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
}

const volunteerSlice = createSlice({
    name: "volunteer",
    initialState: initialState,
    reducers: {
        volunteerState(_state, action: PayloadAction<VolunteerI>) {
            return action.payload;
        },
    },
 });

 export const volunteerActions = volunteerSlice.actions;
 export default volunteerSlice;