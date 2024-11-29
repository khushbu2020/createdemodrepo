import React from "react";
import Imagepic from "../../../public/image/accountLoginicon.svg";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import CommonButton from "../commonComponent/CommonButton";
import { Padding } from "@mui/icons-material";

const ImpersonaData = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height="300px"
      >
        <Image src={Imagepic} alt="Delete data" priority />
        <Typography fontSize={"24px"} fontWeight={600} color="#1A1D1F">
          Account Login
        </Typography>
        <Typography fontSize={"15px"} fontWeight={400} color="#1A1D1F">
          Do you really want to login as a user?
        </Typography>
      </Box>
      <Box mt={3}>
        <CommonButton
          sx={{ width: "100%", Padding: "14px 20px", height: "52px" }}
        >
          {" "}
          Yes, Sure
        </CommonButton>
      </Box>
    </>
  );
};

export default ImpersonaData;
