import { Button } from "@mui/material";
import React from "react";
import { useColor } from "../contexts/ColorProvider";

const CommonButton = ({
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
      variant="contained"
      sx={{
        // bgcolor: "#F37423",
        bgcolor: currentColor,
        color: "white",
        height: "41px",
        fontwidth: 600,
        "&:hover": {
          backgroundColor: currentColor,
          opacity: 0.8,
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

export default CommonButton;
