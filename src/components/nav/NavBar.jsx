import { Box } from "@chakra-ui/react";
import React from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import PageLayout from "../PageLayout"

export default function NavBar({
  logo,
  menuColor,
  hamburgerOpen = <MdMenuOpen size={25} color={menuColor || "#fff"} />,
  hamburgerClosed = <MdMenu size={25} color={menuColor || "#fff"} />,
  setMenuOpen,
  menuOpen,
  children,
  background = "#2C5282",
  logoStyle,
  maxWidth="1400px"
}) {
  return (
    <Box
    width={"100%"}
      as="nav"
      p={{ xl: "5px 20px", base: "5px 0px" }}
      position={{ xl: "unset", base: "absolute" }}
      
      background={background}
      zIndex={10000000}
    >
      <PageLayout styles={{maxWidth:maxWidth}}>
      <Box
            display={"flex"}
            alignItems={{ xl: "center", base: "start" }}
            justifyContent={"space-between"}
            flexDirection={{ xl: "row", base: "column" }}
      >

      <Link to={"/"}>
        <Box
          listStyleType={"none"}
          fontSize={25}
          fontWeight={900}
          color={"#fff"}
          as="li"
          display={"flex"}
          alignItems={"center"}
          {...logoStyle}
          cursor={"pointer"}
          >
          {logo}
        </Box>
      </Link>
      <Box
        onClick={setMenuOpen}
        display={{ xl: "none", base: "block" }}
        position={"absolute"}
        right={5}
        top={"18px"}
        cursor={"pointer"}
        >
        {menuOpen ? hamburgerOpen : hamburgerClosed}
      </Box>
      <Box
      // position={{ xl: "unset", base: "absolute" }}
      bottom={"0px"}
        as="ul"
        width={{ xl: "auto", base: "100%" }}
        color={"#fff"}
        // display={{ xl: "flex", base: menuOpen ? "flex" : "none" }}
        display={"flex"}
        flexDirection={{ xl: "row", base: "column" }}
        height={{ xl: "100%", base: menuOpen ? "50vh" : "0vh" }}
        overflow={"hidden"}
        transition={"0.3s"}
        >
        {children}
      </Box>
          </Box>
        </PageLayout>
    </Box>
  );
}
