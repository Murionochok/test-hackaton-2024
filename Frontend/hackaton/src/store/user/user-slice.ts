import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserI } from "./UserType";
import axios from "axios";
import { LoginFormData, UserFormData } from "../../interfaces/UserInterfaces";

const initialState: UserI = {
  loading: false,
  user: {
    isAuthenticated: false,
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  },
  error: "",
};

export const postRegisterUser = createAsyncThunk(
  "register/user",
  async (formData: UserFormData) => {
    const response = await axios.post<UserFormData>(
      `http://localhost:3000/register/user`,
      formData
    );

    return response.data; // Assuming successful registration returns data
  }
);

export const postLoginUser = createAsyncThunk(
  "login",
  async (formData: LoginFormData) => {
    const response = await axios.post<LoginFormData>(
      `http://localhost:3000/login`,
      formData
    );

    return response.data; // Assuming successful registration returns data
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userState(_state, action: PayloadAction<UserI>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterUser.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(postRegisterUser.pending, (state) => {
        console.log("works");
        state.loading = true;
      })
      .addCase(postRegisterUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ? action.error.message : "";
      })
      .addCase(postLoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLoginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ? action.error.message : "";
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice;