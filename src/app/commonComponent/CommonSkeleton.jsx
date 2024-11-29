import React from "react";
import { Skeleton } from "@mui/material";

const CommonSkeleton = ({
  variant = "rectangular",
  width,
  sx = {},
  animation,
  components,
  height,
  borderRadius = "12px",
  ...props
}) => {
  return (
    <Skeleton
      variant={variant}
      animation={animation}
      width={width}
      height={height}
      sx={{ ...sx, borderRadius: borderRadius }}
      {...props}
    >
      {components}
    </Skeleton>
  );
};

export default CommonSkeleton;
