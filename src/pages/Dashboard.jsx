import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import PageLayout from '../components/PageLayout'
import ShadowBox from '../components/ShadowBox'

export default function Dashboard() {
  return (
    <Box minHeight="100vh" width="100%" bg={"#3ca094"} >
        <PageLayout>
            <ShadowBox style={{marginTop:"20px", }} >
                <Heading>Hello</Heading>
            </ShadowBox>
        </PageLayout>
    </Box>
  )
}
