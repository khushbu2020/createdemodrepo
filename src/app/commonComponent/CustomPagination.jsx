// CustomPagination.js
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const CustomPagination = ({
  page,
  setPage,
  pageSize,
  setPageSize,
  rowCount,
}) => {
  const totalPages = Math.ceil(rowCount / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleChangePage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
      <Button onClick={() => handleChangePage(page - 1)} disabled={page === 0}>
        {"<"}
      </Button>
      <Stack direction="row" spacing={1}>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            variant={number - 1 === page ? "contained" : "outlined"}
            onClick={() => handleChangePage(number - 1)}
          >
            {number}
          </Button>
        ))}
      </Stack>
      <Button
        onClick={() => handleChangePage(page + 1)}
        disabled={page >= totalPages - 1}
      >
        {">"}
      </Button>
    </Box>
  );
};

export default CustomPagination;
