import { Box, Button, Heading, SkeletonText, background } from "@chakra-ui/react";
import React from "react";
import PageLayout from "../components/PageLayout";
import bg from "../assets/images/bg_quiz.jpg";
import ShadowBox from "../components/ShadowBox";
import FormInput from "../components/form/FormInput";
export default function Login() {
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
              Welcome back
            </Heading>
            <form action="">
                <FormInput errors={""} label={"Email"} name={""} register={()=>{}} placeholder={"Enter Email"} type={"email"} />
                <FormInput errors={""} label={"Password"} name={""} register={()=>{}} placeholder={"Enter Password"} type={"password"} />
                <Button bg={"#ffb409"} width={200} mt={5}>Login</Button>
            </form>
          </ShadowBox>
        </Box>
      </PageLayout>
    </Box>
  );
}
