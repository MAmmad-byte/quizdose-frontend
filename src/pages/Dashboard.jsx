import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'
import ShadowBox from '../components/ShadowBox'
import { getUserInfo, validateUser } from '../services/authServices'

export default function Dashboard() {
  const [user, setUser] = useState({})
  useEffect(() => {
    if(!validateUser())
      window.location = "/"
    else
    setUser(getUserInfo())
  }, [])
  
  return (
    <Box minHeight="100vh" width="100%" bg={"#3ca094"} >
        <PageLayout>
            <ShadowBox style={{marginTop:"20px", }} >
                <Heading as={"h2"}>WelCome, {user.firstName}</Heading>
                <Flex mt={10} alignItems={"center"} justifyContent={"start"}>
                  <ShadowBox  ><Text color={"#ffb409"} fontSize={20}>Total Attempt: 24</Text></ShadowBox>
                  <ShadowBox style={{marginLeft:"20px", bg:"#ffb409"}} ><Text fontSize={20}>Total Score: 876/1100</Text></ShadowBox>
                </Flex>
                <Text fontSize={25} mt={10} mb={5} fontWeight={700}>Open Quizes</Text>
                <ShadowBox style={{marginTop:"20px", cursor:"pointer"}}><Text fontSize={18} fontWeight={600}>Geography Basics</Text></ShadowBox>
                <ShadowBox style={{marginTop:"20px", cursor:"pointer"}}><Text fontSize={18} fontWeight={600}>Movie Trivia</Text></ShadowBox>
                <ShadowBox style={{marginTop:"20px", cursor:"pointer"}}><Text fontSize={18} fontWeight={600}>Science for Beginners</Text></ShadowBox>
            </ShadowBox>
        </PageLayout>
    </Box>
  )
}
