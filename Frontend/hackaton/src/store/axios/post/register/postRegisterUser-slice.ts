import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserFormData } from "../../../../interfaces/UserInterfaces";

interface InitialState {
  registering: boolean;
  error: string | undefined;
  success: boolean;
}

const initialState: InitialState = {
  registering: false,
  error: "",
  success: false,
};

export const postRegisterUser = createAsyncThunk(
  "register/user",
  async (formData: UserFormData) => {
    const response = await axios.post<UserFormData>(`/register/user`, formData);
    return response.data; // Assuming successful registration returns data
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetRegistrationState(state) {
      state.registering = false;
      state.error = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterUser.pending, (state) => {
        console.log("pending");
        state.registering = true;
        state.error = "";
        state.success = false;
      })
      .addCase(postRegisterUser.fulfilled, (state) => {
        state.registering = false;
        state.error = "";
        state.success = true;
      })
      .addCase(postRegisterUser.rejected, (state, action) => {
        console.log("rejected");
        state.registering = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export const { resetRegistrationState } = userSlice.actions;
export default userSlice.reducer;
