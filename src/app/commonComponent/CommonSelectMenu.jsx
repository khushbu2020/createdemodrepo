"use client";
import React from "react";
import { MenuItem, Select, FormControl } from "@mui/material";
import { useState } from "react";
import { useColor } from "../contexts/ColorProvider";

const CommonSelectMenu = ({
  options = [],
  placeholder = "Select an option",
  width = "70%",
  //   height = "52px",
  onChange,
  value,
  minWidth = 300,
}) => {
  const { currentColor } = useColor();
  const handleChange = (event) => {
    if (onChange) onChange(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: minWidth, width }}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        sx={{
          height: "50px",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "12px",

          padding: "14px 18px",
          "& .MuiSelect-select": {
            padding: "0px", // Ensure no padding inside the select
            height: "100%", // Ensure height consistency
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px", // Custom border width
            // borderColor: currentColor,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: currentColor, // Hover outline color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: currentColor, // Focus outline color
          },
        }}
      >
        <MenuItem value="">
          <em>{placeholder}</em> {/* Placeholder */}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonSelectMenu;
