"use client";
import {
  Box,
  Button,
  InputAdornment,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIconSVG from "../icon/SearchIconSVG";
import CommonButton from "../commonComponent/CommonButton";
import PlushIconSVG from "../icon/PlushIconSVG";
import CommonGridTable from "../commonComponent/CommonGridTable";
import { useRouter } from "next/navigation";
import RoleAddForm from "./RoleAddForm";
import CommonDialogBox from "../commonComponent/CommonDialogBox";
import CommonSearchInput from "../commonComponent/CommonSearchIconInput";
import { Margin } from "@mui/icons-material";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const RolesPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    // console.log("Role page...");
    setIsLoad(false);
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);
  const columns = [
    // { field: "id", headerName: "ID", width: 90, resizable: false },
    {
      field: "roleName",
      headerName: "Select Access",
      width: 1000,
    },
  ];

  const rows = [
    {
      id: 1,
      roleName: "Super Admin",
    },
    {
      id: 2,
      roleName: "Client Account Manager",
    },
    {
      id: 3,
      roleName: "Environmental Manager",
    },
    {
      id: 4,
      roleName: "Technical Manager ( Engineering Services)",
    },
    {
      id: 5,
      roleName: "Land Department Agent",
    },
    {
      id: 6,
      roleName: "Health and Safety Inspector",
    },
    {
      id: 7,
      roleName: "Project Manager",
    },
    {
      id: 8,
      roleName: "Construction Manager",
    },
    {
      id: 9,
      roleName: "Civil Contractor Superintendent",
    },
    {
      id: 10,
      roleName: "PINDE Project Manager",
    },
    {
      id: 11,
      roleName: "PINDE Field Inspectors",
    },
    {
      id: 12,
      roleName: "PINDE Technicians",
    },
  ];

  const router = useRouter();
  const handleRowClick = (params) => {
    console.log("Row clicked", params.id);
    const { id, roleName } = params.row;
    router.push(`/roles/${id}`);
  };

  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "white",
        borderRadius: "8px",
        padding: "24px",
        width: "100%",
      }}
    >
      <Stack height="100%" direction={"column"} spacing={"20px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          {isLoad ? (
            <Box
              width={{
                xl: "354px",
                md: "354px",
                lg: "354px",
                sm: "100%",
                xs: "100%",
              }}
            >
              <CommonSearchInput name={"text"} />
            </Box>
          ) : (
            <Box
              width={{
                xl: "354px",
                md: "354px",
                lg: "354px",
                sm: "100%",
                xs: "100%",
              }}
            >
              <Skeleton
                variant="rectangular"
                width={"100%"}
                sx={{ borderRadius: "10px" }}
              >
                <CommonSearchInput name={"text"} />
              </Skeleton>
            </Box>
          )}

          {isLoad ? (
            <CommonButton
              sx={{
                borderRadius: "8px",

                p: "12px 14px",
                mt: "10px",
              }}
              onClick={handleOpenDialog}
            >
              Add Project
            </CommonButton>
          ) : (
            <Skeleton
              variant="rectangular"
              sx={{ borderRadius: "12px", height: "39px", my: 2 }}
            >
              <CommonButton
                sx={{
                  borderRadius: "8px",

                  p: "12px 14px",
                  mt: "10px",
                }}
                startIcon={<PlushIconSVG />}
                onClick={handleOpenDialog}
              >
                Add Role
              </CommonButton>
            </Skeleton>
          )}
        </Box>
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          {isLoad ? (
            <CommonGridTable
              rows={rows}
              columns={columns}
              onRowClick={handleRowClick}
              hideFooter={true}
            />
          ) : (
            <CommonSkeleton
              sx={{
                width: "100%",
                height: "100%",
              }}
            ></CommonSkeleton>
          )}
        </Box>
      </Stack>

      {/* Common DialogBox */}

      <CommonDialogBox
        open={dialogOpen}
        handleClose={handleCloseDialog}
        title="Role List"
        content={<RoleAddForm handleCloseDialog={handleCloseDialog} />}
        width="1000px" // Set custom width here
        aria-hidden={dialogOpen ? false : true}
      />
    </Box>
  );
};

export default RolesPage;
