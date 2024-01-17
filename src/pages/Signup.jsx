import { Box, Button, Divider, Flex, Heading, SkeletonText, background } from "@chakra-ui/react";
import React from "react";
import PageLayout from "../components/PageLayout";
import bg from "../assets/images/bg_quiz.jpg";
import ShadowBox from "../components/ShadowBox";
import FormInput from "../components/form/FormInput";
export default function Signup() {
  return (
    <Box
      backgroundImage={bg}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      width="100%"
      height={"100vh"}
    >
      <PageLayout>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <ShadowBox style={{width:"50%", background:"#3ca094"}}>
            <Heading as="h2" size="lg" color="#ffb409">
              Sign Up
            </Heading>
            <form action="">
                <Flex>
                <FormInput errors={""} label={"First Name"} name={""} register={()=>{}} placeholder={"Enter First Name"} type={"text"} />
                <Divider orientation="vertical" m={"0 20px"} />
                <FormInput errors={""} label={"Last Name"} name={""} register={()=>{}} placeholder={"Enter Last Name"} type={"text"} />
                </Flex>
                <FormInput errors={""} label={"Email"} name={""} register={()=>{}} placeholder={"Enter Email"} type={"email"} />
                <FormInput errors={""} label={"Password"} name={""} register={()=>{}} placeholder={"Enter Password"} type={"password"} />
                <Button bg={"#ffb409"} color={"#fff"} width={200} mt={5}>Sign up</Button>
            </form>
          </ShadowBox>
        </Box>
      </PageLayout>
    </Box>
  );
}
