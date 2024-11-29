import CommonSkeleton from "@/app/commonComponent/CommonSkeleton";
import { Box, Divider } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";

const DigSiteSectionSkeleton = () => {
  return (
    <Box
      bgcolor={"white"}
      height={"100%"}
      width={"100%"}
      sx={{ overflowY: "scroll" }}
      borderRadius={"8px"}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "24px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          alignItems={"center"}
        >
          <CommonSkeleton width={"100%"} height={39}></CommonSkeleton>
        </Box>
        <Box>
          <CommonSkeleton width={"100%"} height={40}></CommonSkeleton>
        </Box>
        <Divider />
        <Grid container spacing={3} padding={"0px 24px"}>
          {[1, 2].map((data, idx) => (
            <CommonSkeleton
              key={idx}
              sx={{
                width: { xl: "31.5%", lg: "47%", md: "99%" },
                height: { lg: 479, md: 479 },
              }}
            ></CommonSkeleton>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DigSiteSectionSkeleton;
