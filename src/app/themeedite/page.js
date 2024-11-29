"use client";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import BackArrowSVG from "../icon/BackArrowSVG";
import { useRouter } from "next/navigation";
import CommonButton from "../commonComponent/CommonButton";
import { useSnackbar } from "../contexts/SnackbarContext";
import CommonSwitchToggle from "../commonComponent/CommonSwitchToggle";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddLocationSVG from "../icon/AddLocationSVG";
import CommonDatePicker from "../commonComponent/CommonDatePicker";
import CommonInputFiled from "../commonComponent/CommonInputFiled";
import CheckIconSVG from "../icon/CheckIconSVG";
import ColorChangeSVG from "../icon/ColorChangeSVG";
import Image from "next/image";
import GalleryIconSVG from "../icon/GalleryIconSVG";
import { useColor } from "../contexts/ColorProvider";
import { HexColorPicker } from "react-colorful";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";
import axios from "axios";
import {
  LOGIN_CONFIGURATION,
  LOGIN_CONFIGURATION_UPDATE,
} from "../components/maincomponents/utils";
// import { SketchPicker } from "react-color";

const ThemeEditPage = () => {
  // let defaultThemeURL = "/wallpaper.png";
  // const [file, setfile] = useState(defaultThemeURL);

  const defaultColor = "#F37423";
  const {
    file,
    setfile,
    currentColor,
    setCurrentColor,
    sitetitle,
    setsitetitle,
    sitesubtitle,
    setsitesubtitle,
  } = useColor();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [localFile, setLocalFile] = useState(file);
  const [localColor, setLocalColor] = useState(currentColor);
  const [localtitle, setlocaltitle] = useState(sitetitle);
  const [localsubtitle, setlocalsubtitle] = useState(sitesubtitle);

  const handleToggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setLocalColor(color);
  };
  const handleResetColor = () => {
    setLocalColor(defaultColor);
  };
  const handletitlechange = (e) => {
    setlocaltitle(e.target.value);
  };
  const handlesubtitlechange = (e) => {
    setlocalsubtitle(e.target.value);
  };

  const handleupdateData = async () => {
    // Retrieve session token from sessionStorage
    const storedAuthToken = sessionStorage.getItem("sessionToken");

    // Check if the session token is missing or invalid
    if (!storedAuthToken) {
      console.error("Session token is missing or invalid.");
      showSnackbar("Unauthorized. Please log in again.", "error");
      return; // Stop further execution if the token is not found
    }

    try {
      // Create a FormData object and append the necessary values
      const formData = new FormData();
      formData.append("title", localtitle);
      formData.append("sub_title", localsubtitle);
      formData.append("theme_colour", localColor);
      formData.append("image", localFile);
      // Only append the file if it exists and is valid
      // if (file && file !== "/wallpaper.png") {
      //   const imageFile = new File([file], "wallpaper.png", {
      //     type: "image/png", // Set the correct MIME type for the image
      //   });
      //   formData.append("image", imageFile);
      // }

      // Make the PATCH request with the authorization header
      const response = await axios.patch(LOGIN_CONFIGURATION_UPDATE, formData, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "multipart/form-data",
          Authorization: storedAuthToken,
        },
      });

      console.log("Response:", response);
      // showSnackbar("Theme updated successfully!", "success");
    } catch (error) {
      console.error("Failed to update theme. Error details:", error);
      showSnackbar("Failed to update theme. Please try again.", "error");
    }
  };

  useEffect(() => {
    // handleupdateData();
  }, []);

  const getFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const newFile = URL.createObjectURL(selectedFile);
      setLocalFile(newFile);

      // Cleanup function
      return () => URL.revokeObjectURL(newFile);
    } else {
      // Handle error: show a message or snackbar
      showSnackbar("Please upload a valid image file.", "error");
    }
  };

  const router = useRouter();
  const handleBackroute = () => {
    router.back(); // or router.push("/projects")
  };
  const { showSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      role: "",
      userStatus: false,
    },
    validationSchema: Yup.object({
      role: Yup.string().required("Role is required"),
    }),
    onSubmit: (values) => {
      // Here you can handle the form submission
      console.log(values);
      showSnackbar("User updated successfully!", "success");
    },
  });
  const handleApply = () => {
    setCurrentColor(localColor);
    setfile(localFile);
    setsitetitle(localtitle);
    setsitesubtitle(localsubtitle);
    // console.log("Applying changes with current color:", currentColor);
    // console.log("Applying changes with current file:", file);
    showSnackbar("Changes applied successfully!", "success");
    handleupdateData();
    router.back();
  };

  return (
    <Box bgcolor={"white"} height="100%" width={"100%"} borderRadius={"8px"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height="100%"
        sx={{ overflowY: "scroll" }}
      >
        <Box flexGrow={1} p={"24px"}>
          {" "}
          <Grid container spacing={2}>
            <Grid size={{ xl: 6, lg: 6, sm: 12, md: 12, xs: 12 }}>
              <Stack direction={"column"} spacing={"6px"}>
                <Typography color="#000000" fontWeight={600} fontSize={"19px"}>
                  Custom login theme
                </Typography>
                <Typography color="#6F767E" fontWeight={500} fontSize={"12px"}>
                  Set your own app theme by changing image
                </Typography>
              </Stack>
              <Box component={"form"} mt={"20px"}>
                <Grid container spacing={5}>
                  <Grid size={{ lg: 12, md: 12, xs: 12 }}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"15px"}
                        lineHeight={"24px"}
                      >
                        Title
                      </Typography>
                      <CommonInputFiled
                        type={"text"}
                        placeholder={"Enter your title"}
                        name={"themetitle"}
                        value={localtitle ?? ""}
                        onChange={handletitlechange}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={12}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"15px"}
                        lineHeight={"16.94px"}
                      >
                        Subtitle
                      </Typography>

                      <CommonInputFiled
                        name={"Subtitle"}
                        type={"text"}
                        value={localsubtitle ?? ""}
                        multiline
                        rows={4.5}
                        placeholder={"Enter subtitle"}
                        onChange={handlesubtitlechange}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={12}>
                    {" "}
                    <Divider sx={{ mt: 15 }} />
                  </Grid>
                  <Grid size={12}>
                    <Stack direction={"column"} spacing={"6px"}>
                      <Typography
                        color="#000000"
                        fontWeight={600}
                        fontSize={"19px"}
                      >
                        Custom themes color
                      </Typography>
                      <Typography
                        color="#6F767E"
                        fontWeight={500}
                        fontSize={"12px"}
                      >
                        Set your own app theme by changing the color code
                      </Typography>
                    </Stack>
                    <Box
                      height={"48px"}
                      width={"auto"}
                      display={"flex"}
                      mt={"30px"}
                      gap={3}
                      alignItems={"center"}
                    >
                      <Box
                        border={"1px solid"}
                        borderColor={defaultColor}
                        p={0.5}
                        borderRadius={"50%"}
                        onClick={handleResetColor}
                      >
                        <Box
                          height={"40px"}
                          width={"40px"}
                          bgcolor={defaultColor}
                          borderRadius={"50%"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{ cursor: "pointer" }}
                        >
                          {" "}
                          {currentColor === defaultColor && <CheckIconSVG />}
                        </Box>
                      </Box>
                      <Box
                        border={"1px solid"}
                        borderColor={currentColor}
                        p={0.5}
                        borderRadius={"50%"}
                      >
                        <Box
                          height={"40px"}
                          width={"40px"}
                          bgcolor={currentColor}
                          borderRadius={"50%"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{ cursor: "pointer" }}
                          onClick={handleToggleColorPicker}
                        >
                          {" "}
                          {currentColor !== defaultColor && <CheckIconSVG />}
                        </Box>
                      </Box>

                      <Box
                        border={"1px solid #EFEFEF"}
                        p={0.5}
                        borderRadius={"50%"}
                        sx={{ cursor: "pointer" }}
                        onClick={handleToggleColorPicker}
                      >
                        <Box
                          height={"40px"}
                          width={"40px"}
                          bgcolor={"#EFEFEF"}
                          borderRadius={"50%"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <ColorChangeSVG />
                        </Box>
                      </Box>

                      {showColorPicker && (
                        <HexColorPicker
                          color={currentColor}
                          onChange={handleColorChange}
                        />
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xl: 6, lg: 6, sm: 12, md: 12, xs: 12 }}>
              <Box height={"auto"} width={"100%"}>
                <Stack direction={"column"} spacing={"6px"}>
                  <Typography
                    color="#000000"
                    fontWeight={600}
                    fontSize={"19px"}
                  >
                    Upload your wallpaper image
                  </Typography>
                  <Typography
                    color="#6F767E"
                    fontWeight={500}
                    fontSize={"12px"}
                  >
                    Choose an image that will appear everywhere in our app.
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    height: "330px",
                    width: "490",
                    position: "relative",
                    borderRadius: "10.92px",
                    cursor: "pointer",
                    my: "24px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={localFile || "/wallpaper.png"}
                    // src={file}
                    alt="loginpageImage"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "10.92px",
                    }}
                    sizes="(max-width: 330px) 330vw, (max-width: 490px) 490vw, 33vw"
                    priority
                  />
                  <Box
                    height={"36px"}
                    width={"103px"}
                    borderRadius={"8px"}
                    bgcolor={"#FFFFFF"}
                    position={"absolute"}
                    bottom={"16px"}
                    right={"16px"}
                  >
                    <Button
                      variant="text"
                      component="label"
                      endIcon={<GalleryIconSVG />}
                      color="#2B2669"
                    >
                      Upload
                      <input
                        accept="image/*"
                        onChange={getFile}
                        hidden
                        type="file"
                      />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box p={"24px"}>
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
              onClick={handleApply}
            >
              Submit
            </CommonButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeEditPage;
