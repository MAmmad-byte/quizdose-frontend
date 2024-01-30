import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import ShadowBox from "../components/ShadowBox";
import FormInput from "../components/form/FormInput";
import { Box, Button, Heading} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import QuizCreate from "../components/QuizCreate";
import { postQuiz } from "../services/quizServices";
import { useNavigate } from "react-router-dom";
export default function CreateQuiz() {

  const navigate = useNavigate()
  const [quizList, setQuizList] = useState([{}]);
  const {handleSubmit, register} = useForm()

  function onSubmitQuiz(data, index) {
    quizList[index] = data
    setQuizList([...quizList])
    // console.log(quizList)
  }

  async function handleQuizPost(data){
    data.questions = quizList; 
    // console.log(data)
    const response = await postQuiz(data);
    // console.log(response.data)
    if(response.status == 200)
      return navigate("/dashboard")
    // after that it must be redirect to quiz list page. 
  }
  return (
    <Box width="100%" minHeight={"calc(100vh - 80px)"} bg={"#244743"}>
      <PageLayout >
        <ShadowBox style={{backgroundColor:"#244743"}}>
          <Heading>Create Quiz</Heading>
          <form onSubmit={handleSubmit((data)=>handleQuizPost(data))} action="" method="post">

          <FormInput
            register={register}
            errors={[]}
            label="Quiz Title"
            name="title"
            placeholder="Enter Quiz Title"
            type="text"
            />
          <FormInput
            register={register}
            errors={[]}
            label="Closed Date"
            name="closedDate"
            placeholder="Enter your Question here..."
            type="date"
            />
          {quizList.map((q, index) => (
            <QuizCreate total={quizList.length} onSubmit={onSubmitQuiz}  key={index} index={index}/>
            ))}
            <Box textAlign={"right"}>

          <Button border="1px solid #ffb409" _hover={{background:"#ffb409", color:"#fff"}} backgroundColor={"transparent"} color={"#ffb409"} fontSize={18}  mt={5} width="100%" onClick={()=>setQuizList([...quizList, {}])} >Add more questions</Button>
          <Button colorScheme="yellow" type="submit" fontSize={20} fontWeight={"600"} mt={5}  >Post Quiz</Button>
            </Box>
            </form>
        </ShadowBox>
      </PageLayout>
    </Box>
  );
}
