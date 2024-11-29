"use client";
import CommonButton from "@/app/commonComponent/CommonButton";
import CommonCheckBox from "@/app/commonComponent/CommonCheckBox";
import CommonOutlinedButton from "@/app/commonComponent/CommonOutlinedButton";
import { useColor } from "@/app/contexts/ColorProvider";
import BackArrowSVG from "@/app/icon/BackArrowSVG";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CustomIDAddTask = ({ params }) => {
  const { currentColor } = useColor();
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };
  const listdata = [
    {
      id: 1,
      name: "Task 1",
      status: "pending",
    },
    {
      id: 2,
      name: "Task 2",
      status: "completed",
    },
    {
      id: 3,
      name: "Task 3",
      status: "pending",
    },
    {
      id: 4,
      name: "Task 4",
      status: "pending",
    },
    {
      id: 5,
      name: "Task 5",
      status: "completed",
    },
    {
      id: 6,
      name: "Task 6",
      status: "pending",
    },
  ];
  const [dataList, setdataList] = useState(listdata);
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "white",
        borderRadius: "8px",
        // p: "24px",
        width: "100%",
      }}
    >
      <Stack
        height="100%"
        direction={"column"}
        spacing={"20px"}
        sx={{ overflowY: "scroll" }}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          alignItems={"center"}
          p={"24px 0px 0px 24px"}
        >
          <IconButton onClick={handleBackroute}>
            <BackArrowSVG />
          </IconButton>
          <Typography fontWeight={600} fontSize={"16px"}>
            Add Task
          </Typography>
        </Box>
        <Divider />

        <Box
          border={"1px solid #ECEDF0"}
          borderRadius={"12px"}
          // height="468px"
          flexGrow={1}
          // sx={{ msOverflowY: "auto" }}
          p={"10px"}
        >
          <Box
            sx={{
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
              bgcolor: "#F6F7F7",
              height: "130px",
              padding: "20px",
              color: "#1A1D1F",
              gap: "18px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography fontSize={"18px"} fontWeight={500}>
              {" "}
              Select Task
            </Typography>
            <TextField
              type={"text"}
              name={"text"}
              sx={{
                bgcolor: "#FFFFFF",
                borderRadius: "12px",
                width: { lg: "50%", xl: "50%", md: "100%" },
                caretColor: currentColor,
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
                },
                "& .MuiInputBase-input": {
                  padding: "13.5px", // Adjust padding as needed
                },
              }}
              placeholder={"Enter your task"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <CommonButton
                        sx={{
                          p: "9px 14px",
                          borderRadius: "8px",
                          height: "33px",
                          "& hover": {
                            bordercolor: "red",
                          },
                        }}
                      >
                        Add Task
                      </CommonButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <Box p={"12px"}>
            {dataList.map((list, idx) => (
              <React.Fragment key={idx}>
                <Box p={"11px"}>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Box mr={"12px"}>
                      <CommonCheckBox />
                    </Box>
                    <Box>
                      <Typography>{list.name}</Typography>
                    </Box>
                  </Stack>
                </Box>
                <Divider />
              </React.Fragment>
            ))}
          </Box>
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"flex-end"}
          p={"0px 24px 24px 0px"}
        >
          <CommonOutlinedButton
            sx={{
              padding: "10px 20px",
              borderRadius: "8px",
            }}
            onClick={handleBackroute}
          >
            Cancel
          </CommonOutlinedButton>
          <CommonButton
            sx={{ padding: "10px 20px", borderRadius: "8px" }}
            type="submit"
          >
            Submit
          </CommonButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CustomIDAddTask;
