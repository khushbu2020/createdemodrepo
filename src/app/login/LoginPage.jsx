"use client";
import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";

import LoginForm from "./LoginForm";
import { useColor } from "../contexts/ColorProvider";
import BrarLoading from "../components/BrarLoading";
import { useDispatch } from "react-redux";
import { getLoginConfigurationdata } from "../store/LoginConfiguration";
import LoginImageGrid from "./LoginImageGrid";

const LoginPage = () => {
  const { loading, file } = useColor();
  console.log("login...");
  return (
    <>
      {/* {loading && <BrarLoading />} */}
      <Grid container spacing={2} height={"100vh"}>
        <Grid
          size={{ lg: 7 }}
          display={{ xs: "none", lg: "block" }}
          sx={{
            position: "relative",
            height: "100%",
          }}
        >
          <LoginImageGrid file={file} />
        </Grid>
        <Grid
          size={{ xs: 12, md: 12, lg: 5 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="100%"
        >
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
