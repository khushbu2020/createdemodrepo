import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

import Grid from "@mui/material/Grid2";

const PipelineintegritySkeleton = () => {
  return (
    <Box bgcolor={"white"} height="100%" width={"100%"} borderRadius={"8px"}>
      <Stack
        height="100%"
        sx={{ overflowY: "scroll" }}
        direction={"column"}
        spacing={2}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          p={"24px 24px 0px 24px"}
          alignItems={"center"}
        >
          <CommonSkeleton
            height={32}
            sx={{ pr: "24px" }}
            width={"50%"}
          ></CommonSkeleton>
        </Box>
        <Box p={"0px 24px 0px 24px"}>
          <CommonSkeleton height={41} width={"100%"}></CommonSkeleton>
        </Box>
        <Divider />
        <Grid container spacing={3} padding={"20px 23px"}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, idx) => (
            <CommonSkeleton
              key={idx}
              height={350}
              sx={{
                width: {
                  xl: "23.3%",
                  lg: "30.7%",
                  md: "47%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            ></CommonSkeleton>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default PipelineintegritySkeleton;
