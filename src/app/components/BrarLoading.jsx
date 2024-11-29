import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const BrarLoading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(3px)",
        position: "fixed",
        // position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 1000,
      }}
    >
      <Box textAlign="center">
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};

export default BrarLoading;
