import { Box, Stack } from "@mui/material";
import React from "react";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const TwoLineTableSkeleton = () => {
  return (
    <Box
      bgcolor={"white"}
      height="100%"
      width={"100%"}
      p={"24px"}
      borderRadius={"8px"}
    >
      <Stack height="100%" direction={"column"} spacing={2}>
        <Box>
          <CommonSkeleton
            sx={{
              width: "100%",
              height: "39px",
            }}
          ></CommonSkeleton>
        </Box>
        <Box>
          <CommonSkeleton
            sx={{ width: "100%", height: "40px" }}
          ></CommonSkeleton>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          <CommonSkeleton
            sx={{
              width: "100%",
              height: "100%",
            }}
          ></CommonSkeleton>
        </Box>
      </Stack>
    </Box>
  );
};

export default TwoLineTableSkeleton;
