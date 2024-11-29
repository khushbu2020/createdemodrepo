// import { Grid } from "@mui/material";
"use client";
import Grid from "@mui/material/Grid2";
import React from "react";
import LoginValidation from "./LoginValidation";
import { useRouter } from "next/navigation";
import { useColor } from "../contexts/ColorProvider";
import BrarLoading from "../components/BrarLoading";
import LoginImageGrid from "../login/LoginImageGrid";

const Otpvalidation = () => {
  const router = useRouter();

  const { loading, file } = useColor();

  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      {" "}
      {loading && <BrarLoading />}
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
          flexDirection={"column"}
          justifyContent={"center"}
          height="100%"
          position={"relative"}
        >
          <LoginValidation handleBack={handleBack} />
        </Grid>
      </Grid>
    </>
  );
};

export default Otpvalidation;
