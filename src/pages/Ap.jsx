import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdMenuOpen, MdQuiz } from "react-icons/md";
import NavigationLink from "../components/nav/NavigationLink";
import NavBar from "../components/nav/NavBar";
export default function Ap() {
  const [menuOpen, setMenuOpen] = useState(false);
  const setMenu = ()=>setMenuOpen(!menuOpen)
  return (
    <>
    <NavBar logoStyle={{fontWeight:700, color:"#244743", fontSize:30}} setMenuOpen={setMenu} menuColor="#244743" background="#ffb409" logo={<><MdQuiz color="#244743" size={40} />Quiz dose</>} menuOpen={menuOpen} >
      <NavigationLink color="#244743" hoverColor={"#f3a900"} to={"/about"}  menuOpen={setMenu}>About</NavigationLink>
        <NavigationLink color="#244743" hoverColor={"#f3a900"} to={"/contact"}  menuOpen={setMenu}>Contact</NavigationLink>
       {/* <NavigationLink color="#244743" hoverColor={"#f3a900"} to={"/services"}  menuOpen={setMenu}>Services</NavigationLink>
       <NavigationLink color="#244743" hoverColor={"#f3a900"} to={"/services"}  menuOpen={setMenu}>Services</NavigationLink>
      <NavigationLink color="#244743" hoverColor={"#f3a900"} to={"/services"}  menuOpen={setMenu}>Services</NavigationLink> */}
       <NavigationLink color="#244743" hoverColor={"#f3a900"} to={"/services"}  menuOpen={setMenu}>Services</NavigationLink>
    </NavBar>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio debitis commodi. Similique ipsum sapiente rem nisi accusamus fugit animi deserunt vero quidem cum incidunt odit quas eaque, ipsa soluta.
      </>
  );
}
