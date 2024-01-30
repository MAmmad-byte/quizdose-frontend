import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { isMod, validateUser } from "../services/authServices";
export default function NavBar() {
  return (
    <Box width="100%" height="50px" background="#ffb409" p={"0 20px"}>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        justifyContent="space-between"
        m="auto"
        height="100%"
        maxWidth="1400px"
      >
        <Link to={"/"}>
          <Heading
            display={"flex"}
            alignItems={"center"}
            fontSize={30}
            color={"#244743"}
            cursor={"pointer"}
          >
            <MdQuiz color="#244743" size={40} />
            Quiz dose
          </Heading>
        </Link>
        <ul className="nav-list" style={{ color: "#244743" }}>
          <li>
            <Link to={"/"}>
              <Text fontWeight={700}>Home</Text>
            </Link>
          </li>
          {validateUser() ? (
            <>
              <li>
                <Link to={"/dashboard"}>
                  <Text fontWeight={700}>Dashboard</Text>
                </Link>
              </li>

              {isMod() && (
                <li>
                  <Link to={"/quiz/create"}>
                    <Text fontWeight={700}>Create</Text>
                  </Link>
                </li>
              )}
              <li>
                <Link to={"/logout"}>
                  <Text fontWeight={700}>Logout</Text>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/login"}>
                  <Text fontWeight={700}>Login</Text>
                </Link>
              </li>
              <li>
                <Link to={"/signup"}>
                  <Text fontWeight={700}>Sign up</Text>
                </Link>
              </li>
            </>
          )}
        </ul>
      </Box>
    </Box>
  );
}
