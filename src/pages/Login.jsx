import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import bg from "../assets/images/login_bg.jpg";
import ShadowBox from "../components/ShadowBox";
import FormInput from "../components/form/FormInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import userServices from "../services/userServices";
import { saveUser, validateUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";

const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255)
})


export default function Login() {
  const navigate = useNavigate();
    const [resError, setResError] = useState("")
    const { register, handleSubmit , formState: { errors }} = useForm({
        resolver: zodResolver(userSchema),
        defaultValues:{
            email:"",
            password:""
        }
      })

async function onSubmit(data){
    try {   
        const response  = await userServices.login({email:data.email, password:data.password})
        saveUser(response.data)
    } catch (error) { 
        setResError(error.response.data)
    }   
}
useEffect(() => {
  if(validateUser()){
    return navigate("/dashboard")
  }
}, [])
  return (
    <Box
      backgroundImage={bg}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      width="100%"
      height={"calc(100vh - 80px)"}
    >
      <PageLayout>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent={{xl:"flex-end", base:"center"}}
        >
          <ShadowBox style={{background:"#244743"}} width={{lg:"50%", base:"100%"}}>
            <Heading as="h2" size="lg" color="#ffb409">
              Welcome back
            </Heading>
            {resError &&<Text color={"#ff9c9c"}>{resError}</Text>}
            <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
                <FormInput errors={errors} label={"Email"} name={"email"} register={register} placeholder={"Enter Email"} type={"email"} />
                <FormInput errors={errors} label={"Password"} name={"password"} register={register} placeholder={"Enter Password"} type={"password"} />
                <Button type="submit" bg={"#ffb409"} width={200} mt={5}>Login</Button>
            </form>
          </ShadowBox>
        </Box>
      </PageLayout>
    </Box>
  );
}
