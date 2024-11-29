"use client";
import BackArrowSVG from "@/app/icon/BackArrowSVG";
import EditIconSVG from "@/app/icon/EditIconSVG";
import { Box, Button, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import TabOneData from "../TabOneData";
import TabTwoData from "../TabTwoData";

const ProjectIdPage = ({ params }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const router = useRouter();
  const handleBackroute = () => {
    router.push("/projects");
  };
  const handleAddProject = () => {
    router.push("/addprojectformdata");
  };

  return (
    <Box
      bgcolor={"white"}
      height="100%"
      width={"100%"}
      sx={{ overflowY: "scroll" }}
      borderRadius={"8px"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: "24px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
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
              Project List : {params.projectId}
            </Typography>
          </Box>
          <Button
            variant={"outlined"}
            sx={{
              color: "#6F767E",
              borderColor: "#ECEDF0",
              borderRadius: "8px",
              padding: "12px 16px",
              height: "42px",

              fontWeight: 600,
              fontSize: "14px",
            }}
            endIcon={<EditIconSVG />}
            onClick={handleAddProject}
          >
            Edit
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
            mt: "26px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#F37D53",
                // height: 3,
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#F37D53",
              },
            }}
          >
            <Tab
              sx={{
                fontSize: "16px",
                fontWeight: 600,

                paddingX: "18px",
                paddingY: "8px",
              }}
              disableRipple
              label="Details"
              value="1"
            />
            <Tab
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                paddingX: "18px",
                paddingY: "8px",
              }}
              disableRipple
              label="Location"
              value="2"
            />
          </Tabs>
        </Box>
        {value === "1" && (
          <>
            <TabOneData />
          </>
        )}
        {value === "2" && (
          <>
            <TabTwoData />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProjectIdPage;
