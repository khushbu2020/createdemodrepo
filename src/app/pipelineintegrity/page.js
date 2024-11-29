"use client";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BackArrowSVG from "../icon/BackArrowSVG";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid2";
import TickCircleSVG from "../icon/TickCircleSVG";
import CardImageSVG from "../icon/CardImageSVG";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const PipelineIntegrityPage = () => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };

  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    setIsLoad(false);

    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);
  const datacollection = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];
  const [cardData, setcardData] = useState(datacollection);

  const handleOnAddPage = (id) => {
    router.push(`/pipelineintegrity/${id}`);
  };

  return (
    <Box bgcolor={"white"} height="100%" width={"100%"} borderRadius={"8px"}>
      <Stack
        height="100%"
        sx={{ overflowY: "scroll" }}
        direction={"column"}
        spacing={2}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          p={"24px 24px 0px 24px"}
          alignItems={"center"}
        >
          {isLoad ? (
            <>
              <IconButton onClick={handleBackroute}>
                <BackArrowSVG />
              </IconButton>
              <Typography fontWeight={600} fontSize={"16px"}>
                Section
              </Typography>
            </>
          ) : (
            <CommonSkeleton
              height={32}
              sx={{ pr: "24px" }}
              width={"50%"}
            ></CommonSkeleton>
          )}
        </Box>
        <Box p={"0px 24px 0px 24px"}>
          {isLoad ? (
            <Typography color="#1A1D1F" fontSize={"28px"} fontWeight={600}>
              Pipeline Integrity Step
            </Typography>
          ) : (
            <CommonSkeleton height={41} width={"100%"}></CommonSkeleton>
          )}
        </Box>
        <Divider />
        <Grid container spacing={3} padding={"20px 23px"}>
          {cardData.map((data, idx) =>
            isLoad ? (
              <Grid
                key={data.id}
                size={{ xl: 3, lg: 4, md: 6, sm: 12, xs: 12 }}
                border={"1.6px solid #ECEDF0"}
                borderRadius={"10.93px"}
                padding={"16px"}
              >
                <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                  <Stack direction={"row"} spacing={"8px"}>
                    <TickCircleSVG />
                    <Typography
                      fontWeight={400}
                      fontSize={"14px"}
                      color="#000000"
                    >
                      Initial Assessment
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      height: "207px",
                      border: "1.4px dashed #DBDBDB",
                      bgcolor: "#FBFBFB",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardImageSVG />
                  </Box>
                  <Typography
                    fontSize={"13px"}
                    fontWeight={400}
                    color="#6F767E"
                  >
                    {/* Understanding of a learner's level of confidence and ability
                  prior to beginning the course. */}
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Stack direction={"row"} gap={1}>
                      <Avatar
                        alt="Profile Image"
                        src="/avtarperson.svg"
                        sx={{ height: 24, width: 24 }}
                      ></Avatar>
                      {/* <Avatar
         alt="Profile Image"
         sx={{ height: 24, width: 24, bgcolor: currentColor, p: 2 }}
       >
         JS
       </Avatar> */}

                      <Typography
                        fontWeight={500}
                        fontSize={"14px"}
                        color="#6F767E"
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        {/* John Smith */}
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
                      onClick={() => handleOnAddPage(data.id)}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ) : (
              <CommonSkeleton
                key={idx}
                height={350}
                sx={{
                  width: {
                    xl: "23.3%",
                    lg: "30.7%",
                    md: "47%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              ></CommonSkeleton>
            )
          )}
        </Grid>
      </Stack>
    </Box>
  );
};

export default PipelineIntegrityPage;
