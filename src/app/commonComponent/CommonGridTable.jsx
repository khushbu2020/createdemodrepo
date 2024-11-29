"use client";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useMediaQuery } from "@mui/material";

const CommonGridTable = ({
  columns,
  rows,
  pageSize = [5, 10, 15, 20, 25, 30],
  onRowClick,
  checkboxSelection = false,
  hideFooter = false,
  sx = {},
}) => {
  const paginationModel = { page: 0, pageSize: 10 };
  const getRowClassName = (params) => {
    return params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd";
  };

  const isLargeScreen = useMediaQuery("(min-width: 1280px)"); // lg and xl
  const isMediumScreen = useMediaQuery("(min-width: 960px)"); // md

  const rowHeight = isLargeScreen ? 84 : isMediumScreen ? 50 : 40;

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        fontSize: "14px",
        fontWeight: 500,
        color: "#6F767E",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={checkboxSelection}
        // initialState={{ pagination: { paginationModel } }}
        initialState={{ pagination: { paginationModel } }}
        disableRowSelectionOnClick
        pageSizeOptions={pageSize}
        getRowClassName={getRowClassName}
        rowHeight={rowHeight}
        onRowClick={onRowClick}
        hideFooter={hideFooter}
        sx={{
          "& .MuiDataGrid-row": {
            cursor: onRowClick ? "pointer" : "default",
          },

          "& .MuiDataGrid-columnHeader": {
            color: "#2B2669",
            fontWeight: 500,
            fontSize: "15px",
            // bgcolor: "#F8F9FC",
            bgcolor: "white",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
            boxShadow: "none",
          },
          // Optional: Remove focus outline from the header
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "& .MuiDataGrid-cell button:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          ...sx,
        }}
      />
    </Box>
  );
};

export default CommonGridTable;
