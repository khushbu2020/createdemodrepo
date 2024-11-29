import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const TabTwoData = () => {
  return (
    <Box mt={"29px"} ml={"24px"}>
      <Box display={"flex"} flexDirection={"column"} gap={"18px"}>
        <Stack direction={"column"} spacing={"6px"}>
          <Typography color="#1A1D1F" fontWeight={600} fontSize={"16px"}>
            Address :
          </Typography>
          <Typography color="#6F767E" fontWeight={500} fontSize={"16px"}>
            No.65 Gowon Estate Road, Ikotun
          </Typography>
        </Stack>
        <Stack direction={"column"} spacing={"6px"}>
          <Typography color="#1A1D1F" fontWeight={600} fontSize={"16px"}>
            Live Location :
          </Typography>
          <Typography color="#6F767E" fontWeight={500} fontSize={"16px"}>
            Display Map here...
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default TabTwoData;
