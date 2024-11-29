"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useColor } from "@/app/contexts/ColorProvider";

const IOSSwitch = styled(({ currentColor, ...props }) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, currentColor }) => ({
  width: 48,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: currentColor || "#F37423",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

// export default function CommonSwitchToggle({ checked, onChange }) {
export default function CommonSwitchToggle() {
  const { currentColor } = useColor();
  const [checked, setchecked] = useState(false);
  const handleChange = (event) => {
    setchecked(event.target.checked);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            sx={{ mx: 2 }}
            // defaultChecked
            checked={checked}
            onChange={handleChange}
            currentColor={currentColor}
          />
        }
      />
    </FormGroup>
  );
}
