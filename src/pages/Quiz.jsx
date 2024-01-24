import { Box, Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import bg from "../assets/images/quiz_bg1.jpg";
export default function Quiz() {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      backgroundImage={bg}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
    >
      <PageLayout
        styles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ShadowBox style={{ width: "100%", padding: "20px 0" }}>
          <Box
            padding={"0 20px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom="1px solid #ffb40980"
          >
            <Text>Index: 1/5</Text>
            <Text>Time Left: 13s</Text>
          </Box>
          <Box padding={"0 20px"}>
            <Text fontSize={18} fontWeight={"600"} m={"20px 0"} width={"80%"}>
              What is the capital of France?
            </Text>
            <RadioGroup>
              <Stack spacing={4}>
                <Box mt={2} borderBottom={"1px solid #ffb409"}>
                  <Radio value="1" p={"15px 10px"} width={"100%"}>
                    <Text fontWeight={"700"}>Berlin</Text>
                  </Radio>
                </Box>
                <Box mt={2} borderBottom={"1px solid #ffb409"}>
                  <Radio value="2" p={"15px 10px"} width={"100%"}>
                    <Text fontWeight={"700"}>Paris</Text>
                  </Radio>
                </Box>
                <Box mt={2} borderBottom={"1px solid #ffb409"}>
                  <Radio value="3" p={"15px 10px"} width={"100%"}>
                    <Text fontWeight={"700"}>London</Text>
                  </Radio>
                </Box>
                <Box mt={2} borderBottom={"1px solid #ffb409"}>
                  <Radio value="4" p={"15px 10px"} width={"100%"}>
                    <Text fontWeight={"700"}>Rome</Text>
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>
            <Button bg={"#ffb409"} color={"#fff"} mt={5}>
              Save and Next
            </Button>
          </Box>
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
