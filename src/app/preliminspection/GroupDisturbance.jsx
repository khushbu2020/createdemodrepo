import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CommonCheckBox from "../commonComponent/CommonCheckBox";
import { useColor } from "../contexts/ColorProvider";

const GroupDisturbance = () => {
  const steps = [
    "AB One Call ",
    "30m Permit Obtained",
    "Variance  & Approvals",
    "3rd Party Sweep",
    "Survey Required",
    "Crossing/Proximity Agreements",
    "Crossing Calculations",
    "Crossing Field Record Complete (3rd Party)",
    "Site Access/Road Use Agreements ",
    "Landowner Information",
    "Equipment Level Pre-Clean Required",
    "Traffic Plan/Traffic Control",
    "Daylights & DOC",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(Array(6).fill(false));
  const labels0 = ["Ticket #   / Date", "Relocate Date"];
  const labels1 = ["On-site PLP Contact Name", "TMEP Notification"];
  const labels2 = [
    "PLP Supervisor Approved Variance",
    "Tech Services - GIS / Vents & Tees",
  ];
  const labels3 = ["Sweep Sheets & Locates", "Bore Data"];
  const labels4 = ["ROW Bdy, GWD, or 3rd Party"];
  const labels5 = ["# of Conflicts", "Signed Agreements Secured"];
  const labels9 = ["Landowner #1", "Landowner #2"];
  const labels12 = [
    "Hydro Vac / Bill of Lading",
    "Hand Expose",
    "DOC Line 1 / Line 2",
  ];

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
  const { currentColor } = useColor();
  return (
    <>
      <Stepper
        activeStep={activeStep}
        alternativeLabel={false}
        orientation="vertical"
        sx={{
          "& .MuiStepIcon-root": {
            color: currentColor || "#F37423", // Color for the step icon
          },
          "& .MuiStepLabel-active .MuiStepLabel-iconContainer": {
            color: currentColor || "#F37423", // Active step icon color
          },
          "& .MuiStepLabel-completed .MuiStepLabel-iconContainer": {
            color: currentColor || "#F37423", // Completed step icon color
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
                {idx === 0 && (
                  //   <StepContent>
                  <List>
                    {labels0.map((label, idx) => (
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
                  //   </StepContent>
                )}
                {idx === 1 && (
                  //   <StepContent>
                  <List>
                    {labels1.map((label, idx) => (
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
                  //   </StepContent>
                )}
                {idx === 2 && (
                  //   <StepContent>
                  <List>
                    {labels2.map((label, idx) => (
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
                  //   </StepContent>
                )}
                {idx === 3 && (
                  //   <StepContent>
                  <List>
                    {labels3.map((label, idx) => (
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
                  //   </StepContent>
                )}
                {idx === 4 && (
                  //   <StepContent>
                  <List>
                    {labels4.map((label, idx) => (
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
                  //   </StepContent>
                )}
                {idx === 5 && (
                  //   <StepContent>
                  <List>
                    {labels5.map((label, idx) => (
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
                  //   </StepContent>
                )}
                {idx === 9 && (
                  //   <StepContent>
                  <List>
                    {labels9.map((label, idx) => (
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
                  //   </StepContent>
                )}
                {idx === 12 && (
                  //   <StepContent>
                  <List>
                    {labels12.map((label, idx) => (
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
                  //   </StepContent>
                )}
              </Box>
            </StepLabel>
            {/* {idx === 2 && (
                <StepContent>
              <List>
                {labels.map((label, idx) => (
                  <React.Fragment key={idx}>
                    <ListItem sx={{ height: "60px", p: "20px" }}>
                      <CommonCheckBox
                        label={label}
                        checked={checked[idx]}
                        onChange={() => handleCheckboxChange(idx)}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
                 </StepContent>
            )} */}
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

export default GroupDisturbance;
