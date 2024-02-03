import { Box, Flex, Heading, SkeletonText, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import { getUserInfo, validateUser } from "../services/authServices";
import { fetchOpenQuizList } from "../services/quizServices";
import { Link } from "react-router-dom";
import { fetchResult } from "../services/resultServices";
import ShadowBoxSkeleton from "../components/sekeleton/ShadowBoxSkeleton";

const total = { obtain: 0, total: 0 };
export default function Dashboard() {
  const [openQuizList, setOpenQuizList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (!validateUser()) window.location = "/";
    else {
      setUser(getUserInfo());
      fetchQuizDataList();
    }
  }, []);
  async function fetchQuizDataList() {
    setLoading(true);
    const response = await fetchOpenQuizList();
    setOpenQuizList(response.data);
    const res = await fetchResult();
    // console.log(res.data)
    setResult(res.data.result);
    total.total = res.data.total;
    total.obtain = res.data.obtainScore;
    setLoading(false);
  }
  return (
    <Box
      minHeight={"calc(100vh - 30px)"}
      display={"flex"}
      pt={70}
      pb={10}
      alignItems={"center"}
      justifyContent={"center"}
      width="100%"
      bg={"#244743"}
    >
      <PageLayout
        styles={{
          width: "100%",
        }}
      >
        <ShadowBox style={{ backgroundColor: "#244743" }}>
          <Heading as={"h2"}>WelCome, {user.firstName}</Heading>
          <Flex mt={10} alignItems={"center"} justifyContent={"start"}>
            <ShadowBox style={{ backgroundColor: "#244743" }}>
              { loading ?<SkeletonText height={"30px"} noOfLines={1} width={150} />:
              <Text color={"#ffb409"} fontSize={20}>
                Total Attempt: {result.length}
              </Text>}
            </ShadowBox>
            <ShadowBox style={{ marginLeft: "20px", bg: "#ffb409" }}>
            { loading ?<SkeletonText speed={"0.1s"} height={"30px"} noOfLines={1} width={150} />:
              <Text fontSize={20}>
                Total Score: {total.obtain}/{total.total}
              </Text>}
            </ShadowBox>
          </Flex>
          <Text fontSize={25} mt={10} mb={5} fontWeight={700}>
            Open Quizes
          </Text>
          {openQuizList.length > 0 && !loading ? (
            openQuizList.map((quiz) => (
              <Link key={quiz._id} to={`/user/quiz/${quiz._id}`}>
                <ShadowBox
                  style={{ marginTop: "20px", backgroundColor: "#244743" }}
                >
                  <Text fontSize={18} fontWeight={600}>
                    {quiz.title}
                  </Text>
                </ShadowBox>
              </Link>
            ))
          ) : (
            !loading &&<Text>No Quiz Available</Text>
          )}
          {result.length > 0 && (
            <Text fontSize={25} mt={10} mb={5} fontWeight={700}>
              Results
            </Text>
          )}
          {result.map((r) => (
            // <Link key={r._id}  to={`/user/quiz/${quiz._id}`}>
            <ShadowBox
              key={r._id}
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#244743",
              }}
            >
              <Text fontSize={18} fontWeight={600}>
                {r.quiz_id.title}
              </Text>

              <ShadowBox
                style={{ padding: "10px", backgroundColor: "#244743" }}
              >
                <Text color={"#ffb409"} fontSize={15}>
                  Score: {r.obtainedScore}/{r.totalScore}
                </Text>
              </ShadowBox>
            </ShadowBox>
            // </Link>
          ))}
          {loading && (
            <>
              <ShadowBoxSkeleton /> <ShadowBoxSkeleton />
              <ShadowBoxSkeleton />
            </>
          )}
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
