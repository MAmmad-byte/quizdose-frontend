import { Box, Text } from "@chakra-ui/react";
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
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              corrupti fugit totam possimus ducimus repellendus assumenda unde
              fugiat eveniet placeat.
            </Text>
          </Box>
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
