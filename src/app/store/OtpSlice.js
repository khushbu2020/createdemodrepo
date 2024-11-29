// features/otp/OtpSliceredux.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  OTP_RESEND,
  OTP_VERIFICATION,
} from "../components/maincomponents/utils";

// Thunk for verifying the OTP
export const verifyOtp = createAsyncThunk(
  "otp/verify",
  async ({ otpCode, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(OTP_VERIFICATION, {
        otp: otpCode,
        token,
      });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.data.message || "OTP verification failed.");
      }
    } catch (error) {
      return rejectWithValue(
        error.message || "An error occurred during OTP verification."
      );
    }
  }
);

// Thunk for resending the OTP
export const resendOtp = createAsyncThunk(
  "otp/resend",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.post(OTP_RESEND, { token });
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
        return response.data;
      } else {
        throw new Error(response.data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      return rejectWithValue(
        error.message || "An error occurred while resending OTP."
      );
    }
  }
);

const OtpSliceredux = createSlice({
  name: "otp",
  initialState: {
    loading: false,
    error: null,
    otpSent: false,
    otpVerificationSuccess: false,
    resendDisabled: false,
  },
  reducers: {
    setResendDisabled(state, action) {
      state.resendDisabled = action.payload;
    },
    setloading(state, action) {
      state.resendDisabled = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle OTP verification
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpVerificationSuccess = true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.otpVerificationSuccess = false;
      });

    // Handle OTP resend
    builder
      .addCase(resendOtp.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(resendOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.otpSent = false;
      });
  },
});

export const { setResendDisabled, setloading } = OtpSliceredux.actions;

export default OtpSliceredux;
