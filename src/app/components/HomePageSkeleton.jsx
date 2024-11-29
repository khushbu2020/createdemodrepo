import { Box, Stack } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const HomePageSkeleton = () => {
  return (
    <Box>
      <Stack direction={"column"} spacing={2}>
        <Grid container spacing={2}>
          {[1, 2, 3].map((item, idx) => (
            <CommonSkeleton
              key={idx}
              sx={{
                height: { lg: "150px", md: "120px", xs: "150px" },

                width: { xs: "99%", md: "31.5%", lg: "31.5%", xl: "31.7%" },
              }}
            ></CommonSkeleton>
          ))}
        </Grid>

        <Grid container spacing={2}>
          <CommonSkeleton
            height={537}
            sx={{
              width: { xs: "99%", md: "99%", lg: "99%", xl: "49%" },
            }}
          ></CommonSkeleton>

          <CommonSkeleton
            height={537}
            // width={"25%"}
            sx={{
              width: { xs: "100%", md: "48%", lg: "48.5%", xl: "22.5%" },
            }}
          ></CommonSkeleton>

          <CommonSkeleton
            height={537}
            // width={"25%"}
            sx={{
              width: { xs: "100%", md: "48%", lg: "48.5%", xl: "22.5%" },
            }}
          ></CommonSkeleton>
        </Grid>

        <Grid container spacing={2}>
          <CommonSkeleton
            height={537}
            // width={"45%"}
            sx={{
              width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
            }}
          ></CommonSkeleton>
          <CommonSkeleton
            height={537}
            // width={"45%"}
            sx={{
              width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
            }}
          ></CommonSkeleton>
        </Grid>

        <Grid container spacing={2}>
          <CommonSkeleton
            height={537}
            // width={"45%"}
            sx={{
              width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
            }}
          ></CommonSkeleton>
          <CommonSkeleton
            height={537}
            // width={"45%"}
            sx={{
              width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
            }}
          ></CommonSkeleton>
        </Grid>

        <Grid container spacing={2}>
          <CommonSkeleton
            height={1288}
            // width={"45%"}
            sx={{
              width: { xs: "99%", md: "99%", lg: "99%", xl: "99%" },
            }}
          ></CommonSkeleton>
        </Grid>
      </Stack>
    </Box>
  );
};

export default HomePageSkeleton;
