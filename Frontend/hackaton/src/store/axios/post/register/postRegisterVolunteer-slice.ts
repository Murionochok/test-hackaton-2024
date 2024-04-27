import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { VolunteerFormData } from "../../../../interfaces/UserInterfaces";

const initialState = {
  registering: false,
  error: null,
  success: false,
};

export const registerVolunteer = createAsyncThunk(
  "register/volunteer",
  async (formData: VolunteerFormData) => {
    const response = await axios.post<VolunteerFormData>(
      `/register/volunteer`,
      formData
    );
    return response.data; // Assuming successful registration returns data
  }
);

const userSlice = createSlice({
  name: "volunteer",
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
      .addCase(registerVolunteer.pending, (state) => {
        state.registering = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerVolunteer.fulfilled, (state) => {
        state.registering = false;
        state.error = null;
        state.success = true;
      })
      .addCase(registerVolunteer.rejected, (state, action) => {
        state.registering = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export const { registerVolunteer, resetRegistrationState } = userSlice.actions;
export default userSlice.reducer;
