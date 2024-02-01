import { Box, Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import bg from "../assets/images/homeBG.jpg";
import { attemptQuiz, fetchOpenQuiz } from "../services/quizServices";
import {  useNavigate, useParams } from "react-router-dom";
export default function Quiz() {
  const navigate = useNavigate()
  const [select, setSelect] = useState({})
  const [quiz, setQuiz] = useState({})
  const {id} = useParams()
  useEffect(() => {
    fetchQuizData(id)
  }, [])
  
  async function fetchQuizData(id){
    const response = await fetchOpenQuiz(id)
    // console.log(response.data)
    setQuiz(response.data)
  }


  async function handleSubmit(e){
    e.preventDefault(); 
    const response = await attemptQuiz(id, {answers:{
      question_id:quiz._id,
      option_id:select
    }})
    console.log(response.data)
    if(response.status == 201)
      setQuiz(response.data)
    if(response.status == 204)
      navigate("/dashboard")

  }

  return (
    <Box
      width={"100%"}
      height={"calc(100vh - 30px)"}
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
        <ShadowBox style={{ width: "100%", padding: "20px 0", backgroundColor:"#244743" }}>
          <Box
            padding={"0 20px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderBottom="1px solid #ffb40980"
          >
            <Text>Index: 1/5</Text>
            <Text>Time Left: 00</Text>
          </Box>
          <Box padding={"0 20px"}>
            <Text fontSize={18} fontWeight={"600"} m={"20px 0"} width={"80%"}>
              {quiz.question}
            </Text>
            <form onSubmit={handleSubmit} action="" method="post">
              <RadioGroup>
                <Stack spacing={4}>
                  {quiz.option1 && (<Box mt={2} borderBottom={"1px solid #ffb409"}>
                    <Radio onChange={(e)=>setSelect(e.currentTarget.value)} value={quiz.option1._id || "1"}  p={"15px 10px"} width={"100%"}>
                      <Text fontWeight={"700"}>{quiz.option1.label}</Text>
                    </Radio>
                  </Box>)}
                  {quiz.option2 && (<Box mt={2} borderBottom={"1px solid #ffb409"}>
                    <Radio onChange={(e)=>setSelect(e.currentTarget.value)} value={quiz.option2._id|| "2"}  p={"15px 10px"} width={"100%"}>
                      <Text fontWeight={"700"}>{quiz.option2.label}</Text>
                    </Radio>
                  </Box>)}
                  {quiz.option3 && (<Box mt={2} borderBottom={"1px solid #ffb409"}>
                    <Radio onChange={(e)=>setSelect(e.currentTarget.value)} value={quiz.option3._id|| "3"}  p={"15px 10px"} width={"100%"}>
                      <Text fontWeight={"700"}>{quiz.option3.label}</Text>
                    </Radio>
                  </Box>)}
                  {quiz.option4 && (<Box mt={2} borderBottom={"1px solid #ffb409"}>
                    <Radio onChange={(e)=>setSelect(e.currentTarget.value)} value={quiz.option4._id|| "4"} p={"15px 10px"}  width={"100%"}>
                      <Text fontWeight={"700"}>{quiz.option4.label}</Text>
                    </Radio>
                  </Box>)}
                </Stack>
              </RadioGroup>
              <Button type="submit" bg={"#ffb409"} color={"#fff"} mt={5}>
                Save and Next
              </Button>
            </form>
          </Box>
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
