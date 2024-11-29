"use client";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";

import React, { useEffect, useRef, useState, memo } from "react";
import Image from "next/image";
import LoginSymbol from "../../../public/image/loginlogo.svg";
import BackArrowSVG from "../icon/BackArrowSVG";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useSnackbar } from "../contexts/SnackbarContext";
import { useColor } from "../contexts/ColorProvider";
import { RotatingLines } from "react-loader-spinner";
import {
  OTP_RESEND,
  OTP_VERIFICATION,
} from "../components/maincomponents/utils";
import axios from "axios";
import Countdown from "react-countdown";
import MemoizedCountdown from "./MemoizedCountdown";
import {
  resendOtp,
  setloading,
  setResendDisabled,
  verifyOtp,
} from "../store/OtpSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginValidation = ({ handleBack }) => {
  const [otp, setotp] = useState(new Array(4).fill(""));
  const [otpComplate, setotpComplate] = useState(false);
  const { loading } = useSelector((state) => state.otpdata);
  // const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const [isResendDisabled, setIsResendDisabled] = useState(false); // to track if resend button should be disabled
  const [key, setKey] = useState(0); // key to reset the countdown when OTP is resent
  const [countdownDate, setCountdownDate] = useState(Date.now() + 60000);
  const dispatch = useDispatch();
  const handleResendClick = async () => {
    if (isResendDisabled) return;
    setIsResendDisabled(true); // Disable the button
    setKey((prevKey) => prevKey + 1); // Reset countdown by changing key
    setCountdownDate(Date.now() + 60000);

    const storedAuthToken = localStorage.getItem("token");
    if (storedAuthToken) {
      try {
        await dispatch(resendOtp(storedAuthToken)).unwrap();
        showSnackbar("OTP sent successfully!", "success");
      } catch (error) {
        showSnackbar("Failed to resend OTP. Please try again.", "error");
      } finally {
        dispatch(setloading(false));
      }
    } else {
      showSnackbar(
        "Authentication token not found. Please log in again.",
        "error"
      );
    }
    // try {
    //   // Simulate sending OTP (replace with your actual API request)
    //   const storedAuthToken = localStorage.getItem("token");

    //   const response = await axios.post(OTP_RESEND, {
    //     token: storedAuthToken,
    //   });

    //   if (response.status === 200) {
    //     // console.log("OTP sent successfully.");
    //     const newAuthToken = response.data.data.token;
    //     // console.log(newAuthToken)
    //     if (newAuthToken) {
    //       localStorage.setItem("token", newAuthToken);
    //       // sessionStorage.setItem("
    //       // Cookies.set("authToken", newAuthToken, { expires: 1 });
    //     }
    //   } else {
    //     console.error("Failed to send OTP.");
    //     // OTPError();
    //     showSnackbar("Invalid OTP. Please try again.", "error");
    //   }
    // } catch (error) {
    //   console.error("Error while sending OTP:", error);
    // } finally {
    //   setLoading(false); // Hide loader when the process is complete
    // }
  };

  // Callback to be called when countdown completes
  const handleCountdownComplete = () => {
    setIsResendDisabled(false); // Enable the button again when the countdown finishes
  };

  // Custom renderer for Countdown to format as MM:SS
  const renderer = ({ minutes, seconds }) => {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
      <span>
        {formattedMinutes}:{formattedSeconds}
      </span>
    );
  };
  const router = useRouter();
  const { currentColor } = useColor();
  const { showSnackbar } = useSnackbar();

  const handleOtpChange = (e, idx) => {
    const value = e.target.value;

    // Check for valid input (digit only)
    if (value === "" || /^\d$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[idx] = value;
      setotp(updatedOtp);

      // Move focus to the next input
      if (value && idx < otp.length - 1) {
        inputRefs.current[idx + 1].focus();
      }
    }
  };

  const handleVerificationOTP = async () => {
    const otpCode = otp.join("");
    if (otpCode.length === 4) {
      dispatch(setloading(true));
      const storedAuthToken = localStorage.getItem("token");
      if (storedAuthToken) {
        try {
          await dispatch(
            verifyOtp({ otpCode, token: storedAuthToken })
          ).unwrap();
          Cookies.set("authToken", storedAuthToken, { expires: 1 });
          sessionStorage.setItem("sessionToken", storedAuthToken);
          showSnackbar("You are successfully logged in!", "success");
          router.push("/home");
        } catch (error) {
          showSnackbar("OTP verification failed. Please try again.", "error");
        } finally {
          // dispatch(setResendDisabled(false));
          dispatch(setloading(false));
        }
      } else {
        showSnackbar(
          "Authentication token not found. Please log in again.",
          "error"
        );
      }
    }
    // if (otpCode.length === 4) {
    //   setLoading(true);
    //   try {
    //     const storedAuthToken = localStorage.getItem("token");
    //     if (storedAuthToken) {
    //       const response = await axios.post(OTP_VERIFICATION, {
    //         otp: otpCode,
    //         token: storedAuthToken,
    //       });
    //       // console.log(response);
    //       if (response.status === 200) {
    //         const authToken = response.data.data.sessionToken;
    //         // Store the token if it's not already in localStorage
    //         if (!localStorage.getItem("token")) {
    //           localStorage.setItem("token", authToken);
    //         }
    //         Cookies.set("authToken", authToken, { expires: 1 });
    //         sessionStorage.setItem(
    //           "sessionToken",
    //           response.data.data.sessionToken
    //         );
    //         const successMessage =
    //           response.data.message || "You are successfully logged in!";
    //         showSnackbar(successMessage, "success");
    //         router.push("/home");
    //       } else {
    //         const errorMessage =
    //           response.data.message ||
    //           "OTP verification failed. Please try again.";
    //         showSnackbar(errorMessage, "error");
    //         // console.log("API error response: ", response);
    //       }
    //     } else {
    //       // If no auth token found in localStorage
    //       showSnackbar(
    //         "Authentication token not found. Please log in again.",
    //         "error"
    //       );
    //     }
    //   } catch (error) {
    //     console.error("OTP Verification failed:", error);

    //     // Differentiate network or API-related errors
    //     if (error.response) {
    //       const errorMessage =
    //         error.response.data.message ||
    //         "OTP verification failed. Please try again.";
    //       showSnackbar(errorMessage, "error");
    //     } else {
    //       showSnackbar(
    //         "An unexpected error occurred. Please try again.",
    //         "error"
    //       );
    //     }
    //   } finally {
    //     setLoading(false); // Hide loader after the verification process is complete
    //   }
    // }
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      setotpComplate(true);
      handleVerificationOTP();
    } else {
      setotpComplate(false);
    }
  }, [otp]);

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !e.target.value) {
      if (inputRefs.current[idx - 1]) {
        inputRefs.current[idx - 1].focus();
      }
    }
  };

  //autofouces only dispaly in first input filed
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <>
      <Box
        height={"24px"}
        width={"24px"}
        ml={3}
        position={"absolute"}
        top={"20%"}
        left={"5%"}
      >
        <IconButton onClick={handleBack}>
          <BackArrowSVG height={"24px"} width={"24px"} color={"black"} />
        </IconButton>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        height={500}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src={LoginSymbol} alt="Login page image" />
        </Box>
        <Box textAlign={"center"}>
          <Typography fontSize={"40px"} color="#2B2669" fontWeight={600}>
            Verification Code
          </Typography>
          <Typography fontSize={"14px"} fontWeight={400}>
            We have sent a verification code to your email
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"cetner"}
        >
          <Stack direction={"row"}>
            {otp.map((data, idx) => (
              <TextField
                key={idx}
                value={data}
                onChange={(e) => {
                  handleOtpChange(e, idx);
                }}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                inputRef={(el) => (inputRefs.current[idx] = el)}
                variant="outlined"
                style={{ width: "60px", height: "64px" }}
                slotProps={{
                  htmlInput: {
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      color: "#000000",
                      fontSize: "28px",
                    },
                  },
                }}
                sx={{
                  mx: 1.5,
                  fontWeight: 500,
                  caretColor: currentColor,
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: currentColor,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: currentColor,
                    },
                    "&:hover": {
                      borderColor: currentColor,
                    },
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
        {loading ? (
          // {loading ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height="64px"
          >
            <RotatingLines
              strokeColor={currentColor || "#F37423"}
              strokeWidth="5"
              animationDuration="0.75"
              width="40"
              visible={true}
            />
          </Box>
        ) : (
          <Box
            textAlign={"center"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            height="64px"
          >
            <Box
              display={"flex"}
              gap={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography fontSize={"16px"} fontWeight={500} color="#6C7278">
                Didn’t receive code?{" "}
              </Typography>
              <Typography
                sx={{
                  color: isResendDisabled ? "#B0B0B0" : "#2B2669",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: isResendDisabled ? "not-allowed" : "pointer",
                  opacity: isResendDisabled ? 0.5 : 1,
                }}
                onClick={handleResendClick}
                disabled={isResendDisabled}
              >
                Resend
              </Typography>
            </Box>
            {isResendDisabled && (
              <MemoizedCountdown
                date={countdownDate}
                renderer={renderer}
                onComplete={handleCountdownComplete}
              />
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default LoginValidation;
