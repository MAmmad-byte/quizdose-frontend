import React from "react";
import ShadowBox from "../ShadowBox";
import { SkeletonText,} from "@chakra-ui/react";

export default function TextBoxSkeleton({noOfLines=2}) {
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
      <SkeletonText fontSize={"40px"} noOfLines={noOfLines}>Lorem, ipsum.</SkeletonText>

    </ShadowBox>
  );
}