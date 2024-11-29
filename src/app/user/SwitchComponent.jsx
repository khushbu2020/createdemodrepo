import { Switch } from "@mui/material";
import React from "react";

const SwitchComponent = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  return (
    <>
      <Switch {...label} defaultChecked color="warning" />
    </>
  );
};

export default SwitchComponent;
