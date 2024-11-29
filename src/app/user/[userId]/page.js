"use client";
import BackArrowSVG from "@/app/icon/BackArrowSVG";
import EditIconSVG from "@/app/icon/EditIconSVG";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import SwitchComponent from "../SwitchComponent";
import CommonDialogBox from "@/app/commonComponent/CommonDialogBox";
import CommonButton from "@/app/commonComponent/CommonButton";
import UserEditForm from "../UserEditForm";
import CommonSwitchToggle from "@/app/commonComponent/CommonSwitchToggle";

const UserIDPage = ({ params }) => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
    // router.push("/user");
  };
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleToggleChange = (event) => {
    setIsActive(event.target.checked); // Update toggle state
  };
  return (
    <Box
      bgcolor={"white"}
      height="100%"
      width={"100%"}
      borderRadius={"8px"}
      sx={{ overflowY: "scroll" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        gap={"26px"}
        p={"24px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
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
            onClick={handleOpenDialog}
            endIcon={<EditIconSVG />}
          >
            Edit
          </Button>
        </Box>

        <Stack direction={"column"} spacing={"14px"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography fontWeight={600} fontSize={"28px"} lineHeight={"32px"}>
              User details : {params.userId}
            </Typography>
          </Box>
          <Divider />
          <Stack direction={"column"} spacing={"32px"}>
            <Grid container>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  First Name :
                </Typography>{" "}
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#6F767E">
                  John
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  Last Name :
                </Typography>{" "}
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#6F767E">
                  Smith
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  Email Address :
                </Typography>{" "}
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#6F767E">
                  johnsmith@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  Role :
                </Typography>{" "}
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#6F767E">
                  Civil Contractor Superintendent
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <Typography fontWeight={600} fontSize={"16px"} color="#1A1D1F">
                  Status :
                </Typography>{" "}
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 2, xl: 4, sm: 12 }}>
                <CommonSwitchToggle
                  checked={isActive} // Pass the toggle state
                  onChange={handleToggleChange} // Handle state changes
                />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Box>

      {/* dialog Box Container */}
      <CommonDialogBox
        open={dialogOpen}
        handleClose={handleCloseDialog}
        title="User details"
        content={<UserEditForm />}
        width="800px" // Set custom width here
        aria-hidden={dialogOpen ? false : true}
      />
    </Box>
  );
};

export default UserIDPage;
