import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material/Grid2";
import React from "react";

const CommonLoginImage = () => {
  return (
    <>
      <Grid
        size={{ lg: 7 }}
        display={{ xs: "none", lg: "block" }}
        sx={{
          backgroundImage: `
          
          linear-gradient(360deg, #2B2669 0%, rgba(85, 75, 207, 0) 74.1%),
          url(./loginimage.jpg)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "100%",
        }}
      >
        <Box
          position={"absolute"}
          bottom={"123px"}
          left={"78px"}
          color={"white"}
          height={"189px"}
          width={"492px"}
        >
          <Typography
            style={{ fontSize: "52px", lineHeight: "62.96px" }}
            fontWeight={600}
          >
            Simplify management with our dashboard.
          </Typography>
          <Typography
            sx={{ fontSize: "16px", lineHeight: "21px" }}
            fontWeight={400}
          >
            Simplify your dashbord management with our user-friendly admin
            dashboard.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default CommonLoginImage;
