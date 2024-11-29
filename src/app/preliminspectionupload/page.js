"use client";
import CommonButton from "@/app/commonComponent/CommonButton";
import CommonInputFiled from "@/app/commonComponent/CommonInputFiled";
import CommonOutlinedButton from "@/app/commonComponent/CommonOutlinedButton";
import BackArrowSVG from "@/app/icon/BackArrowSVG";
import ImagePlushSVG from "@/app/icon/ImagePlushSVG";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PreliminspectionuploadPage = () => {
  const router = useRouter();
  const handleBackroute = () => {
    router.back();
  };
  const [file, setFile] = useState();
  const [isImage, setIsImage] = useState(true);
  const getFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const fileType = selectedFile.type;

      if (fileType === "image/png" || fileType === "image/jpeg") {
        setFile(URL.createObjectURL(selectedFile));
        setIsImage(true);
      } else if (fileType === "application/pdf") {
        setFile(""); // Clear the image
        setIsImage(false);
      } else {
        // Handle unsupported file types if needed
        alert("Unsupported file type!");
      }
    }
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
          padding: "24px",
          gap: "10px",
        }}
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
            Initial Assessment
          </Typography>
        </Box>
        <Typography
          fontWeight={600}
          fontSize={"24px"}
          color="#1A1D1F"
          my={"10px"}
        >
          {" "}
          Initial Assessment :
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
            <Box display={"flex"} flexDirection={"column"} gap={"18px"}>
              <Box
                sx={{
                  height: "234px",
                  border: "1px dashed #6F767E",
                  bgcolor: "#F7F8F8",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {isImage ? (
                  file ? (
                    <Box
                      sx={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        borderRadius: "8px",
                      }}
                    >
                      <Image
                        src={file}
                        alt="loginpageImage"
                        fill
                        style={{
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        // sizes="(max-width: 230px) 230vw, (max-width: 692px) 692vw, 33vw"
                        priority
                      />
                    </Box>
                  ) : (
                    <Typography
                      variant="h6"
                      sx={{ color: "black", position: "absolute" }}
                    >
                      No file selected
                    </Typography>
                  )
                ) : (
                  <Typography
                    variant="h6"
                    sx={{ color: "black", position: "absolute" }}
                  >
                    {/* PDF file selected. Please check the file. */}
                    <Image
                      src={"/pdfIcon.png"}
                      width={100}
                      height={100}
                      alt="pdfIcon"
                      priority
                    />
                  </Typography>
                )}
                <Box
                  borderRadius={"8px"}
                  bgcolor={"#FFFFFF"}
                  position={"absolute"}
                  border={"1px solid #6F767E"}
                  bottom={"16px"}
                  right={"16px"}
                >
                  <Button variant="text" component="label" color="#2B2669">
                    {" "}
                    Upload
                    {/* <ImagePlushSVG /> */}
                    <input
                      accept="image/png, image/jpeg, application/pdf"
                      onChange={getFile}
                      hidden
                      type="file"
                      multiple
                    />
                  </Button>
                </Box>
              </Box>
              <Stack direction={"column"} spacing={"12px"}>
                <Typography
                  fontWeight={600}
                  fontSize={"15px"}
                  lineHeight={"24px"}
                  color="#6F767E"
                >
                  Step Name
                </Typography>
                <CommonInputFiled
                  type={"text"}
                  placeholder={"Enter your step"}
                  name={"themetitle"}
                />
              </Stack>
              <Stack direction={"column"} spacing={"12px"}>
                <Typography
                  fontWeight={600}
                  fontSize={"15px"}
                  lineHeight={"16.94px"}
                  color="#6F767E"
                >
                  Note
                </Typography>

                <CommonInputFiled
                  name={"Subtitle"}
                  placeholder={"Description"}
                  type={"text"}
                  multiline
                  rows={4.5}
                />
              </Stack>
            </Box>

            <Box mt={15}>
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
      </Box>
    </Box>
  );
};

export default PreliminspectionuploadPage;
