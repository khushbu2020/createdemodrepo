"use client";
import {
  Box,
  Button,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import EditIconSVG from "../icon/EditIconSVG";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useColor } from "../contexts/ColorProvider";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";
import axios from "axios";
import { LOGIN_CONFIGURATION } from "../components/maincomponents/utils";

const ThemeConfiguration = () => {
  const { currentColor, file, sitetitle, sitesubtitle } = useColor();
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    setIsLoad(false); // Reset loading state

    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);

  const router = useRouter();
  const handleEdite = () => {
    // Navigate to edit theme page
    router.push("/themeedite");
  };

  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "white",
        borderRadius: "8px",

        width: "100%",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"25px"}
        height={"100%"}
        p={"24px"}
        overflow={"auto"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {isLoad ? (
            <>
              <Stack direction={"column"} spacing={"6px"}>
                <Typography color="#000000" fontWeight={600} fontSize={"19px"}>
                  Custom login theme
                </Typography>
                <Typography color="#6F767E" fontWeight={500} fontSize={"12px"}>
                  Set your own app theme by changing image
                </Typography>
              </Stack>
              <Button
                variant={"outlined"}
                sx={{
                  color: "#6F767E",
                  borderColor: "#ECEDF0",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  height: "42px",
                  my: "10px",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
                endIcon={<EditIconSVG />}
                onClick={handleEdite}
              >
                Edit
              </Button>
            </>
          ) : (
            <CommonSkeleton height={60} width={"100%"}></CommonSkeleton>
          )}
        </Box>

        {isLoad ? (
          <Box
            sx={{
              position: "relative",
              height: 264,
              width: 422,
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
              sizes="(max-width: 264px) 264vw, (max-width: 422px) 422vw, 33vw"
              priority
            />
          </Box>
        ) : (
          <CommonSkeleton height={260} width={420}></CommonSkeleton>
        )}

        <Stack direction={"column"} spacing={"6px"}>
          {isLoad ? (
            <Typography color="#1A1D1F" fontWeight={600} fontSize={"16px"}>
              Title :
            </Typography>
          ) : (
            <CommonSkeleton height={22} width={"25%"}></CommonSkeleton>
          )}
          {isLoad ? (
            <Typography color="#6F767E" fontWeight={500} fontSize={"14px"}>
              {/* Simplify manag ement with our dashboard. */}
              {sitetitle}
            </Typography>
          ) : (
            <CommonSkeleton height={21} width={"60%"}></CommonSkeleton>
          )}
        </Stack>
        <Stack direction={"column"} spacing={"6px"}>
          {isLoad ? (
            <Typography color="#1A1D1F" fontWeight={600} fontSize={"16px"}>
              Subtitle :
            </Typography>
          ) : (
            <CommonSkeleton height={22} width={"25%"}></CommonSkeleton>
          )}
          {isLoad ? (
            <Typography color="#6F767E" fontWeight={500} fontSize={"14px"}>
              {/* Simplify your dashboard management with our user-friendly admin
              dashboard. */}
              {sitesubtitle}
            </Typography>
          ) : (
            <CommonSkeleton height={21} width={"60%"}></CommonSkeleton>
          )}
        </Stack>
        <Divider />
        <Stack direction={"column"} spacing={"6px"}>
          {isLoad ? (
            <>
              <Typography color="#000000" fontWeight={600} fontSize={"19px"}>
                iDIGConnect themes color
              </Typography>
              <Typography color="#6F767E" fontWeight={500} fontSize={"12px"}>
                Set your own app theme by changing the color code
              </Typography>
            </>
          ) : (
            <CommonSkeleton height={45} width={"100%"}></CommonSkeleton>
          )}
        </Stack>
        {isLoad ? (
          <Box
            height={"46px"}
            width={"136px"}
            borderRadius={"24px"}
            border={"1.4px solid #ECEDF0"}
            p={"6px"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box
              height={"34px"}
              width={"34px"}
              borderRadius={"50%"}
              bgcolor={currentColor}
            ></Box>
            <Box fontSize={"14px"} fontWeight={600}>
              {currentColor}
            </Box>
          </Box>
        ) : (
          <Box
            height={"46px"}
            width={"136px"}
            borderRadius={"24px"}
            border={"1.4px solid #ECEDF0"}
            p={"6px"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            {" "}
            <Skeleton variant="circular" height={34} width={34}>
              {" "}
              <Box
                height={"34px"}
                width={"34px"}
                borderRadius={"50%"}
                bgcolor={currentColor}
              ></Box>
            </Skeleton>
            <Skeleton height={20}>
              <Box fontSize={"14px"} fontWeight={600}>
                {currentColor}
              </Box>
            </Skeleton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ThemeConfiguration;
