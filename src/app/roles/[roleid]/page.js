"use client";
import CommonGridTable from "@/app/commonComponent/CommonGridTable";
import BackArrowSVG from "@/app/icon/BackArrowSVG";
import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const RolesAccess = ({ params }) => {
  const router = useRouter();
  const handleBackroute = () => {
    router.push("/roles");
  };
  const columns = [
    {
      field: "roleName",
      headerName: "Access Name",
      width: 900,
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
    <Box
      bgcolor={"white"}
      height="100%"
      width={"100%"}
      p={"24px"}
      borderRadius={"8px"}
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
          Role List (id:{params.roleid})
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, overflow: "auto" }} height={"90%"} mt={"26px"}>
        <CommonGridTable
          rows={rows}
          columns={columns}
          checkboxSelection
          hideFooter={true}
        />
      </Box>
    </Box>
  );
};

export default RolesAccess;
