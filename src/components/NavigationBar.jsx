import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { isMod, validateUser } from "../services/authServices";
import NavBar from "./nav/NavBar";
import NavigationLink from "./nav/NavigationLink";
export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const setMenu = () => setMenuOpen(!menuOpen);
  return (
    <NavBar
    
      logoStyle={{ fontWeight: 700, color: "#244743", fontSize: 30 }}
      setMenuOpen={setMenu}
      menuColor="#244743"
      background="#ffb409"
      logo={
        <>
          <MdQuiz color="#244743" size={40} />
          Quiz dose
        </>
      }
      menuOpen={menuOpen}
    >
      <NavigationLink
        color="#244743"
        hoverColor={"#f3a900"}
        to={"/"}
        menuOpen={setMenu}
      >
        Home
      </NavigationLink>

      {validateUser() ? (
        <>
          <NavigationLink
        color="#244743"
        hoverColor={"#f3a900"}
        to={"/dashboard"}
        menuOpen={setMenu}
      >
        Dashboard
      </NavigationLink>

          {isMod() && (
            <NavigationLink
            color="#244743"
            hoverColor={"#f3a900"}
            to={"/quiz/create"}
            menuOpen={setMenu}
          >
            Create
          </NavigationLink>
          )}
          <NavigationLink
        color="#244743"
        hoverColor={"#f3a900"}
        to={"/logout"}
        menuOpen={setMenu}
      >
        Logout
      </NavigationLink>
        </>
      ) : (
        <>
          <NavigationLink
        color="#244743"
        hoverColor={"#f3a900"}
        to={"/login"}
        menuOpen={setMenu}
      >
        Login
      </NavigationLink>
      <NavigationLink
        color="#244743"
        hoverColor={"#f3a900"}
        to={"/signup"}
        menuOpen={setMenu}
      >
        Sign up
      </NavigationLink>
        </>
      )}
    </NavBar>
  );
}
