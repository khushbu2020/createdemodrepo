import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Loginimg from "./Loginimg";
import { useColor } from "../contexts/ColorProvider";

const LoginImageGrid = ({ file }) => {
  const backgroundImage = file || "/loginimage.jpg";

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        fill
        src={backgroundImage}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="loginImage"
        priority
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(360deg, #2B2669 0%, rgba(85, 75, 207, 0) 74.1%)",
        }}
      />
      <Loginimg />
    </Box>
  );
};

export default LoginImageGrid;
