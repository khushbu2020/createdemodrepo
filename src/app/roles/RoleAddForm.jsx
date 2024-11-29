import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CommonGridTable from "../commonComponent/CommonGridTable";
import CommonInputFiled from "../commonComponent/CommonInputFiled";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";
import CommonButton from "../commonComponent/CommonButton";

const RoleAddForm = ({ handleCloseDialog }) => {
  const columns = [
    {
      field: "roleName",
      headerName: "Access Name",
      width: 894.3,
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
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"28px"}>
      <Stack direction={"column"} spacing={"12px"} mt={"16px"}>
        <Typography>Role Name</Typography>
        <Box
          width={{ lg: "50%", xl: "50%", md: "50%", sm: "100%", xs: "100%" }}
        >
          <CommonInputFiled
            fullWidth
            type="text"
            name="text"
            placeholder="Enter Role name"
          />
        </Box>

        <Box height={"500px"}>
          <CommonGridTable
            rows={rows}
            columns={columns}
            checkboxSelection
            hideFooter={true}
          />
        </Box>
      </Stack>
      <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
        <CommonOutlinedButton onClick={handleCloseDialog}>
          Cancel
        </CommonOutlinedButton>

        <CommonButton
          type="submit"
          sx={{
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Save
        </CommonButton>
      </Stack>
    </Box>
  );
};

export default RoleAddForm;
