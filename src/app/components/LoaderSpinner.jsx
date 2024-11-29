"use client";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { useColor } from "../contexts/ColorProvider";

const LoaderSpinner = () => {
  const pathname = usePathname();
  const noSideNavPaths = ["/", "/otpvalidation", "/otpcode"];
  const showSideNav = !noSideNavPaths.includes(pathname);
  const { currentColor } = useColor();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      mt={showSideNav ? "0rem" : "20rem"}
      width={"100%"}
    >
      <RotatingLines
        strokeColor={currentColor || "#F37423"}
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </Box>
  );
};

export default LoaderSpinner;
