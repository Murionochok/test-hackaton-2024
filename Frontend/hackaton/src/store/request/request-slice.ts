import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type RequestsI = {
  fetching?: boolean;
  creating?: boolean;
  approving?: boolean;
  error?: string | null;
  success?: boolean;
  requests?: string[];
};

const initialState: RequestsI = {
  fetching: false,
  creating: false,
  approving: false,
  error: null,
  success: false,
  requests: [],
};

// Default request
export const createRequest = createAsyncThunk(
  "requests/createRequest",
  async (requestData: any) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    };
    const response = await axios.post(
      `https://localhost:7115/Request/Create`,
      { ...requestData, phone: "+380333333333" },
      config
    );
    console.log(response.data);
    return response.data;
  }
);

// Async thunk for fetching requests by user ID
export const fetchUserRequests = createAsyncThunk(
  "requests/fetchUserRequests",
  async (userId: string) => {
    const response = await axios.get(`/api/requests/user/${userId}`); // Тут повинен бути власний роут
    return response.data;
  }
);

// Async thunk for fetching requests by admin
export const fetchAdminRequests = createAsyncThunk(
  "requests/fetchAdminRequests",
  async () => {
    const response = await axios.get(`/api/requests/admin`); // Тут повинен бути власний роут
    return response.data;
  }
);

// Async thunk for approving a request by admin
export const approveRequest = createAsyncThunk(
  "requests/approveRequest",
  async (requestId: string) => {
    const response = await axios.patch(`/api/requests/${requestId}`, {
      status: "approved",
    }); // Тут повинен бути власний роут
    return response.data;
  }
);

// Create a slice
const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    resetState(state) {
      state.fetching = false;
      state.creating = false;
      state.approving = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          [
            createRequest.pending,
            fetchUserRequests.pending,
            fetchAdminRequests.pending,
            approveRequest.pending,
          ].includes(action.type),
        (state) => {
          state.fetching = true;
          state.error = null;
          state.success = false;
        }
      )
      .addMatcher(
        (action) =>
          [
            createRequest.fulfilled,
            fetchUserRequests.fulfilled,
            fetchAdminRequests.fulfilled,
            approveRequest.fulfilled,
          ].includes(action.type),
        (state, action: PayloadAction<any>) => {
          state.fetching = false;
          state.error = null;
          state.success = true;
          if (action.payload) {
            state.requests = action.payload;
          }
        }
      )
      .addMatcher(
        (action) =>
          [
            createRequest.rejected,
            fetchUserRequests.rejected,
            fetchAdminRequests.rejected,
            approveRequest.rejected,
          ].includes(action.type),
        (state, action: PayloadAction<string>) => {
          state.fetching = false;
          state.error = action.error.message;
          state.success = false;
        }
      );
  },
});

export const requestsActions = requestsSlice.actions;
export default requestsSlice;
