import React from "react";
import { Box, Typography } from "@mui/material";
import { useColor } from "../contexts/ColorProvider";
const Loginimg = () => {
  const { sitetitle, sitesubtitle } = useColor();
  return (
    <Box
      position={"absolute"}
      bottom={"123px"}
      left={"78px"}
      color={"white"}
      // height={"189px"}
      width={"492px"}
    >
      <Typography
        style={{
          fontSize: "52px",
          lineHeight: "62.96px",
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 5,
        }}
      >
        {/* Simplify management with our dashboard. */}
        {sitetitle}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "21px",
          fontWeight: 400,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 4,
        }}
      >
        {/* Simplify your dashbord management with our user-friendly admin
        dashboard. */}

        {sitesubtitle}
      </Typography>
    </Box>
  );
};

export default Loginimg;
