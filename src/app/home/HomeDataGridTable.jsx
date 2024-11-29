"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CommonGridTable from "../commonComponent/CommonGridTable";

const HomeDataGridTable = () => {
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
    <Stack height={"100%"} spacing={3} direction={"column"}>
      <Typography fontSize={"20px"} fontWeight={600}>
        Overdue Project Details
      </Typography>
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <CommonGridTable rows={rows} columns={columns} />
      </Box>
    </Stack>
  );
};

export default HomeDataGridTable;
