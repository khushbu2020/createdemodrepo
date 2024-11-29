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
import CommonGridTable from "../commonComponent/CommonGridTable";
import LoginIconSVG from "../icon/LoginIconSVG";
import ImpersonaData from "./ImpersonaData";
import CommonDialogBox from "../commonComponent/CommonDialogBox";
import { useRouter } from "next/navigation";
import CommonSearchInput from "../commonComponent/CommonSearchIconInput";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";
const ImpersonaPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const router = useRouter();
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    setIsLoad(false);

    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);

  const handleOpenDialog = (id) => {
    setSelectedUserId(id);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedUserId(null);
  };

  const handleRowClick = (params) => {
    console.log("Row clicked", params.id);
    const { id } = params.row;
    router.push(`/user/${id}`);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90, resizable: false },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
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
        let cellClass = "";

        if (status === "Complete") {
          cellClass = "complete-cell";
        } else if (status === "Inprogress") {
          cellClass = "inprogress-cell";
        }

        return (
          <Box component={"div"} className={cellClass}>
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "",
      width: 200,
      renderCell: (params) => (
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          height="100%"
        >
          <Box textAlign={"end"}>
            <Button
              // key={`edit-${params.row.id}`}
              variant={"outlined"}
              sx={{
                color: "#2B2669",
                borderColor: "#ECEDF0",
                borderRadius: "8px",
                padding: "6px 14px",
                height: "36px",
                fontWeight: 500,
                fontSizez: "14px",
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent row click event
                handleOpenDialog(params.row.id);
              }}
              endIcon={<LoginIconSVG />}
            >
              Login
            </Button>
          </Box>
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
    {
      id: 10,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      ProjectStatus: "Complete",
    },
    {
      id: 12,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      ProjectStatus: "Complete",
    },
    {
      id: 13,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      ProjectStatus: "Inprogress",
    },
    {
      id: 14,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      ProjectStatus: "Complete",
    },
    {
      id: 15,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: 25,
      ProjectStatus: "Inprogress",
    },
    {
      id: 16,
      lastName: "Melisandre",
      firstName: "Unknown",
      age: 150,
      ProjectStatus: "Complete",
    },
    {
      id: 17,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      ProjectStatus: "Inprogress",
    },
    {
      id: 18,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      ProjectStatus: "Inprogress",
    },
    {
      id: 19,
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
      <Stack height="100%" direction={"column"} spacing={"20px"}>
        <Box
          width={{
            xl: "354px",
            md: "354px",
            lg: "354px",
            sm: "100%",
            xs: "100%",
          }}
        >
          {isLoad ? (
            <CommonSearchInput name="text" />
          ) : (
            <CommonSkeleton height={43} width={"100%"}></CommonSkeleton>
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
                width: { xs: "99%", md: "99%", lg: "99%", xl: "99%" },
                height: "99%",
              }}
            ></CommonSkeleton>
          )}
        </Box>
      </Stack>

      <CommonDialogBox
        open={dialogOpen}
        handleClose={handleCloseDialog}
        title="Delete User"
        content={<ImpersonaData userId={selectedUserId} />}
        width="500px" // Set custom width here
        aria-hidden={dialogOpen ? false : true}
      />
    </Box>
  );
};

export default ImpersonaPage;
