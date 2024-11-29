"use client";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";

import LoginSymbol from "../../../public/image/loginlogo.svg";
import BackArrowSVG from "../icon/BackArrowSVG";
import LoaderSpinner from "../components/LoaderSpinner";
import { useColor } from "../contexts/ColorProvider";

const LoginOtpCode = () => {
  const [otp, setotp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  const { currentColor } = useColor();
  const handleOtpChange = (e, idx) => {
    if (isNaN(e.target.value)) return;

    const value = e.target.value;
    const updatedOtp = [...otp];
    updatedOtp[idx] = value;
    setotp(updatedOtp);

    // Move focus to the next input
    if (value && idx < otp.length - 1) {
      inputRefs.current[idx + 1].focus();
    }
  };
  return (
    <>
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
                  caretColor: "",
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

        <Typography
          component={"div"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={currentColor}
          mt={"55px"}
        >
          {/* <LoaderSpinner /> */}
        </Typography>
      </Box>
    </>
  );
};

export default LoginOtpCode;
