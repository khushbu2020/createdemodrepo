import { TextField } from "@mui/material";
import React from "react";
import { useColor } from "../contexts/ColorProvider";

const CommonInputFiled = ({
  name,
  placeholder,
  onChange,
  type,
  onClick,
  onBlur,
  borderRadius = "10px",
  sx = {},
  value,
  error,
  helperText,
  ...props
}) => {
  const { currentColor } = useColor();
  return (
    <>
      <TextField
        fullWidth
        type={type}
        name={name}
        sx={{
          height: "50px",
          caretColor: currentColor,

          input: {
            // backgroundColor: "#F4F4F4",
            px: "16px",
            py: "16px",
            color: "#000000",
            fontSize: "16px",
            fontWeight: 400,
          },
          "& .MuiOutlinedInput-root": {
            // backgroundColor: "#f0f0f0",
            // backgroundColor: "#F4F4F4",
            borderRadius: "12px",
            "&:hover fieldset": {
              borderColor: currentColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: currentColor,
            },
            "& .MuiInputBase-input": {
              padding: "13.5px", // Adjust padding as needed
            },
          },
          ...sx,
        }}
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        error={error}
        helperText={helperText}
        {...props}
      />
    </>
  );
};

export default CommonInputFiled;
