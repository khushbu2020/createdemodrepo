"use client";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import BackArrowSVG from "../icon/BackArrowSVG";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";
import ABOneCallstepper from "./ABOneCallstepper";
import Securitystepper from "./Securitystepper";
import GroupDisturbance from "./GroupDisturbance";
import SiteMob from "./SiteMob";
import Excavation from "./Excavation";
import PipePrep from "./PipePrep";
import NDE from "./NDE";
import Welding from "./Welding";
import Backfill from "./Backfill";
import Coating from "./Coating";
import DEMOB from "./DEMOB";
import Environmental from "./Environmental";
import TMReporting from "./TMReporting";

const PrelimInspectionPage = () => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };
  const handelUpload = () => {
    router.push("/preliminspectionupload");
  };
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <Box
        borderRadius={"12px"}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          alignItems={"center"}
          p={"23px 0px 23px 23px"}
        >
          <IconButton onClick={handleBackroute}>
            <BackArrowSVG />
          </IconButton>
          <Typography fontWeight={600} fontSize={"16px"}>
            Prelim Inspection
          </Typography>
        </Box>
        <Divider />
        <Stack p={"23px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"16px"}
          >
            <Typography fontWeight={600} fontSize={"20px"} color="#000000">
              1. Initial Site Assessment
            </Typography>
            <CommonOutlinedButton
              onClick={handelUpload}
              sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
            >
              Upload
            </CommonOutlinedButton>
          </Box>

          <ABOneCallstepper />
        </Stack>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            2. Security
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <Securitystepper />
        </>
      </Box>

      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            3. Ground Disturbance & Permitting
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <GroupDisturbance />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            4. Site Mob
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <SiteMob />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            5. Excavation
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <Excavation />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            6. Pipe Prep
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <PipePrep />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            7. NDE
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <NDE />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            8. Welding & Post NDE
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <Welding />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            9. Coating
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <Coating />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            10. Backfill
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <Backfill />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            11. DEMOB
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <DEMOB />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            12. Environmental
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <Environmental />
        </>
      </Box>
      <Box borderRadius={"12px"} bgcolor={"white"} p={"23px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"24px"}
        >
          <Typography fontWeight={600} fontSize={"20px"} color="#000000">
            13. TM Reporting
          </Typography>
          <CommonOutlinedButton
            onClick={handelUpload}
            sx={{ p: "10px 14px", borderRadius: "8px", height: "38px" }}
          >
            Upload
          </CommonOutlinedButton>
        </Box>
        <>
          <TMReporting />
        </>
      </Box>
    </Box>
  );
};

export default PrelimInspectionPage;
