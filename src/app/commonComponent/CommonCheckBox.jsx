import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CircleBlackicon from "../icon/CircleBlackicon";
import OrangeCheckIcon from "../icon/OrangeCheckIcon";

const CommonCheckBox = ({ label, checked, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CircleBlackicon />}
            checkedIcon={<OrangeCheckIcon />}
            checked={checked}
            onChange={onChange}
            sx={{
              "& .MuiSvgIcon-root": {
                // Any custom styles can go here
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default CommonCheckBox;
