import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const TabOneData = () => {
  return (
    <Box mt={"29px"} ml={"24px"} height={"100%"}>
      <Stack direction={"column"} spacing={"32px"}>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Project Number
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : BD-PJ-000693
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Project Status
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : Active
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Project Manager
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : John smith
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Construction
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : Residential construction
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Integrity Engineer
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : William smith
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Start Date
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : 2 Apr 2024
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Deadline
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : 2 Jun 2024
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              P.O
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : Standard Purchase Orders
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              A.F.E
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={500} fontSize={"16px"} color="#6F767E">
              : Operated AFE
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
              Description
            </Typography>{" "}
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 4, sm: 12 }}>
            <Typography
              fontWeight={500}
              fontSize={"16px"}
              color="#6F767E"
              textAlign={"justify"}
            >
              : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ultrices, justo in consequat lacinia, tellus purus
              bibendum ex, eu suscipit sem arcu ut justo.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default TabOneData;
