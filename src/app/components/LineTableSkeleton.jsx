import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import CommonSkeleton from "../commonComponent/CommonSkeleton";
import CommonButton from "../commonComponent/CommonButton";
import CommonSearchInput from "../commonComponent/CommonSearchIconInput";
const LineTableSkeleton = () => {
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "white",
        borderRadius: "8px",
        padding: "24px",
        width: "100%",
      }}
    >
      <Stack height="100%" direction={"column"} spacing={"20px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          <Box
            width={{
              xl: "354px",
              md: "354px",
              lg: "354px",
              sm: "100%",
              xs: "100%",
            }}
          >
            <Skeleton
              variant="rectangular"
              width={"100%"}
              sx={{ borderRadius: "12px" }}
            >
              {" "}
              <CommonSearchInput name={"text"} />
            </Skeleton>
          </Box>

          <Box>
            <Skeleton
              variant="rectangular"
              sx={{
                borderRadius: "12px",
                height: "39px",
                my: 2,
              }}
            >
              <CommonButton
                sx={{ borderRadius: "8px", p: "12px 14px", my: "10px" }}
              >
                Add Project
              </CommonButton>
            </Skeleton>
          </Box>
        </Box>{" "}
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

export default LineTableSkeleton;
