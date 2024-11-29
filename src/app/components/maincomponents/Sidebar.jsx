"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import LoginSymbol from "../../../../public/image/loginlogo.svg";
import Homeicon from "@/app/icon/homeIcon";
import Usericon from "@/app/icon/userIcon";
import Roleicon from "@/app/icon/roleIcon";
import Projectsicon from "@/app/icon/projectsIcon";
import HomeActiveIcon from "@/app/icon/homeActiveIcon";
import UserActiveIcon from "@/app/icon/userActiveIcon";
import RoleActiveIcon from "@/app/icon/roleActiveIcon";
import ProjectActiveIcon from "@/app/icon/projectActiveIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import { useColor } from "@/app/contexts/ColorProvider";
import smallSymbol from "../../../../public/favicon.svg";

const links = [
  { href: "/home", text: "Home", icon: Homeicon, activeIcon: HomeActiveIcon },
  { href: "/user", text: "Users", icon: Usericon, activeIcon: UserActiveIcon },
  { href: "/roles", text: "Roles", icon: Roleicon, activeIcon: RoleActiveIcon },
  {
    href: "/projects",
    text: "Projects",
    icon: Projectsicon,
    activeIcon: ProjectActiveIcon,
  },
];

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const pathname = usePathname();
  const isLargeScreen = useMediaQuery("(min-width: 730px)");
  const { currentColor } = useColor();
  useEffect(() => {
    if (pathname.startsWith("/home")) {
      setSelectedIndex(0);
    } else if (pathname.startsWith("/user")) {
      setSelectedIndex(1);
    } else if (pathname.startsWith("/roles")) {
      setSelectedIndex(2);
    } else if (pathname.startsWith("/projects")) {
      setSelectedIndex(3);
    } else if (pathname.startsWith("/addprojectformdata")) {
      setSelectedIndex(3);
    } else if (pathname.startsWith("/digsite")) {
      setSelectedIndex(3);
    } else if (pathname.startsWith("/digsitesection")) {
      setSelectedIndex(3);
    }
  }, [pathname]);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: isLargeScreen ? "282px" : "90px",
        // position: "fixed",
        height: "100vh",
        bgcolor: "white",
        // flexShrink: 0,
        overflow: "auto",
        px: isLargeScreen ? "24px" : "20px",
        py: "20px",
      }}
    >
      {isLargeScreen && (
        <Box height={"50px"} mb="30px">
          <Image
            src={LoginSymbol}
            width={"151.13px"}
            height={"50px"}
            alt="Login page image"
            // style={{ marginBottom: "30px" }}
            priority
          />
        </Box>
      )}
      {!isLargeScreen && (
        <Box height={"50px"} mb="30px">
          <Image src={smallSymbol} alt="small page image" priority />
        </Box>
      )}

      <nav aria-label="main mailbox folders">
        <List
          sx={{
            "&& .Mui-selected, && .Mui-selected:hover": {
              bgcolor: currentColor === "#F37423" ? "#FEF4EE" : "none",
              "&, &.MuiListItemIcon-root": {
                color: currentColor === "#F37423" ? "#FEF4EE" : "none",
              },
            },
            "& .MuiListItemButton-root:hover": {
              bgcolor: currentColor === "#F37423" ? "#FEF4EE" : "none",
            },
          }}
        >
          {links.map(
            ({ href, text, icon: Icon, activeIcon: ActiveIcon }, index) => (
              <Link key={href} href={href}>
                <ListItem disablePadding sx={{ my: "12px" }}>
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(index)}
                    sx={{
                      "&.Mui-selected": { borderRadius: "1rem" },
                      "&.Mui-focusVisible": { borderRadius: "1rem" },
                      ":hover": { borderRadius: "1rem" },
                    }}
                  >
                    <ListItemIcon>
                      {selectedIndex === index ? <ActiveIcon /> : <Icon />}
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontWeight: 600,
                        lineHeight: 2,
                        color: selectedIndex === index ? "#2B2669" : "#6F767E",
                      }}
                      primary={text}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </nav>
    </Box>
  );
}
