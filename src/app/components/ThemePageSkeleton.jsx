import { Box, Divider, Skeleton, Stack } from "@mui/material";
import React from "react";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const ThemePageSkeleton = () => {
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "white",
        borderRadius: "8px",

        width: "100%",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"25px"}
        height={"100%"}
        p={"24px"}
        sx={{ overflowY: "scroll" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <CommonSkeleton height={60} width={"100%"}></CommonSkeleton>
        </Box>

        <CommonSkeleton height={260} width={420}></CommonSkeleton>

        <Stack direction={"column"} spacing={"6px"}>
          <CommonSkeleton height={22} width={"25%"}></CommonSkeleton>

          <CommonSkeleton height={21} width={"60%"}></CommonSkeleton>
        </Stack>
        <Stack direction={"column"} spacing={"6px"}>
          <CommonSkeleton height={22} width={"25%"}></CommonSkeleton>

          <CommonSkeleton height={21} width={"60%"}></CommonSkeleton>
        </Stack>
        <Divider />
        <Stack direction={"column"} spacing={"6px"}>
          <CommonSkeleton height={45} width={"100%"}></CommonSkeleton>
        </Stack>

        <Box
          height={"46px"}
          width={"136px"}
          borderRadius={"24px"}
          border={"1.4px solid #ECEDF0"}
          p={"6px"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {" "}
          <Skeleton variant="circular" height={34} width={34}>
            {" "}
            <Box height={"34px"} width={"34px"} borderRadius={"50%"}></Box>
          </Skeleton>
          <Skeleton height={20}>
            <Box fontSize={"14px"} fontWeight={600}>
              currentColor
            </Box>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemePageSkeleton;
