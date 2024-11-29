"use client";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonButton from "../commonComponent/CommonButton";
import PlushIconSVG from "../icon/PlushIconSVG";
import BackArrowSVG from "../icon/BackArrowSVG";
import FilterIconSVG from "../icon/FilterIconSVG";
import SortingIconSVG from "../icon/SortingIconSVG";
import CommonGridTable from "../commonComponent/CommonGridTable";
import DeleteUserBox from "../user/DeleteUserBox";
import { useRouter } from "next/navigation";
import CommonDialogBox from "../commonComponent/CommonDialogBox";
import DigsiteDeleteData from "./DigsiteDeleteData";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const ProjectDigsite = () => {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    console.log("DigSite page...");
    setIsLoad(false);
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);

  const handleOpenDialog = (id) => {
    setSelectedProjectId(id);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProjectId(null);
  };

  const handleEditeDigsite = (id) => {
    // console.log("Viewing project ID:", id);
    router.push(`/digsite/${id}`); // Redirects to the project detail page
  };

  const handleDeleteDigsite = () => {
    console.log("Deleting project ID:", selectedProjectId);
    // Add deletion logic here (e.g., API call)
    setDialogOpen(false);
    setSelectedProjectId(null);
  };

  const handleAddDigsite = () => {
    router.push("/digsiteadd");
  };

  const handleRowClick = (params) => {
    console.log("Row clicked, navigating to /digsite");
    router.push(`/digsitesection`); // Navigate to the digsite page
  };

  const handleBackroute = () => {
    router.back();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, resizable: false },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "age", headerName: "Age", type: "number", width: 110 },
    {
      field: "fullName",
      headerName: "Full Name",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "ProjectStatus",
      headerName: "Project Status",
      width: 200,
      renderCell: (params) => {
        const status = params.value;
        const cellClass =
          status === "Complete" ? "complete-cell" : "inprogress-cell";
        return <Box className={cellClass}>{params.value}</Box>;
      },
    },
    {
      field: "Action",
      headerName: "",
      width: 400,
      renderCell: (params) => (
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          height="100%"
        >
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                color: "#2B2669",
                borderColor: "#ECEDF0",
                borderRadius: "8px",
                padding: "6px 20px",
                height: "36px",
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click
                handleEditeDigsite(params.row.id); // Call view function directly
              }}
            >
              Edite
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#EE404C",
                borderColor: "#ECEDF0",
                borderRadius: "8px",
                padding: "6px 20px",
                height: "36px",
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click
                handleOpenDialog(params.row.id);
              }}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      ProjectStatus: "Complete",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      ProjectStatus: "Complete",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      ProjectStatus: "Inprogress",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      ProjectStatus: "Complete",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: 25,
      ProjectStatus: "Inprogress",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: "Unknown",
      age: 150,
      ProjectStatus: "Complete",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      ProjectStatus: "Inprogress",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      ProjectStatus: "Inprogress",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      ProjectStatus: "Complete",
    },
  ];

  return (
    <Box
      bgcolor={"white"}
      height="100%"
      width={"100%"}
      p={"24px"}
      borderRadius={"8px"}
    >
      <Stack height="100%" direction={"column"} spacing={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {isLoad ? (
            <>
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
                  Projects list
                </Typography>
              </Box>
              <CommonButton
                sx={{
                  borderRadius: "8px",
                  // my: "10px",
                  p: "12px 14px",
                }}
                startIcon={<PlushIconSVG />}
                onClick={handleAddDigsite}
              >
                Add Digsite
              </CommonButton>
            </>
          ) : (
            <CommonSkeleton
              sx={{
                width: "100%",
                height: "39px",
              }}
            ></CommonSkeleton>
          )}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {isLoad ? (
            <>
              <Typography fontSize={"28px"} fontWeight={600} color="#1A1D1F">
                Digsite{" "}
              </Typography>
              <Stack direction={"row"} spacing={"12px"}>
                <Button
                  variant="outlined"
                  sx={{
                    p: "9px",
                    color: "#6F767E",
                    borderColor: "#ECEDF0",
                    borderRadius: "8px",
                  }}
                  startIcon={<FilterIconSVG />}
                >
                  Filter
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    p: "9px",
                    color: "#6F767E",
                    borderColor: "#ECEDF0",
                    borderRadius: "8px",
                  }}
                  startIcon={<SortingIconSVG />}
                >
                  Sorting
                </Button>
              </Stack>
            </>
          ) : (
            <CommonSkeleton
              sx={{ width: "100%", height: "40px" }}
            ></CommonSkeleton>
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

      <CommonDialogBox
        open={dialogOpen}
        handleClose={handleCloseDialog}
        title=""
        content={<DigsiteDeleteData onDelete={handleDeleteDigsite} />}
        width="500px"
        aria-hidden={dialogOpen ? false : true}
      />
    </Box>
  );
};

export default ProjectDigsite;
