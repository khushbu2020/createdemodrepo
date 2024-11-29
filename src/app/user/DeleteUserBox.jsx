import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Imagepic from "../../../public/image/DeleteData.svg";

const DeleteUserBox = () => {
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
          Delete User?
        </Typography>
        <Typography fontSize={"15px"} fontWeight={400} color="#1A1D1F">
          Are you sure you want to delete the user?
        </Typography>
      </Box>
      <Box mt={3}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#FF4646",
            padding: "14px",
            color: "white",
            "&:hover": {
              backgroundColor: "#ff6060",
            },
          }}
          fullWidth
          size="large"
        >
          Yes, Delete
        </Button>
      </Box>
    </>
  );
};

export default DeleteUserBox;
