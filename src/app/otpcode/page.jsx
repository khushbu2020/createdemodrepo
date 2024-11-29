"use client";

import Grid from "@mui/material/Grid2";
import React from "react";
import Loginimg from "../login/Loginimg";
import LoginOtpCode from "./LoginOtpCode";
import { Box, Typography } from "@mui/material";
import { useColor } from "../contexts/ColorProvider";
import Image from "next/image";
import LoginImageGrid from "../login/LoginImageGrid";

const OtpCode = () => {
  const { file } = useColor();
  const backgroundImage = file || "./loginimage.jpg";
  return (
    <Grid container spacing={2} height={"100vh"}>
      <Grid
        size={{ lg: 7 }}
        display={{ xs: "none", lg: "block" }}
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        <LoginImageGrid />
      </Grid>
      <Grid
        size={{ xs: 12, md: 12, lg: 5 }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        height="100%"
      >
        <LoginOtpCode />
      </Grid>
    </Grid>
  );
};

export default OtpCode;
