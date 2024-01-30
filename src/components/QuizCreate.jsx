import { Box, Button, Text } from '@chakra-ui/react'
import FormInput from './form/FormInput'
import AdminInputOption from './form/AdminInputOption'
import { useForm } from 'react-hook-form';

export default function QuizCreate({onSubmit, index, total}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm();
  return (
    <Box
              p={5}
              mt={10}
              border="1px solid #ffb409"
              borderRadius={5}
            >
              <Text>{index+1}/{total}</Text>
                <FormInput
                  register={register}
                  errors={errors}
                  label="Question"
                  name="question"
                  placeholder="Enter your Question here..."
                  type="text"
                />
                <Text m={"20px 0"}>Add Options</Text>
                  <AdminInputOption
                    name="option1"
                    placeholder={"type option"}
                    setValue={setValue}
                  />
                  <AdminInputOption
                    name="option2"
                    placeholder={"type option"}
                    setValue={setValue}
                  />
                  <AdminInputOption
                    name="option3"
                    placeholder={"type option"}
                    setValue={setValue}
                  />
                  <AdminInputOption
                    name="option4"
                    placeholder={"type option"}
                    setValue={setValue}
                  />
                <Button onClick={handleSubmit((data)=>onSubmit(data, index))} width="100%" mt={5} colorScheme="yellow">
                  Save
                </Button>
            </Box>
  )
}
