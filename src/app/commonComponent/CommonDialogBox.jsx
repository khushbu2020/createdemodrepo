import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  DialogContentText,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Common Dialog Component
export default function CommonDialogBox({
  open,
  handleClose,
  title,
  content,
  actions,
  width,
  fullWidth = false,
  form = null,
  sx = {},
  textButton = null,
  ...props
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      {...props}
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      fullWidth={fullWidth}
      maxWidth={false}
      fullScreen={fullScreen}
      sx={{
        "& .MuiDialog-paper": {
          width: width || "500px",
          maxWidth: "90%",
          borderRadius: "16px",
          padding: "10px 24px",
        },
      }}
    >
      <DialogTitle
        id="dialog-title"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600} fontSize={"24px"} lineHeight={"32px"}>
          {title}
        </Typography>

        <IconButton
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.grey[900],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ p: "0px" }}>
        {form || (
          <DialogContentText component={"span"}>{content}</DialogContentText>
        )}
        {/* If form is passed, it renders the form, otherwise it displays content */}
      </DialogContent>

      <DialogActions>
        {/* {actions.map((action, index) => (
          <Button
            key={index}
            onClick={action.handler}
            variant={action.variant === "contained" ? "contained" : "outlined"}
            sx={{
              mr: 2,

              height: "45px",
              padding: "13px 23px",
              ...(action.variant === "contained" && {
                backgroundColor: "#F37423",
                color: "white",

                "&:hover": {
                  backgroundColor: "#ff8a33", // Optional: Darker shade on hover
                },
              }),
              ...(action.variant === "outlined" && {
                borderColor: "#EFEFEF",
                color: "#F37423",
                "&:hover": {
                  borderColor: "#F37423",
                  backgroundColor: "#F5F5F5", // Optional: Background on hover
                },
              }),
            }}
          >
            {action.label}
          </Button>
        ))} */}
      </DialogActions>
    </Dialog>
  );
}
