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
import CommonButton from "../commonComponent/CommonButton";
import PlushIconSVG from "../icon/PlushIconSVG";
import SearchIconSVG from "../icon/SearchIconSVG";
import CommonGridTable from "../commonComponent/CommonGridTable";
import { useRouter } from "next/navigation";
import DeleteUserBox from "./DeleteUserBox";
import CommonDialogBox from "../commonComponent/CommonDialogBox";
import UserEditForm from "./UserEditForm";
import CommonSearchInput from "../commonComponent/CommonSearchIconInput";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";
const UserPage = () => {
  const route = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpen2, setDialogOpen2] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null); // Track the user ID to be deleted
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    console.log("Project page...");
    setIsLoad(false);
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);
  // const handleOpenDialog = (idx) => {
  //   setSelectedUserId(idx);
  //   setDialogOpen(true);
  // };

  const handleOpenDeleteDialog = (idx) => {
    setSelectedUserId(idx);
    setDialogOpen(true);
    setDialogOpen2(false); // Close edit dialog if open
  };

  const handleOpenEditDialog = () => {
    setDialogOpen2(true);
    setDialogOpen(false); // Close delete dialog if open
  };

  const handleCloseDeleteDialog = () => setDialogOpen(false);
  const handleCloseEditDialog = () => setDialogOpen2(false);

  const handleOnView = (idx) => {
    console.log("idx NO.:", idx);
    route.push(`/user/${idx}`);
  };
  const handleOnDelete = (idx) => {
    console.log("idx NO.:", idx);
    setDialogOpen(false);
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
      width: 400,
      renderCell: (params) => (
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          height="100%"
        >
          <Stack direction={"row"} spacing={2}>
            <Button
              // key={`edit-${params.row.id}`}
              variant={"outlined"}
              sx={{
                color: "#2B2669",
                borderColor: "#ECEDF0",
                borderRadius: "8px",
                padding: "6px 20px",
                height: "36px",
              }}
              style={{ fontWeight: 500, fontSize: "14px" }}
              onClick={() => {
                handleOnView(params.row.id);
              }}
            >
              view
            </Button>
            <Button
              variant={"outlined"}
              sx={{
                color: "#EE404C",
                borderColor: "#ECEDF0",
                borderRadius: "8px",
                padding: "6px 20px",
                height: "36px",
              }}
              style={{ fontWeight: 500, fontSize: "14px" }}
              onClick={() => {
                // handleOnDelete(params.row.id);
                handleOpenDeleteDialog(params.row.id);
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
                sx={{ borderRadius: "12px" }}
              >
                {" "}
                <CommonSearchInput name={"text"} />
              </Skeleton>
            </Box>
          )}
          {isLoad ? (
            <Box>
              <CommonButton
                sx={{
                  borderRadius: "8px",

                  p: "12px 14px",
                  my: "10px",
                }}
                onClick={handleOpenEditDialog}
              >
                Add User
              </CommonButton>
            </Box>
          ) : (
            <Box>
              <Skeleton
                variant="rectangular"
                sx={{ borderRadius: "12px", height: "39px", my: 2 }}
              >
                <CommonButton
                  sx={{
                    borderRadius: "8px",

                    p: "12px 14px",
                    my: "10px",
                  }}
                  startIcon={<PlushIconSVG />}
                >
                  Add User
                </CommonButton>
              </Skeleton>
            </Box>
          )}
        </Box>{" "}
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          {isLoad ? (
            <CommonGridTable rows={rows} columns={columns} />
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

      {/* Dialog Box for Deleting User */}
      <CommonDialogBox
        open={dialogOpen}
        handleClose={handleCloseDeleteDialog}
        title=""
        content={
          <DeleteUserBox onDelete={handleOnDelete} userId={selectedUserId} />
        }
        width="500px"
        aria-hidden={dialogOpen ? false : true}
      />

      {/* Dialog Box for User Details */}
      <CommonDialogBox
        open={dialogOpen2}
        handleClose={handleCloseEditDialog}
        title="User Details"
        content={<UserEditForm />}
        width="800px"
        aria-hidden={dialogOpen2 ? false : true}
      />
    </Box>
  );
};

export default UserPage;
