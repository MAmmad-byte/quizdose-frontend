import React from "react";
import ShadowBox from "../ShadowBox";
import { Skeleton, SkeletonText, Text } from "@chakra-ui/react";

export default function ShadowBoxSkeleton() {
  return (
    <ShadowBox
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#244743",
      }}
    >
      <Skeleton speed={"0.2s"} width={"50%"} noOfLines={1}  height='20px'></Skeleton>

    </ShadowBox>
  );
}
