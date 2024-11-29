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
import CommonSelectMenu from "../commonComponent/CommonSelectMenu";
import { Margin } from "@mui/icons-material";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";

const AddProjectFormData = () => {
  const [selectedOption, setSelectedOption] = useState("");
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
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Box bgcolor={"white"} height="100%" width={"100%"} borderRadius={"8px"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height="100%"
        sx={{ overflowY: "scroll" }}
      >
        <Box flexGrow={1} p={"24px"}>
          <Grid container spacing={2}>
            <Grid size={{ xl: 6, lg: 6, sm: 12, md: 12, xs: 12 }}>
              <Box
                display={"flex"}
                justifyContent={"start"}
                gap={"14px"}
                alignItems={"center"}
                mb={"15px"}
              >
                <IconButton onClick={handleBackroute}>
                  <BackArrowSVG />
                </IconButton>
                <Typography fontWeight={600} fontSize={"16px"}>
                  Project List
                </Typography>
              </Box>
              <Divider />
              <Box component={"form"} onSubmit={formik.handleSubmit} mt={2}>
                <Grid container spacing={2.2}>
                  <Grid size={{ lg: 6, md: 12, xs: 12 }}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Project Number
                      </Typography>
                      <CommonInputFiled
                        type={"number"}
                        placeholder={"Enter Number"}
                        name={"ProjectNumber"}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={{ lg: 6, md: 12, xs: 12 }}>
                    {" "}
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        User Status
                      </Typography>
                      {/* <SwitchComponent /> */}
                      <Typography component={"span"}>
                        <CommonSwitchToggle
                          checked={formik.values.userStatus}
                          onChange={formik.handleChange}
                          name="userStatus"
                        />
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid size={{ lg: 6, md: 12, xs: 12 }}>
                    {" "}
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Project Manager
                      </Typography>

                      <CommonSelectMenu
                        options={options}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        placeholder="Please select"
                        width="100%"
                        height="50px"
                        minWidth={"100%"}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={{ lg: 6, md: 12, xs: 12 }}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Integrity Engineer
                      </Typography>

                      <CommonInputFiled
                        name={"IntegrityEngineer"}
                        type={"text"}
                        placeholder={"Enter here"}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={12}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Construction
                      </Typography>

                      <CommonInputFiled
                        name={"Construction"}
                        type={"text"}
                        placeholder={"Enter here"}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Grid>{" "}
                  <Grid size={12}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Description
                      </Typography>

                      <CommonInputFiled
                        name={"Description"}
                        type={"text"}
                        placeholder={"Enter here"}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={{ xl: 6, lg: 12, sm: 12, md: 12, xs: 12 }}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Start Date
                      </Typography>
                      <CommonDatePicker />
                    </Stack>
                  </Grid>
                  <Grid size={{ xl: 6, lg: 12, sm: 12, md: 12, xs: 12 }}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Deadline
                      </Typography>
                      <CommonDatePicker />
                    </Stack>
                  </Grid>
                  <Grid size={{ lg: 6, md: 12, xs: 12 }}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        P.O
                      </Typography>

                      <CommonInputFiled
                        name={"P.O"}
                        type={"text"}
                        placeholder={"Enter P.O"}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={{ lg: 6, md: 12, xs: 12 }}>
                    {" "}
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        A.F.E
                      </Typography>

                      <CommonInputFiled
                        name={"A.F.E"}
                        type={"text"}
                        placeholder={"Enter A.F.E"}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={{ lg: 8, md: 12, xs: 12 }}>
                    <Stack direction={"column"} spacing={"12px"}>
                      <Typography
                        fontWeight={600}
                        fontSize={"14px"}
                        lineHeight={"16.94px"}
                      >
                        Location
                      </Typography>

                      <CommonInputFiled
                        name={"Location"}
                        type={"text"}
                        placeholder={"Enter your location"}
                        onChange={formik.handleChange}
                      />
                    </Stack>
                  </Grid>
                  <Grid
                    size={{ lg: 4, md: 12, xs: 12 }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <CommonButton
                      sx={{
                        p: "16px",
                        borderRadius: "10px",
                        width: { lg: "100%", sm: "100%", md: "100%" },
                        m: "2px",
                      }}
                      endIcon={<AddLocationSVG />}
                    >
                      Add Location
                    </CommonButton>
                  </Grid>
                  <Grid size={12}> </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xl: 6, lg: 6, sm: 12, md: 12, xs: 12 }}>
              <Box
                // bgcolor={"#FEF4EE"}
                height={"765px"}
                borderRadius={"12px"}
                p={"18px"}
              >
                2. map dispaly
                <br />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignContent={"center"}
          p={"0px 24px 24px 24px"}
        >
          <Stack direction={"row"} spacing={"12px"}>
            <Typography fontWeight={600} fontSize={"14px"}>
              Custom Project:
            </Typography>
            {/* <SwitchComponent /> */}
            <Typography component={"span"}>
              <CommonSwitchToggle
                checked={formik.values.userStatus}
                onChange={formik.handleChange}
                name="userStatus"
              />
            </Typography>
          </Stack>

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
      </Box>
    </Box>
  );
};

export default AddProjectFormData;
