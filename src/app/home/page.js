"use client";
import React, { useEffect, useState } from "react";
import CommonButton from "../commonComponent/CommonButton";
import {
  Alert,
  Box,
  IconButton,
  Skeleton,
  Slide,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectBagIcon from "../icon/ProjectBagIcon";
import { space } from "postcss/lib/list";
import TwolineData from "./TwolineData";
import BarchartData from "./BarchartData";
import PieFullchart from "./PieFullchart";
import Piehalfchart from "./Piehalfchart";
import PieValueChart from "./PieValueChart";
import SelectionPage from "./SelectionPage";
import NoData from "./NoData";
import HomeDataGridTable from "./HomeDataGridTable";
import HomeFirstRowdata from "./HomeFirstRowdata";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const HomePage = () => {
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    // console.log("home page...");
    setIsLoad(false);
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);

  return (
    <Box>
      <Stack direction={"column"} spacing={2}>
        <Grid container spacing={2}>
          <HomeFirstRowdata />
        </Grid>

        <Grid container spacing={2}>
          {isLoad ? (
            <Grid
              size={{ xl: 6, lg: 12, md: 12, xs: 12 }}
              bgcolor={"white"}
              height={"537px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <TwolineData />
            </Grid>
          ) : (
            <CommonSkeleton
              height={537}
              sx={{
                width: { xs: "99%", md: "99%", lg: "99%", xl: "49%" },
              }}
            ></CommonSkeleton>
          )}
          {isLoad ? (
            <Grid
              size={{ xl: 3, lg: 6, md: 6, xs: 12 }}
              bgcolor={"white"}
              height={"537px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <PieValueChart />
            </Grid>
          ) : (
            <CommonSkeleton
              height={537}
              // width={"25%"}
              sx={{
                width: { xs: "100%", md: "48%", lg: "49%", xl: "22.5%" },
              }}
            ></CommonSkeleton>
          )}
          {isLoad ? (
            <Grid
              size={{ xl: 3, lg: 6, md: 6, xs: 12 }}
              bgcolor={"white"}
              height={"537px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <Piehalfchart />
            </Grid>
          ) : (
            <CommonSkeleton
              height={537}
              // width={"25%"}
              sx={{
                width: { xs: "100%", md: "48%", lg: "49%", xl: "22.5%" },
              }}
            ></CommonSkeleton>
          )}
        </Grid>

        <Grid container spacing={2}>
          {isLoad ? (
            <Grid
              size={{ xl: 6, lg: 12, md: 12, xs: 12 }}
              bgcolor={"white"}
              height={"537px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <PieFullchart />
            </Grid>
          ) : (
            <CommonSkeleton
              height={537}
              // width={"45%"}
              sx={{
                width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
              }}
            ></CommonSkeleton>
          )}
          {isLoad ? (
            <Grid
              size={{ xl: 6, lg: 12, md: 12, xs: 12 }}
              bgcolor={"white"}
              height={"537px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <BarchartData />
            </Grid>
          ) : (
            <CommonSkeleton
              height={537}
              // width={"45%"}
              sx={{
                width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
              }}
            ></CommonSkeleton>
          )}
        </Grid>

        <Grid container spacing={2}>
          {isLoad ? (
            <Grid
              size={{ xl: 6, lg: 12, md: 12, xs: 12 }}
              bgcolor={"white"}
              height={"537px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <SelectionPage />
            </Grid>
          ) : (
            <CommonSkeleton
              height={537}
              // width={"45%"}
              sx={{
                width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
              }}
            ></CommonSkeleton>
          )}
          {isLoad ? (
            <Grid
              size={{ xl: 6, lg: 12, md: 12, xs: 12 }}
              bgcolor={"white"}
              height={"537px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <Typography fontSize={"20px"} fontWeight={600}>
                Estimated vs. Actual Hours by Project
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={400}
                width={"auto"}
              >
                <NoData />
              </Box>
            </Grid>
          ) : (
            <CommonSkeleton
              height={537}
              // width={"45%"}
              sx={{
                width: { xs: "100%", md: "100%", lg: "100%", xl: "49%" },
              }}
            ></CommonSkeleton>
          )}
        </Grid>

        <Grid container spacing={2}>
          {isLoad ? (
            <Grid
              size={{ xl: 12, lg: 12, md: 12, xs: 12 }}
              bgcolor={"white"}
              height={"1288px"}
              p={"24px"}
              borderRadius={"12px"}
            >
              <HomeDataGridTable />
            </Grid>
          ) : (
            <CommonSkeleton
              height={1288}
              // width={"45%"}
              sx={{
                width: { xs: "99%", md: "99%", lg: "99%", xl: "99%" },
              }}
            ></CommonSkeleton>
          )}
        </Grid>
      </Stack>
    </Box>
  );
};

export default HomePage;
