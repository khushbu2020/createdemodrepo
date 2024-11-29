"use client";
import CommonButton from "@/app/commonComponent/CommonButton";
import CommonInputFiled from "@/app/commonComponent/CommonInputFiled";
import CommonOutlinedButton from "@/app/commonComponent/CommonOutlinedButton";
import BackArrowSVG from "@/app/icon/BackArrowSVG";
import ImagePlushSVG from "@/app/icon/ImagePlushSVG";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import React from "react";
import EditIconSVG from "../icon/EditIconSVG";

const PipelineintegrityUploadPage = () => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };
  const id = 123;
  const handleEdite = (id) => {
    router.push(`/pipelineintegrity/${id}`);
  };
  return (
    <Box bgcolor={"white"} height="100%" width={"100%"} borderRadius={"8px"}>
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: "24px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
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
              User List
            </Typography>
          </Box>
          <Button
            variant={"outlined"}
            sx={{
              color: "#6F767E",
              borderColor: "#ECEDF0",
              borderRadius: "8px",
              padding: "12px 16px",
              height: "42px",

              fontWeight: 600,
              fontSize: "14px",
            }}
            endIcon={<EditIconSVG />}
            onClick={() => handleEdite(id)}
          >
            Edit
          </Button>
        </Box>
        <Typography fontWeight={600} fontSize={"28px"}>
          Pressure Restriction
        </Typography>
        <Divider />
        <Box display={"flex"} flexDirection={"column"} gap={"34px"}>
          <Box
            height={"282px"}
            width={"351px"}
            border={"1px solid #FAFAFA"}
            bgcolor={"#FAFAFA"}
            borderRadius={"12px"}
          ></Box>
          <Stack direction={"column"} spacing={"32px"}>
            <Grid container spacing={2}>
              <Grid size={{ lg: 2, md: 4, sm: 12, xs: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  Date :
                </Typography>
              </Grid>
              <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#6F767E">
                  {" "}
                  12 Jun,2024 | 12:27 PM
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ lg: 2, md: 4, sm: 12, xs: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  Assignee :
                </Typography>
              </Grid>
              <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#6F767E">
                  {" "}
                  John smith
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ lg: 2, md: 4, sm: 12, xs: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  Note :
                </Typography>
              </Grid>
              <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#6F767E">
                  {" "}
                  Civil Contractor Superintendent
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PipelineintegrityUploadPage;
