"use client";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import CommonCheckBox from "../commonComponent/CommonCheckBox";

const Environmental = () => {
  const steps = [
    "EPP Sign Off",
    "Waste Manifests Submitted",
    "Environmental Contractor Reports",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(Array(6).fill(false));
  const labels = ["Contractor #1", "Contractor #2"];
  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };
  const handleCheckboxChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };
  return (
    <>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={false}
        orientation="vertical"
        sx={{
          "& .MuiStepConnector-line": {
            minHeight: "40px",
          },
          "& .MuiStepIcon-root": {
            color: "#F37423", // Color for the step icon
          },
          "& .MuiStepLabel-active .MuiStepLabel-iconContainer": {
            color: "#F37423", // Active step icon color
          },
          "& .MuiStepLabel-completed .MuiStepLabel-iconContainer": {
            color: "#F37423", // Completed step icon color
          },
          "& .MuiStepLabel-root": {
            color: "#1A1D1F", // Label color
          },
        }}
      >
        {steps.map((step, idx) => (
          <Step key={idx}>
            <StepLabel>
              <Box border={"1px solid #ECEDF0"} borderRadius={"12px"}>
                <Typography
                  sx={{
                    borderTopRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    bgcolor: "#ECEDF0",
                    height: "60px",
                    padding: "20px 18px",
                    color: "#1A1D1F",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {step}
                </Typography>

                {idx === 2 && (
                  <List>
                    {labels.map((label, idx) => (
                      <React.Fragment key={idx}>
                        <ListItem sx={{ height: "60px", p: "20px" }}>
                          <CommonCheckBox
                          // label={label}
                          // checked={checked[idx]}
                          // onChange={() => handleCheckboxChange(idx)}
                          />
                          {label}
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                )}
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        display="flex"
        gap={"2rem"}
        justifyContent={"start"}
        alignItems={"center"}
        mt={2}
      >
        <Button
          variant="contained"
          onClick={handlePrevious}
          disabled={activeStep === 0}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default Environmental;
