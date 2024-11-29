"use client";
import CommonButton from "@/app/commonComponent/CommonButton";
import CommonInputFiled from "@/app/commonComponent/CommonInputFiled";
import CommonOutlinedButton from "@/app/commonComponent/CommonOutlinedButton";
import CommonSelectMenu from "@/app/commonComponent/CommonSelectMenu";
import BackArrowSVG from "@/app/icon/BackArrowSVG";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DigSiteId = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "100%",
        width: "100%",

        borderRadius: "8px",
      }}
    >
      <Stack
        direction={"column"}
        spacing={2}
        height={"100%"}
        sx={{ overflowY: "scroll" }}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          alignItems={"center"}
          p={"24px 0px 0px 24px"}
        >
          <IconButton onClick={handleBackroute}>
            <BackArrowSVG />
          </IconButton>
          <Typography fontWeight={600} fontSize={"16px"}>
            Add Digsite
          </Typography>
        </Box>
        <Divider />
        <Grid container spacing={2} p={"0px 24px"}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"24px"}
              component={"form"}
            >
              <Stack direction={"column"} spacing={"12px"}>
                <Typography fontWeight={600} fontSize={"14px"} color="#000000">
                  Dig Site Number
                </Typography>
                <CommonInputFiled
                  type={"number"}
                  name={"text"}
                  placeholder={"Enter Number"}
                />
              </Stack>
              <Stack direction={"column"} spacing={"12px"}>
                <Typography fontWeight={600} fontSize={"14px"} color="#6F767E">
                  Technician
                </Typography>
                <CommonSelectMenu
                  options={options}
                  value={selectedOption}
                  onChange={setSelectedOption}
                  placeholder="Select Technician"
                  width="100%"
                  height="50px"
                  minWidth={"100%"}
                />
              </Stack>
              <Stack direction={"column"} spacing={"12px"}>
                <Typography fontWeight={600} fontSize={"14px"} color="#000000">
                  Down Stream
                </Typography>
                <CommonInputFiled
                  type={"text"}
                  name={"text"}
                  placeholder={"Enter here"}
                />
              </Stack>
              <Stack direction={"column"} spacing={"12px"}>
                <Typography fontWeight={600} fontSize={"14px"} color="#6F767E">
                  Copy from Dig Site
                </Typography>
                <CommonSelectMenu
                  options={options}
                  value={selectedOption1}
                  onChange={setSelectedOption1}
                  placeholder="Select Dig Site"
                  width="100%"
                  height="50px"
                  minWidth={"100%"}
                />
              </Stack>
            </Box>
            <Box mt={"89px"}>
              <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
                <CommonOutlinedButton
                  sx={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                  onClick={handleBackroute}
                >
                  Cancel
                </CommonOutlinedButton>
                <CommonButton
                  sx={{ padding: "10px 20px", borderRadius: "8px" }}
                  type="submit"
                >
                  Submit
                </CommonButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default DigSiteId;
