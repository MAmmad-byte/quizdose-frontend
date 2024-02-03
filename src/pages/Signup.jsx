import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
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
import Loading from "../components/Loading";

const userSchema = z.object({
    firstName: z.string().min(3).max(55),
    lastName: z.string().min(3).max(55),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
})
.superRefine(({password, confirmPassword}, ctx)=>{
  if(password!==confirmPassword){
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message:"Password does not match",
      path:["confirmPassword"]
    })
  }
})


export default function Signup() {
  const navigate = useNavigate();
    const [resError, setResError] = useState("")
    const [loader, setLoader] = useState(false)
    const { register, handleSubmit , formState: { errors }} = useForm({
        resolver: zodResolver(userSchema),
        defaultValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
      })


    async  function onSubmit(data){
        try {   
          setLoader(true)
          const response  = await userServices.signup({
            firstName:data.firstName, 
            lastName:data.lastName,
            email:data.email, 
            password:data.password
          })
          console.log(response.data)
          saveUser(response.data)
          setLoader(false)
          // localStorage.setItem("auth-token", response.data)
          // window.location = "/dashboard"
      } catch (error) { 
        // console.log(error.response.data)
          setResError(error.response.data)
          setLoader(false)
      } 
      }
      useEffect(() => {
        if(validateUser())
          navigate("/dashboard")
      }, [])
      

  return (
    <Box
      backgroundImage={bg}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      width="100%"
      height={"calc(100vh - 30px)"}
    >
      {loader && <Loading />}
      <PageLayout>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent={{xl:"flex-end", base:"center"}}
        >
          <ShadowBox style={{background:"#244743"}} width={{lg:"50%", base:"100%"}}>
            <Heading as="h2" size="lg" color="#ffb409">
              Sign Up
            </Heading>
            {resError &&<Text color={"#ff9c9c"}>{resError}</Text>}
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <Flex>
                <FormInput errors={errors} label={"First Name"} name={"firstName"} register={register} placeholder={"Enter First Name"} type={"text"} />
                <Divider orientation="vertical" m={"0 20px"} />
                <FormInput errors={errors} label={"Last Name"} name={"lastName"} register={register} placeholder={"Enter Last Name"} type={"text"} />
                </Flex>
                <FormInput errors={errors} label={"Email"} name={"email"} register={register} placeholder={"Enter Email"} type={"email"} />
                <FormInput errors={errors} label={"Password"} name={"password"} register={register} placeholder={"Enter Password"} type={"password"} />
                <FormInput errors={errors} label={"Re-type Password"} name={"confirmPassword"} register={register} placeholder={"Enter Password Again"} type={"password"} />
                <Button type="submit" bg={"#ffb409"} color={"#fff"} width={200} mt={5}>Sign up</Button>
            </form>
          </ShadowBox>
        </Box>
      </PageLayout>
    </Box>
  );
}
