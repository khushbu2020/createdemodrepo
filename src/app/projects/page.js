"use client";
import { Box, Button, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonButton from "../commonComponent/CommonButton";
import PlushIconSVG from "../icon/PlushIconSVG";
import CommonGridTable from "../commonComponent/CommonGridTable";
import { useRouter } from "next/navigation";
import CommonDialogBox from "../commonComponent/CommonDialogBox";
import DeleteUserBox from "../user/DeleteUserBox";
import CommonSearchInput from "../commonComponent/CommonSearchIconInput";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const ProjectPage = () => {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    console.log("Project page...");
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

  const handleViewProject = (id) => {
    console.log("Viewing project ID:", id);
    router.push(`/projects/${id}`); // Redirects to the project detail page
  };

  const handleDeleteProject = () => {
    console.log("Deleting project ID:", selectedProjectId);
    // Add deletion logic here (e.g., API call)
    setDialogOpen(false);
    setSelectedProjectId(null);
  };

  const handleAddProject = () => {
    router.push("/addprojectformdata");
  };

  const handleRowClick = (params) => {
    console.log("Row clicked, navigating to /digsite");
    router.push(`/digsite`); // Navigate to the digsite page
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
                handleViewProject(params.row.id); // Call view function directly
              }}
            >
              View
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
      sx={{
        height: "100%",
        bgcolor: "white",
        borderRadius: "8px",
        padding: "24px",
        width: "100%",
      }}
    >
      <Stack height="100%" direction="column" spacing="20px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap={"wrap"}
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
              <CommonSearchInput name="text" />
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
                <CommonSearchInput name="text" />
              </Skeleton>
            </Box>
          )}
          <Box>
            {isLoad ? (
              <CommonButton
                sx={{ borderRadius: "8px", p: "12px 14px", my: "10px" }}
                onClick={handleAddProject}
                startIcon={<PlushIconSVG />}
              >
                Add Project
              </CommonButton>
            ) : (
              <Skeleton
                variant="rectangular"
                sx={{
                  borderRadius: "12px",
                  height: "39px",
                  my: 2,
                }}
              >
                <CommonButton
                  sx={{ borderRadius: "8px", p: "12px 14px", my: "10px" }}
                >
                  Add Project
                </CommonButton>
              </Skeleton>
            )}
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          {isLoad ? (
            <CommonGridTable
              rows={rows}
              columns={columns}
              onRowClick={handleRowClick} // Row click event
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
        content={<DeleteUserBox onDelete={handleDeleteProject} />}
        width="500px"
        aria-hidden={dialogOpen ? false : true}
      />
    </Box>
  );
};

export default ProjectPage;
