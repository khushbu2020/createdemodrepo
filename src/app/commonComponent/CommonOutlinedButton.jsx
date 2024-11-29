import { Button } from "@mui/material";
import React from "react";
import { useColor } from "../contexts/ColorProvider";

const CommonOutlinedButton = ({
  onClick,
  children,
  sx,
  onSubmit,
  type,
  disabled,
  startIcon,
  endIcon,
}) => {
  const { currentColor } = useColor();
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "#EFEFEF",
        height: "41px",
        color: currentColor,
        "&:hover": {
          borderColor: currentColor,
          backgroundColor: "#F5F5F5",
        },

        ...sx,
      }}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default CommonOutlinedButton;
