"use client";
import React, { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "./components/maincomponents/Sidebar";
import Navbar from "./components/maincomponents/Navbar";
import Cookies from "js-cookie";
import LoaderSpinner from "./components/LoaderSpinner";
import store from "./store";
import { Provider, useDispatch } from "react-redux";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { ColorProvider } from "./contexts/ColorProvider";
import { LoadingProvider } from "./contexts/LoadingContext";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const noSideNavPaths = ["/", "/otpvalidation", "/otpcode"];
  const showSideNav = !noSideNavPaths.includes(pathname);
  const isLargeScreen = useMediaQuery("(min-width: 733px)");
  return (
    <Provider store={store}>
      <html lang="en">
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <title>iDIGConnect</title>
        <body>
          <SnackbarProvider>
            <LoadingProvider>
              <ColorProvider>
                <Suspense fallback={<Loading />}>
                  {showSideNav ? (
                    <Box display={"flex"} height={"100vh"} overflow={"hidden"}>
                      <Sidebar />

                      <Box
                        sx={{
                          width: "-webkit-fill-available",
                          bgcolor: "#F4F4F4",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          overflow: "hidden",
                          flexGrow: 1,
                        }}
                      >
                        <Navbar />
                        {/* <Box  sx={{ m: "30px", borderRadius: "12px" }}> */}
                        <Box
                          component={"main"}
                          sx={{
                            borderRadius: "12px",
                            flexGrow: 1,
                            p: 2,
                            overflow: "auto",
                            height: "100%",
                            // mt: "86px",
                            // ml: isLargeScreen ? "285px" : "90px",
                          }}
                        >
                          {" "}
                          <Box height="100%">{children}</Box>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <>{children}</>
                  )}
                </Suspense>
              </ColorProvider>
            </LoadingProvider>
          </SnackbarProvider>
        </body>
      </html>
    </Provider>
  );
}
