import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { validateUser } from "../services/authServices";
export default function NavBar() {
  return (
    <Box width="100%" height="50px" background="#ffb409">
      <Box
        display="flex"
        alignItems="center"
        p={1}
        justifyContent="space-between"
        m="auto"
        height="100%"
        // border="1px solid tomato"
        maxWidth="1400px"
      >
        <Heading
          display={"flex"}
          alignItems={"center"}
          fontSize={30}
          color={"#fff"}
        >
          <MdQuiz color="#E6FFFA" size={40} />
          Quiz dose
        </Heading>
        <ul className="nav-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>About</li>
          {validateUser() ? (
            <li>
              <Link to={"/logout"}>Logout</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/signup"}>Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </Box>
    </Box>
  );
}
