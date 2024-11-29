"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import LoginSymbol from "../../../../public/image/loginlogo.svg";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CommonButton from "@/app/commonComponent/CommonButton";
import { Menu, MenuItem, Stack, Tooltip, useMediaQuery } from "@mui/material";
import SettingIcon from "@/app/icon/settingIcon";
import NotificationIcon from "@/app/icon/notificationIcon";
import PersonIcon from "@/app/icon/personIcon";
import { usePathname } from "next/navigation";

import personSvg from "../../../../public/image/person.svg";
import { useSnackbar } from "@/app/contexts/SnackbarContext";
import { useDispatch } from "react-redux";
import { logout } from "@/app/store/LoadingSlice";

export default function Navbar() {
  const router = useRouter();
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onhandleConfiguration = () => {
    handleClose();
    router.push("/themeconfiguration");
  };

  const onhandleImpersona = () => {
    handleClose();
    router.push("/impersona");
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    dispatch(logout());

    window.location.href = "/";
    // showSnackbar("This is a success Logout!", "success");
  };

  const pathname = usePathname();
  let title = "";

  switch (true) {
    case pathname === "/home":
      title = "Dashboard";
      break;

    case pathname.startsWith("/user"):
      if (pathname.match(/^\/user\/\d+$/)) {
        title = "User"; // Matches dynamic user route, e.g., /user/1
      } else {
        title = "User"; // For other /user routes, like just /user
      }
      break;
    case pathname.startsWith("/roles"):
      if (pathname.match(/^\/roles\/\d+$/)) {
        title = "Roles";
      } else {
        title = "Roles";
      }
      break;
    case pathname.startsWith("/projects"):
      if (pathname.match(/^\/projects\/\d+$/)) {
        title = "Projects";
      } else {
        title = "Projects";
      }
      break;
    case pathname.startsWith("/digsite"):
      if (pathname.match(/^\/projects\/\d+$/)) {
        title = "Projects";
      } else {
        title = "Projects";
      }
      break;
    case pathname.startsWith("/digsitesection"):
      if (pathname.match(/^\/projects\/\d+$/)) {
        title = "Projects";
      } else {
        title = "Projects";
      }
      break;
    case pathname.startsWith("/preliminspection"):
      if (pathname.match(/^\/preliminspection\/\d+$/)) {
        title = "Projects";
      } else {
        title = "Projects";
      }
      break;
    case pathname.startsWith("/pipelineintegrity"):
      if (pathname.match(/^\/pipelineintegrity\/\d+$/)) {
        title = "Projects";
      } else {
        title = "Projects";
      }
      break;
    case pathname.startsWith("/customjob"):
      if (pathname.match(/^\/customjob\/\d+$/)) {
        title = "Projects";
      } else {
        title = "Projects";
      }
      break;

    case pathname === "/addprojectformdata":
      title = "Projects";
      break;
    case pathname === "/themeconfiguration":
      title = "Configuration";
      break;

    case pathname === "/themeedite":
      title = "Configuration";
      break;

    case pathname === "/impersona":
      title = "Impersona";
      break;
    default:
      title = "Dashboard"; // Default title if no match
      break;
  }

  const isLargeScreen = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: "10px",
        py: "12px",
        bgcolor: "white",
        // position: "fixed",
        width: "100%",
        height: "84px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {/* {isLargeScreen && (
            <Typography fontSize={"24px"} fontWeight={600}>
             
              {title}
            </Typography>
          )} */}
          <Typography fontSize={"24px"} fontWeight={600}>
            {/* Dashboard */}
            {title}
          </Typography>
        </Box>

        <Box display={"flex"} gap={2} alignItems={"center"}>
          <IconButton
            // sx={{
            //   "&.MuiButtonBase-root:hover": {
            //     bgcolor: "transparent",
            //   },
            // }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            disableRipple
          >
            <SettingIcon />
          </IconButton>
          <IconButton disableRipple>
            <NotificationIcon />
          </IconButton>
          <Tooltip title="LogOut">
            <IconButton onClick={handleLogout}>
              <Image src={personSvg} alt="profile" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          // vertical: 270,
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          // vertical: 210,
          vertical: "right",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "174px",
            height: {
              xs: "auto",
              sm: "auto",
              md: "104px",
              lg: "104px",
              xl: "104px",
            },
            borderRadius: "9px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          },
        }}
      >
        <MenuItem onClick={onhandleConfiguration} sx={{ mb: ".5rem" }}>
          Configuration
        </MenuItem>
        <MenuItem onClick={onhandleImpersona}>Impersona</MenuItem>
      </Menu>
    </Box>
  );
}
