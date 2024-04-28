import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VolunteerI } from "./VolunteerType";
import { VolunteerFormData } from "../../interfaces/UserInterfaces";
import axios from "axios";

const initialState: VolunteerI = {
  loading: false,
  user: {
    isAuthenticated: false,
    isVolunteer: false,
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  },
  error: "",
};

export const postRegisterVolunteer = createAsyncThunk(
  "register/volunteer",
  async (formData: VolunteerFormData) => {
    const response = await axios.post<VolunteerFormData>(
      `http://localhost:3000/register/volunteer`,
      formData
    );
    return response.data; // Assuming successful registration returns data
  }
);

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState: initialState,
  reducers: {
    volunteerState(_state, action: PayloadAction<VolunteerI>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegisterVolunteer.pending, (state) => {
        state.loading = true;
      })
      .addCase(postRegisterVolunteer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postRegisterVolunteer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ? action.error.message : "";
      });
  },
});

export const volunteerActions = volunteerSlice.actions;
export default volunteerSlice;
