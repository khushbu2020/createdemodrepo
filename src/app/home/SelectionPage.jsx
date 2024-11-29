import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CommonSelectMenu from "../commonComponent/CommonSelectMenu";

const SelectionPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <>
      <Stack spacing={2} direction={"column"}>
        <Typography fontSize={"20px"} fontWeight={600}>
          Estimated vs. Actual Hours by Project
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          height={"25rem"}
        >
          <Stack direction={"column"} spacing={"8px"}>
            <Typography fontSize={"16px"} fontWeight={600} color="#6F767E">
              Date
            </Typography>
            <CommonSelectMenu
              options={options}
              value={selectedOption}
              onChange={setSelectedOption}
              placeholder="Select Date"
              width="100%"
              height="50px"
              minWidth={"100%"}
            />
          </Stack>
          <Stack direction={"column"} spacing={"8px"}>
            <Typography fontSize={"16px"} fontWeight={600} color="#6F767E">
              Projects
            </Typography>
            <CommonSelectMenu
              options={options}
              value={selectedOption1}
              onChange={setSelectedOption1}
              placeholder="All"
              width="100%"
              height="50px"
              minWidth={"100%"}
            />
          </Stack>
          <Stack direction={"column"} spacing={"8px"}>
            <Typography fontSize={"16px"} fontWeight={600} color="#6F767E">
              Assignees
            </Typography>
            <CommonSelectMenu
              options={options}
              value={selectedOption2}
              onChange={setSelectedOption2}
              placeholder="All"
              width="100%"
              height="50px"
              minWidth={"100%"}
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default SelectionPage;
