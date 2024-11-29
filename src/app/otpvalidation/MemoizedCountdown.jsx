import { Box } from "@mui/material";
import React, { memo } from "react";
import Countdown from "react-countdown";
import { useColor } from "../contexts/ColorProvider";

const MemoizedCountdown = ({ date, renderer, onComplete }) => {
  const { currentColor } = useColor();
  return (
    <Box
      textAlign={"center"}
      color={currentColor}
      fontSize={"16px"}
      fontWeight={500}
    >
      <Countdown date={date} renderer={renderer} onComplete={onComplete} />
    </Box>
  );
};

export default memo(MemoizedCountdown);
