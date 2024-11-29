"use client";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import LoginSymbol from "../../../public/image/loginlogo.svg";
import { useFormik } from "formik";
import * as yup from "yup";
import CommonButton from "@/app/commonComponent/CommonButton";
import { useRouter } from "next/navigation";
import EmailSVG from "../icon/EmailSVG";
import { useColor } from "../contexts/ColorProvider";
import { useDispatch } from "react-redux";
import { LoginUser } from "../store/LoadingSlice";
import { useSnackbar } from "../contexts/SnackbarContext";
import { RotatingLines } from "react-loader-spinner";

const LoginForm = () => {
  const router = useRouter();
  const { currentColor } = useColor();
  const dispatch = useDispatch();
  const { showSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
    }),
    onSubmit: () => {
      router.push("/otpvalidation");
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const action = await dispatch(
          LoginUser({
            email: values.email,
          })
        );

        // Redirect on successful login

        if (LoginUser.fulfilled.match(action)) {
          router.push("/otpvalidation");
          const successMessage =
            action.payload?.msg || "OTP sent successfully.";
          showSnackbar(successMessage, "success"); // Show success message in snackbar
          //store localstorage emial
          // localStorage.setItem("email", values.email);
        } else {
          const errorMessage = action.payload || "An error occurred";
          showSnackbar(errorMessage, "error");
        }
      } catch (error) {
        console.error("Login failed:", error);
        showSnackbar(error.message || "Something went wrong", "error");
      } finally {
        setLoading(false); // Hide loader after the verification process is complete
      }
    },
  });
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"3rem"}
      alignItems={"center"}
    >
      <Image src={LoginSymbol} alt="Login page image" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"3rem"}
        height={{ lg: "353px", xs: "353px" }}
        width={{ lg: "466px", xs: "466px" }}
      >
        <Box textAlign={"center"}>
          <Typography fontSize={"40px"} color="#2B2669" fontWeight={600}>
            Create your account
          </Typography>
          <Typography color="#292929" fontSize={"14px"} fontWeight={400}>
            Please enter your login details below
          </Typography>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Box>
            <Typography fontSize={"14px"} fontWeight={600} my={1.5}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              type="email"
              name="email"
              sx={{
                fontWeight: 500,
                height: "50px",
                borderRadius: "12px",
                caretColor: currentColor,
                input: {
                  backgroundColor: "#F4F4F4",
                  px: "1rem",
                  py: "13.5px",
                  borderRadius: "12px",
                },
                "& .MuiOutlinedInput-root": {
                  // backgroundColor: "#f0f0f0",
                  borderRadius: "12px",
                  backgroundColor: "#F4F4F4",
                  "&:hover fieldset": {
                    borderColor: currentColor,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: currentColor,
                  },
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailSVG />
                    </InputAdornment>
                  ),
                },
              }}
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
              error={Boolean(formik.touched.email && formik.errors.email)}
            />
          </Box>
          {loading ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height="64px"
              mt="2.3rem"
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
            <Box>
              <CommonButton
                type={"submit"}
                sx={{
                  mt: "3rem",
                  borderRadius: "12px",
                  width: "100%",
                  height: "50px",
                  fontWeight: 600,
                }}
              >
                Continue
              </CommonButton>
            </Box>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
