"use client";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import BackArrowSVG from "../icon/BackArrowSVG";
import personSvg from "../../../public/image/person.svg";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const DigSiteSection = () => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    console.log("DigSite-Section page...");
    setIsLoad(false); // Reset loading state

    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);

  const datacollection = [
    {
      id: 1,
      sectionName: "Prelim Inspection",
      status: "Progressing...",
      date: "12 Jan, 2024",
      time: "12:27 PM",
      sectionImage: "/PrelimInspection.png",
      progress: 54,

      personImage: "./image/person.svg",
      personaName: "John smith",
    },
    {
      id: 2,
      sectionName: "Pipeline Integrity",
      status: "Progressing...",
      date: "12 Jan, 2024",
      time: "12:27 PM",
      sectionImage: "/PipelineIntegrity.png",
      progress: 54,
      personImage: "./image/person.svg",
      personaName: "John smith",
    },
  ];

  const handleonPreliminSectionPage = () => {
    router.push("/preliminspection");
  };

  const handleonPipelineIntigrityPage = () => {
    router.push("/pipelineintegrity");
  };

  const [cardData, setcardData] = useState(datacollection);
  return (
    <Box
      bgcolor={"white"}
      height={"100%"}
      width={"100%"}
      sx={{ overflowY: "scroll" }}
      borderRadius={"8px"}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "24px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          alignItems={"center"}
        >
          {isLoad ? (
            <>
              <IconButton onClick={handleBackroute}>
                <BackArrowSVG />
              </IconButton>
              <Typography fontWeight={600} fontSize={"16px"}>
                Digsite
              </Typography>
            </>
          ) : (
            <CommonSkeleton width={"100%"} height={39}></CommonSkeleton>
          )}
        </Box>
        <Box>
          {isLoad ? (
            <Typography color="#1A1D1F" fontSize={"28px"} fontWeight={600}>
              Sections
            </Typography>
          ) : (
            <CommonSkeleton width={"100%"} height={40}></CommonSkeleton>
          )}
        </Box>
        <Divider />
        <Grid container spacing={3} padding={"0px 24px"}>
          {cardData.map((data, idx) =>
            isLoad ? (
              <Grid
                key={data.id}
                size={{ xl: 4, lg: 6, md: 12, sm: 12, xs: 12 }}
                border={"1.6px solid #ECEDF0"}
                borderRadius={"10.93px"}
                padding={"16px"}
              >
                <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography
                      fontSize={"18px"}
                      fontWeight={600}
                      color="#000000"
                    >
                      {data.sectionName}
                    </Typography>

                    <Typography
                      color="#6F767E"
                      fontSize={"12px"}
                      fontWeight={500}
                    >
                      {data.date} | {data.time}
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
                    <Box
                      sx={{
                        backgroundImage: `url(${data.sectionImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "300px",
                        borderRadius: "10.92px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (data.id === 1) {
                          handleonPreliminSectionPage();
                        } else if (data.id === 2) {
                          handleonPipelineIntigrityPage();
                        }
                      }}
                    ></Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"14px"}>
                      <Stack direction={"column"} gap={"11px"}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography>{data.status}</Typography>
                          <Typography>{data.progress}%</Typography>
                        </Box>
                        <Typography>
                          <LinearProgress
                            variant="determinate"
                            value={data.progress}
                            sx={{
                              borderRadius: "8px",
                              height: "6px",
                              backgroundColor: "#ECEDF0",
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: "green",
                                borderRadius: "8px",
                              },
                            }}
                          />
                        </Typography>
                      </Stack>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Stack direction={"row"} gap={1}>
                          <Avatar
                            alt="Profile Image"
                            // src={"./image/person.svg"}
                            src={data.personImage}
                            sx={{ width: 26, height: 26 }}
                          />

                          <Typography
                            fontWeight={500}
                            fontSize={"14px"}
                            color="#6F767E"
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            {data.personaName}
                          </Typography>
                        </Stack>
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#2B2669",
                            borderColor: "#ECEDF0",
                            borderRadius: "8px",
                            padding: "4px 20px",
                            height: "32px",
                          }}
                          onClick={() => {
                            if (data.id === 1) {
                              handleonPreliminSectionPage();
                            } else if (data.id === 2) {
                              handleonPipelineIntigrityPage();
                            }
                          }}
                        >
                          Edit
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ) : (
              <CommonSkeleton
                key={idx}
                sx={{
                  width: { xl: "31.5%", lg: "47%", md: "99%" },
                  height: { lg: 479, md: 479 },
                }}
              ></CommonSkeleton>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default DigSiteSection;
