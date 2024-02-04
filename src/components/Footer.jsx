import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <Box
      width={"100%"}
      height={30}
      color={"#244743"}
      backgroundColor={"#ffb409"}
    >
        <Box pt={1} maxWidth={1400} m={"auto"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Text color={"#9b6c00"} fontWeight={600} pr={3} borderRight={"2px solid"}>Created by Ammad</Text>
          <Box display={"flex"}>
            <Link
            style={{marginLeft:"10px"}}
              to={
                "https://www.linkedin.com/in/muhammad-ammad-a8b7a8267/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BKHH0xuBaStmb6m2FjUkccw%3D%3D"
              }
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
            style={{marginLeft:"10px"}}
              to={
                "https://github.com/MAmmad-byte"
              }
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
            style={{marginLeft:"10px"}}
              to={
                "mailto:muhammadammad146@gmail.com"
              }
            >
              <MdEmail />
            </Link>
          </Box>
        </Box>
    </Box>
  );
}
