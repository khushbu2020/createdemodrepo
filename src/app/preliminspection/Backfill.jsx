import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Backfill = () => {
  const steps = [
    "Shading Material",
    "Shading Material",
    "Compaction Method",
    "Final Clean-up",
    "Seed Mix Used",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };
  return (
    <>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={false}
        orientation="vertical"
        sx={{
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
                    // borderTopRightRadius: "12px",
                    // borderTopLeftRadius: "12px",
                    borderRadius: "12px",
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

export default Backfill;
