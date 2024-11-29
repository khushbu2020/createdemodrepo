import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import CommonSwitchToggle from "../commonComponent/CommonSwitchToggle";
import { useSnackbar } from "../contexts/SnackbarContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonButton from "../commonComponent/CommonButton";
import CommonInputFiled from "../commonComponent/CommonInputFiled";
import CommonSelectMenu from "../commonComponent/CommonSelectMenu";
import CommonOutlinedButton from "../commonComponent/CommonOutlinedButton";

const UserEditForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { showSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      userStatus: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      role: Yup.string().required("Role is required"),
    }),
    onSubmit: (values) => {
      // Here you can handle the form submission
      console.log(values);
      showSnackbar("User updated successfully!", "success");
    },
  });
  // const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit} mt={"14px"}>
      <Grid container spacing={3}>
        <Grid size={6}>
          <Stack direction={"column"} spacing={"12px"}>
            <Typography
              fontWeight={600}
              fontSize={"14px"}
              lineHeight={"16.94px"}
            >
              First Name
            </Typography>
            <CommonInputFiled
              fullWidth
              type="text"
              name="firstName"
              placeholder="enter your first Name..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Stack>
        </Grid>
        <Grid size={6}>
          {" "}
          <Stack direction={"column"} spacing={"12px"}>
            <Typography
              fontWeight={600}
              fontSize={"14px"}
              lineHeight={"16.94px"}
            >
              Last Name
            </Typography>
            <CommonInputFiled
              type="text"
              name="lastName"
              placeholder="enter your last Name..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Stack>
        </Grid>
        <Grid size={12}>
          {" "}
          <Stack direction={"column"} spacing={"12px"}>
            <Typography
              fontWeight={600}
              fontSize={"14px"}
              lineHeight={"16.94px"}
            >
              Email address
            </Typography>
            <CommonInputFiled
              type="text"
              name="email"
              placeholder="enter your Email..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Stack>
        </Grid>
        <Grid size={12}>
          {" "}
          <Stack direction={"column"} spacing={"12px"}>
            <Typography
              fontWeight={600}
              fontSize={"14px"}
              lineHeight={"16.94px"}
            >
              Role
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
            {formik.touched.role && formik.errors.role && (
              <Typography color="error" variant="caption">
                {formik.errors.role}
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid size={12}>
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
        <Grid size={12}>
          {" "}
          <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
            <CommonOutlinedButton
              sx={{
                padding: "10px 20px",
                borderRadius: "8px",
              }}
              onClick={() => formik.resetForm()}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserEditForm;
