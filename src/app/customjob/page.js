"use client";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  LinearProgress,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import BackArrowSVG from "../icon/BackArrowSVG";
import personSvg from "../../../public/image/person.svg";
import CommonButton from "../commonComponent/CommonButton";
import PlushIconSVG from "../icon/PlushIconSVG";
import CommonCheckBox from "../commonComponent/CommonCheckBox";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";
import { useLoad } from "../contexts/LoadingContext";
import { Island_Moments } from "next/font/google";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const CustomJobPage = () => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };

  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
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

  const handleonPreliminSectionPage = () => {
    router.push("/preliminspection");
  };

  const handleonPipelineIntigrityPage = () => {
    router.push("/pipelineintegrity");
  };

  const [cardData, setcardData] = useState(datacollection);

  const handleAddPage = () => {
    router.push(`/customjobaddtask`);
  };

  const handleEdite = (id) => {
    router.push(`/customjob/${id}`);
  };
  return (
    <Box
      bgcolor={"white"}
      height={"100%"}
      width={"100%"}
      borderRadius={"8px"}
      sx={{ overflowY: "scroll" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
        }}
      >
        <Box display={"flex"} flexDirection={"column"} flexGrow={1} gap={2}>
          {isLoad ? (
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
                Custom Project
              </Typography>
            </Box>
          ) : (
            <CommonSkeleton height={39} width={"25%"}></CommonSkeleton>
          )}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {isLoad ? (
              <>
                <Typography color="#1A1D1F" fontSize={"28px"} fontWeight={600}>
                  Custom Job
                </Typography>
                <CommonButton
                  sx={{ borderRadius: "8px", p: "12px 14px" }}
                  startIcon={<PlushIconSVG />}
                  onClick={handleAddPage}
                >
                  Add Job
                </CommonButton>
              </>
            ) : (
              <CommonSkeleton width={"100%"} height={41}></CommonSkeleton>
            )}
          </Box>
          <Divider />
          <Grid container spacing={3}>
            {cardData.map((data, idx) =>
              isLoad ? (
                <Grid
                  key={data.id}
                  size={{ xl: 4, lg: 6, md: 12, sm: 12, xs: 12 }}
                  border={"1.6px solid #ECEDF0"}
                  borderRadius={"14px"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                    p={"8px"}
                  >
                    <Box
                      sx={{
                        height: "272px",
                        borderRadius: "10px",
                        backgroundImage: `url(${data.jobImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        mx={"16px"}
                      >
                        <CommonCheckBox />
                        <Typography fontWeight={600} fontSize={"15px"}>
                          {data.jobName}
                        </Typography>
                      </Box>
                      <CommonOutlinedButton
                        sx={{ height: "32px" }}
                        onClick={() => handleEdite(data.id)}
                      >
                        Edite
                      </CommonOutlinedButton>
                    </Box>
                  </Box>
                </Grid>
              ) : (
                <CommonSkeleton
                  key={idx}
                  height={341}
                  sx={{ width: { xl: "30.1%", lg: "47%", md: "99%" } }}
                ></CommonSkeleton>
              )
            )}
          </Grid>
        </Box>
        <Stack direction={"row"} spacing={2} justifyContent={"flex-end"} mt={2}>
          {isLoad ? (
            <CommonOutlinedButton
              sx={{
                padding: "10px 20px",
                borderRadius: "8px",
              }}
              onClick={handleBackroute}
            >
              Cancel
            </CommonOutlinedButton>
          ) : (
            <Skeleton variant="rectangular" sx={{ borderRadius: "12px" }}>
              <CommonOutlinedButton
                sx={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                }}
                onClick={handleBackroute}
              >
                Cancel
              </CommonOutlinedButton>
            </Skeleton>
          )}
          {isLoad ? (
            <CommonButton
              sx={{ padding: "10px 20px", borderRadius: "8px" }}
              type="submit"
            >
              Submit
            </CommonButton>
          ) : (
            <Skeleton variant="rectangular" sx={{ borderRadius: "12px" }}>
              {" "}
              <CommonButton
                sx={{ padding: "10px 20px", borderRadius: "8px" }}
                type="submit"
              >
                Submit
              </CommonButton>
            </Skeleton>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomJobPage;
