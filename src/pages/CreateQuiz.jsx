import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import FormInput from "../components/form/FormInput";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import QuizCreate from "../components/QuizCreate";
export default function CreateQuiz() {

  const [quizList, setQuizList] = useState([{}]);
  const {handleSubmit, register} = useForm()

  function onSubmitQuiz(data, index) {
    quizList[index] = data
    setQuizList([...quizList])
    console.log(quizList)
  }

  function handleQuizPost(data){
    data.questions = quizList; 
    console.log(data)
  }
  return (
    <Box width="100%" minHeight={"100vh"} bg={"teal"}>
      <PageLayout>
        <ShadowBox>
          <Heading>Create Quiz</Heading>
          <form onSubmit={handleSubmit((data)=>handleQuizPost(data))} action="" method="post">

          <FormInput
            register={register}
            errors={[]}
            label="Closed Date"
            name="closedDate"
            placeholder="Enter your Question here..."
            type="date"
            />
          {quizList.map((q, index) => (
            <QuizCreate onSubmit={onSubmitQuiz}  key={index} index={index}/>
            ))}
          <Button fontSize={18}  mt={5} width="100%" onClick={()=>setQuizList([...quizList, {}])} >Add more questions</Button>
          <Button type="submit" fontSize={20} fontWeight={"600"} mt={5} width="100%" >Post Quiz</Button>
            </form>
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
