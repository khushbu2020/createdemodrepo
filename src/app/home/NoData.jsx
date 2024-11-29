import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import NOdataIcon from "../icon/NOdataIcon";

const NoData = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      width={"100%"}
      overflow={"auto"}
    >
      <IconButton>
        <NOdataIcon />
      </IconButton>
      <Typography
        fontWeight={500}
        color="#6F767E"
        fontSize={"18px"}
        lineHeight={"21.78px"}
      >
        There is no data to be displayed.
      </Typography>
    </Box>
  );
};

export default NoData;
