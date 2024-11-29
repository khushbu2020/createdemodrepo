import { Box, Divider, Skeleton, Stack } from "@mui/material";
import React from "react";
import CommonSkeleton from "../commonComponent/CommonSkeleton";
import Grid from "@mui/material/Grid2";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";
import CommonButton from "../commonComponent/CommonButton";

const CustomjobSkeleton = () => {
  return (
    <Box
      bgcolor={"white"}
      height={"100%"}
      width={"100%"}
      borderRadius={"8px"}
      sx={{ overflowY: "scroll" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
        }}
      >
        <Box display={"flex"} flexDirection={"column"} flexGrow={1} gap={2}>
          <CommonSkeleton height={39} width={"25%"}></CommonSkeleton>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <CommonSkeleton width={"100%"} height={41}></CommonSkeleton>
          </Box>
          <Divider />
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((data, idx) => (
              <CommonSkeleton
                key={idx}
                height={341}
                sx={{ width: { xl: "30.1%", lg: "47%", md: "99%" } }}
              ></CommonSkeleton>
            ))}
          </Grid>
        </Box>
        <Stack direction={"row"} spacing={2} justifyContent={"flex-end"} mt={2}>
          <Skeleton variant="rectangular" sx={{ borderRadius: "12px" }}>
            <CommonOutlinedButton
              sx={{
                padding: "10px 20px",
                borderRadius: "8px",
              }}
            >
              Cancel
            </CommonOutlinedButton>
          </Skeleton>

          <Skeleton variant="rectangular" sx={{ borderRadius: "12px" }}>
            {" "}
            <CommonButton
              sx={{ padding: "10px 20px", borderRadius: "8px" }}
              type="submit"
            >
              Submit
            </CommonButton>
          </Skeleton>
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomjobSkeleton;
