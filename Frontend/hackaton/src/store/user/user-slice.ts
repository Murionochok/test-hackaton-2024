import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserI } from "./UserType";

const initialState: UserI = {
    isAuthenticated: false,
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        createUser(_state, action: PayloadAction<UserI>) {
            return action.payload;
        },
    },
 });

 export const userActions = userSlice.actions;
 export default userSlice;