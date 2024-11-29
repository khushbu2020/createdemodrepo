"use client";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import BackArrowSVG from "../../icon/BackArrowSVG";
import { useRouter } from "next/navigation";
import ImagePlushSVG from "../../icon/ImagePlushSVG";
import CommonInputFiled from "../../commonComponent/CommonInputFiled";
import CommonCheckBox from "../../commonComponent/CommonCheckBox";
import CommonButton from "../../commonComponent/CommonButton";
import { useColor } from "../../contexts/ColorProvider";
import CommonOutlinedButton from "../../commonComponent/CommonOutlinedButton";
import GalleryIconSVG from "@/app/icon/GalleryIconSVG";
import Image from "next/image";
const CustomJobIdPage = ({ params }) => {
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
    {
      id: 7,
      name: "Task 7",
      status: "completed",
    },
    {
      id: 8,
      name: "Task 8",
      status: "pending",
    },
  ];
  const datacollection = [
    {
      id: 1,
      jobName: "TOR (Thread-O-Ring) Installation",
      jobImage: "/TOR.png",
    },
    {
      id: 2,
      jobName: "Pipeline Replacement (Cut-Out)",
      jobImage: "/Pipeline.png",
    },
    {
      id: 3,
      jobName: "CAD Weld Installation",
      jobImage: "/CAD.png",
    },
  ];
  const findimage = datacollection.find(
    (data) => data.id === parseInt(params.customjobId)
  );
  const [dataList, setdataList] = useState(listdata);
  const { currentColor } = useColor();
  let defaultThemeURL = "/wallpaper.png";
  const [file, setfile] = useState(
    findimage ? findimage.jobImage : defaultThemeURL
  );
  const getFile = (e) => {
    setfile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Box bgcolor={"white"} height="100%" width={"100%"} borderRadius={"8px"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        sx={{ overflowY: "scroll" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"100%"}
          gap={"20px"}
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
              Add Job
            </Typography>
          </Box>
          <Divider />
          <Box p={"0px 24px"}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
                <Box display={"flex"} flexDirection={"column"} gap={"18px"}>
                  <Box
                    sx={{
                      backgroundImage: `url(${file})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "400px",

                      borderRadius: "10.92px",
                      cursor: "pointer",

                      position: "relative",
                    }}
                  >
                    <Image
                      src={file}
                      alt="loginpageImage"
                      fill
                      style={{
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                      // sizes="(max-width: 230px) 230vw, (max-width: 692px) 692vw, 33vw"
                      priority
                    />
                    <Box
                      height={"36px"}
                      width={"103px"}
                      borderRadius={"8px"}
                      bgcolor={"#FFFFFF"}
                      position={"absolute"}
                      bottom={"16px"}
                      right={"16px"}
                    >
                      <Button
                        variant="text"
                        component="label"
                        endIcon={<GalleryIconSVG />}
                        color="#2B2669"
                      >
                        Upload
                        <input
                          accept="image/*"
                          onChange={getFile}
                          hidden
                          type="file"
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
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
        </Box>
      </Box>
      {/* <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        sx={{ overflowY: "scroll" }}
      >
        <Box display={"flex"} flexDirection={"column"} >
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
              Add Job
            </Typography>
          </Box>
          <Divider />
          <Box p={"0px 24px 24px 24px"}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
                <Box display={"flex"} flexDirection={"column"} gap={"18px"}>
                  <Box
                    sx={{
                      backgroundImage: `url(${file})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "400px",

                      borderRadius: "10.92px",
                      cursor: "pointer",
                      my: "24px",
                      position: "relative",
                    }}
                  >
                    <Box
                      height={"36px"}
                      width={"103px"}
                      borderRadius={"8px"}
                      bgcolor={"#FFFFFF"}
                      position={"absolute"}
                      bottom={"16px"}
                      right={"16px"}
                    >
                      <Button
                        variant="text"
                        component="label"
                        endIcon={<GalleryIconSVG />}
                        color="#2B2669"
                      >
                        Upload
                        <input
                          accept="image/*"
                          onChange={getFile}
                          hidden
                          type="file"
                        />
                      </Button>
                    </Box>
                  </Box>

                  <Typography
                    fontWeight={600}
                    fontSize={"16px"}
                    lineHeight={"24px"}
                    color="#6F767E"
                  >
                    Job Name
                  </Typography>
                  <CommonInputFiled
                    type={"text"}
                    placeholder={"Enter job name"}
                    name={"themetitle"}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} my={"24px"}>
              <Grid size={12}>
                <Box
                  border={"1px solid #ECEDF0"}
                  borderRadius={"12px"}
                  height="468px"
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
                        width: "50%",
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
                  <Box p={"12px"} height={"337px"} sx={{ overflowY: "scroll" }}>
                    {dataList.map((list, idx) => (
                      <React.Fragment key={idx}>
                        <Box p={"12px"}>
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
              </Grid>
            </Grid>
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
      </Box> */}
    </Box>
  );
};

export default CustomJobIdPage;
