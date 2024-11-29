import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIconSVG from "../icon/SearchIconSVG";
import { useColor } from "../contexts/ColorProvider";

const CommonSearchInput = ({
  width = "100%",
  placeholder = "Search here...",
  type = "text",
  name,
  ...props
}) => {
  const { currentColor } = useColor();
  return (
    <TextField
      fullWidth
      type={type}
      name={name}
      placeholder={placeholder}
      sx={{
        width,
        height: "41px",
        caretColor: currentColor,
        input: {
          px: "1rem",
          py: "13.5px",
          //   color: "#71757B",
          fontSize: "15px",
          fontWeight: 500,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          "&:hover fieldset": {
            borderColor: currentColor,
          },
          "&.Mui-focused fieldset": {
            borderColor: currentColor,
          },
        },
        "& .MuiInputBase-input": {
          padding: "11.22px", // Adjust padding as needed
        },
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <SearchIconSVG />
            </InputAdornment>
          ),
        },
      }}
      {...props} // Spread additional props for flexibility
    />
  );
};

export default CommonSearchInput;
