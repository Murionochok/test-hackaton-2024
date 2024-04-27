import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserFormData } from "../../../../interfaces/UserInterfaces";

const initialState = {
  registering: false,
  error: null,
  success: false,
};

export const postRegisterUser = createAsyncThunk(
  "user/register",
  async (formData: UserFormData) => {
    const response = await axios.post<FormData>(`/api/register/`, formData);
    return response.data; // Assuming successful registration returns data
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetRegistrationState(state) {
      state.registering = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterUser.pending, (state) => {
        state.registering = true;
        state.error = null;
        state.success = false;
      })
      .addCase(postRegisterUser.fulfilled, (state) => {
        state.registering = false;
        state.error = null;
        state.success = true;
      })
      .addCase(postRegisterUser.rejected, (state, action) => {
        state.registering = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export const { resetRegistrationState } = userSlice.actions;
export default userSlice.reducer;
