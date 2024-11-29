"use client";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import BackArrowSVG from "../icon/BackArrowSVG";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";
import CommonCheckBox from "../commonComponent/CommonCheckBox";

const CustomJobSectionList = () => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };
  const handelAddTask = (id) => {
    router.push(`/customjobsectionlist/${id}`);
  };

  const TaskList = [
    {
      id: "1",
      name: "Task 1",
    },
    {
      id: "2",
      name: "Task 2",
    },
    {
      id: "3",
      name: "Task 3",
    },
    {
      id: "4",
      name: "Task 4",
    },
    {
      id: "5",
      name: "Task 5",
    },
    {
      id: "6",
      name: "Task 6",
    },
    {
      id: "7",
      name: "Task 7",
    },
    {
      id: "8",
      name: "Task 8",
    },
  ];
  const [dataList, setdataList] = useState(TaskList);
  const handleView = () => {
    router.push(`/customjoblistview`);
  };
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <Box
        borderRadius={"12px"}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "24px 24px 22px 24px",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"start"}
            gap={"14px"}
            alignItems={"center"}
          >
            <IconButton onClick={handleBackroute}>
              <BackArrowSVG />
            </IconButton>
            <Typography fontWeight={600} fontSize={"16px"}>
              Prelim Inspection
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={"20px"} alignItems={"center"}>
            <Box display={"flex"} gap={3}>
              <Typography fontWeight={500} fontSize={"12px"} color="#33383F">
                {/* id */}
              </Typography>
              <Typography fontWeight={500} fontSize={"11px"} color="#33383F">
                {/* time */}
              </Typography>

              <Typography fontWeight={500} fontSize={"12px"} color="#33383F">
                {/* file */}
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Divider />
        <Stack p={"23px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"16px"}
          >
            <Typography fontWeight={600} fontSize={"20px"} color="#000000">
              1. Initial Site Assessment
            </Typography>
            <Stack direction={"row"} spacing={"10px"}>
              <CommonOutlinedButton
                onClick={() => handelAddTask(1)}
                sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
              >
                Add Task
              </CommonOutlinedButton>
              <CommonOutlinedButton onClick={handleView}>
                View
              </CommonOutlinedButton>
            </Stack>
          </Box>

          <Box
            height={"auto"}
            border={"1px solid #ECEDF0"}
            borderRadius={"12px"}
          >
            {dataList.map((list, idx) => (
              <React.Fragment key={list.id}>
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
        </Stack>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            2. Security
          </Typography>
          <Stack direction={"row"} spacing={"10px"}>
            <CommonOutlinedButton
              onClick={() => handelAddTask(2)}
              sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
            >
              Add Task
            </CommonOutlinedButton>
            <CommonOutlinedButton onClick={handleView}>
              View
            </CommonOutlinedButton>
          </Stack>
        </Box>
        <Box height={"auto"} border={"1px solid #ECEDF0"} borderRadius={"12px"}>
          {dataList.map((list, idx) => (
            <React.Fragment key={list.id}>
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

      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            3. Ground Disturbance & Permitting
          </Typography>
          <Stack direction={"row"} spacing={"10px"}>
            <CommonOutlinedButton
              onClick={() => handelAddTask(3)}
              sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
            >
              Add Task
            </CommonOutlinedButton>
            <CommonOutlinedButton onClick={handleView}>
              View
            </CommonOutlinedButton>
          </Stack>
        </Box>
        <Box height={"auto"} border={"1px solid #ECEDF0"} borderRadius={"12px"}>
          {dataList.map((list, idx) => (
            <React.Fragment key={list.id}>
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
    </Box>
  );
};

export default CustomJobSectionList;
