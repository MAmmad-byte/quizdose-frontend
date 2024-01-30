import React from "react";
import PageLayout from "../components/PageLayout";
import { Box, Heading, Text } from "@chakra-ui/react";
import bg from "../assets/images/homeBG.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Box
      width={"100%"}
      height={"calc(100vh - 80px)"}
      backgroundImage={bg}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
    >
      <PageLayout
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box textAlign={"center"}>
          <Text fontSize={25} fontWeight={900} color={"#ffb409"}>
            Challenge Your Mind!{" "}
          </Text>
          <Heading as={"h1"} fontSize={45} color={"#ffb409"}>
            Ready to prove your knowledge prowess?
            <br />
            Dive into our quiz universe now!
          </Heading>
          <Heading as={"h6"} fontSize={15} mt={10} color={"#38A169"}>
            <Link to={"/signup"}>
              <Text fontWeight={700} fontSize={18} _hover={{ color: "#ffb409" }} display={"inline-block"}>
                Sign up
              </Text>
            </Link>{" "}
            or <Link to={"/login"}>
              <Text fontWeight={700} fontSize={18} _hover={{ color: "#ffb409" }} display={"inline-block"}>
                log in
              </Text>
            </Link> for brain-teasing fun. Let the quiz journey begin!
          </Heading>
        </Box>
      </PageLayout>
    </Box>
  );
}
