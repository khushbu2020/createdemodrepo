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
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useColor } from "../contexts/ColorProvider";
import Image from "next/image";
const CustomjobViewEdite = () => {
  const { currentColor } = useColor();
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

  const tagName = [
    {
      name: "NDE Service Provider",
    },
    {
      name: "NDE Service Provider",
    },
    {
      name: "NDE Service Provider",
    },
    {
      name: "NDE Service Provider",
    },
    {
      name: "NDE Service Provider",
    },
  ];
  const [tag, settag] = useState(tagName);
  const [tagname, settagname] = useState("");
  const handleAddTag = (name) => {
    let newtag = [...tag];
    newtag.push({ name });
    settag(newtag);
  };
  const handleDeleteTag = (name) => {
    let newtag = [...tag];
    newtag = newtag.filter((t) => t.name !== name);
    settag(newtag);
  };
  return (
    <Box bgcolor={"white"} height="100%" width={"100%"} borderRadius={"8px"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflowY: "scroll",
          p: "24px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          gap={"14px"}
          my={"10px"}
          alignItems={"center"}
        >
          <IconButton onClick={handleBackroute}>
            <BackArrowSVG />
          </IconButton>
          <Typography fontWeight={600} fontSize={"16px"}>
            Initial site Assessment
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
            <Box display={"flex"} flexDirection={"column"} gap={"18px"}>
              {/* <Box
                sx={{
                  height: "234px",
                  border: "1px dashed #6F767E",
                  bgcolor: "#F7F8F8",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"5px"}
                  alignItems={"center"}
                >
                  <ImagePlushSVG />
                  <Typography
                    fontSize={"13px"}
                    fontWeight={500}
                    color="#000000"
                  >
                    Drop you Document
                  </Typography>
                  <Typography fontSize={"9px"} fontWeight={500} color="#6F767E">
                    Support : JPG, PNG, Document
                  </Typography>
                </Box>
              </Box> */}
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
                  color="#1A1D1F"
                >
                  Step Name
                </Typography>
                <CommonInputFiled
                  type={"text"}
                  placeholder={"Initial site Assessment"}
                  name={"text"}
                />
              </Stack>
              <Stack direction={"column"} spacing={"12px"}>
                <Typography
                  fontWeight={600}
                  fontSize={"15px"}
                  lineHeight={"24px"}
                  color="#1A1D1F"
                >
                  Tag a Task
                </Typography>
                <Box
                  sx={{
                    // height: "168px",
                    borderRadius: "12px",
                    border: "2px solid #EFEFEF",
                  }}
                >
                  <Box
                    sx={{
                      p: "12px",
                      borderRadius: "8px",
                      gap: "12px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {tag.map((list, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          gap: "10px",
                          bgcolor: "#F3F4F7",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          marginLeft: "5px",
                          marginBottom: "5px",
                        }}
                      >
                        <Typography
                          color="#2B2669"
                          fontWeight={500}
                          fontSize={"14px"}
                        >
                          {" "}
                          {list.name}
                        </Typography>
                        <IconButton
                          sx={{ height: "14px", width: "14px" }}
                          onClick={() => handleDeleteTag(list.name)}
                        >
                          {" "}
                          <CloseIcon
                            sx={{
                              height: "14px",
                              width: "14px",
                              color: "#2B2669",
                              fontwidth: 500,
                              fontSize: "14px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    ))}

                    <TextField
                      type={"text"}
                      name={"text"}
                      value={tagname}
                      onChange={(e) => {
                        settagname(e.target.value);
                      }}
                      sx={{
                        bgcolor: "#FFFFFF",
                        borderRadius: "12px",
                        width: "100%",
                        caretColor: currentColor,
                        "& .MuiOutlinedInput-root": {
                          // backgroundColor: "#f0f0f0",
                          // backgroundColor: "#F4F4F4",
                          borderRadius: "12px",
                          "&:hover fieldset": {
                            borderColor: currentColor,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: currentColor,
                          },
                        },
                        "& .MuiInputBase-input": {
                          padding: "13.5px", // Adjust padding as needed
                        },
                      }}
                      placeholder={"Tag here..."}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <CommonButton
                                sx={{
                                  p: "9px 14px",
                                  borderRadius: "8px",
                                  height: "33px",
                                  "& hover": {
                                    bordercolor: "red",
                                  },
                                }}
                                onClick={() => {
                                  handleAddTag(tagname);
                                  settagname("");
                                }}
                              >
                                Add Tag
                              </CommonButton>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
              <Stack direction={"column"} spacing={"12px"}>
                <Typography
                  fontWeight={600}
                  fontSize={"15px"}
                  lineHeight={"16.94px"}
                  color="#1A1D1F"
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
              <Box mt={15}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  justifyContent={"flex-end"}
                >
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomjobViewEdite;
