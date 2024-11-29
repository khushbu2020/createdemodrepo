"use client";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN } from "../components/maincomponents/utils";
// import { cookies } from "next/headers";

export const LoginUser = createAsyncThunk(
  "logindata/loginUser",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN, { email });

      // console.log("API Response:", response.data); // Log the response
      // console.log("API Response:", response.data.message); // Log the response

      const { token } = response.data.data;

      localStorage.setItem("token", token);
      return { msg: response.data.message, token, user: response.data.data };
    } catch (error) {
      console.error("Error response:", error.response?.data);
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const LoginSliceredux = createSlice({
  name: "logindata",
  initialState: {
    email: "",
    loading: false,
    error: null,
    msg: null,
    token: null,
    user: null,
  },
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.msg = null;
      state.error = null;
      state.loading = false;
      localStorage.removeItem("token");
      localStorage.clear();
      sessionStorage.clear();
      // cookies.deleteAll();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = action.payload.msg;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = LoginSliceredux.actions;
export default LoginSliceredux;
