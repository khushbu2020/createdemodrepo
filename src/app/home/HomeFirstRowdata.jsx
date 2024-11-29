import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid2";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import ProjectBagIcon from "../icon/ProjectBagIcon";
import { useLoad } from "../contexts/LoadingContext";
import CommonSkeleton from "../commonComponent/CommonSkeleton";

const HomeFirstRowdata = () => {
  const { isLoad, setIsLoad } = useLoad();

  useEffect(() => {
    setIsLoad(false);
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoad]);
  const HomeLineFirstdata = [
    {
      NProject: "1132",
      proDescriptions: "Completed Project",
    },
    {
      NProject: "600",
      proDescriptions: "incomplete Project",
    },
    {
      NProject: "1132",
      proDescriptions: "Overdue Project",
    },
  ];

  const [firstrow, setfirstrow] = useState(HomeLineFirstdata);
  return (
    <>
      {firstrow.map((data, idx) =>
        isLoad ? (
          <Grid
            key={idx}
            size={{ lg: 4, md: 4, xs: 12 }}
            bgcolor={"white"}
            height={{ lg: "150px", md: "120px", xs: "150px" }}
            borderRadius={"12px"}
            pl={{ lg: "30px", md: "13px", xs: "48px" }}
            pt={{ lg: "40px", md: "30px", xs: "40px" }}
            pb={{ lg: "41px", md: "31px", xs: "41px" }}
          >
            <Box>
              <Stack direction={"row"} spacing={"21px"}>
                <Box
                  height={{ lg: "64px", sm: "55px", xs: "64px" }}
                  width={{ lg: "64px", sm: "55px", xs: "64px" }}
                  borderRadius={"50%"}
                  bgcolor={"#F3725B1A"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <ProjectBagIcon />
                </Box>
                <Box>
                  <Stack direction={"column"} spacing={"9px"}>
                    <Typography
                      fontWeight={700}
                      fontSize={{ lg: "30px", md: "20px", xs: "30px" }}
                      color="black"
                    >
                      {data.NProject}
                    </Typography>
                    <Typography
                      fontWeight={600}
                      fontSize={{ lg: "16px", md: "10px", xs: "16px" }}
                      color="#6F767E"
                    >
                      {data.proDescriptions}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ) : (
          <CommonSkeleton
            key={idx}
            sx={{
              height: { lg: "150px", md: "120px", xs: "150px" },

              width: { xs: "99%", md: "31.5%", lg: "31.5%", xl: "31.7%" },
            }}
          ></CommonSkeleton>
        )
      )}
    </>
  );
};

export default HomeFirstRowdata;
