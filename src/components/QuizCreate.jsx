import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import FormInput from './form/FormInput'
import AdminInputOption from './form/AdminInputOption'
import { useForm } from 'react-hook-form';

export default function QuizCreate({onSubmit, index, handleOptions}) {
    const [options, setOptions] = useState([1, 2]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm();
      function handleDelete(option) {
        if (options.length > 2) {
          let temp = [...options];
          temp = temp.filter((o) => o != option);
          setOptions(temp);
        }
      }
  return (
    <Box
              p={5}
              mt={10}
              border="1px solid #ffb409"
              borderRadius={5}
            >
                <FormInput
                  register={register}
                  errors={errors}
                  label="Question"
                  name="question"
                  placeholder="Enter your Question here..."
                  type="text"
                />
                <Text m={"20px 0"}>Add Options</Text>
                {options.map((option) => (
                  <AdminInputOption
                    onClick={() => handleDelete(option)}
                    key={option}
                    name={`option${option}`}
                    placeholder={"type option"}
                    setValue={setValue}
                  />
                ))}
                <Box
                  border="1px solid #fff"
                  borderRadius={5}
                  mt={5}
                  textAlign="center"
                  fontSize={25}
                  onClick={() =>
                    setOptions([...options, options[options.length - 1] + 1])
                  }
                >
                  +
                </Box>
                <Button onClick={handleSubmit((data)=>onSubmit(data, index))} width="100%" mt={5} colorScheme="yellow">
                  Save
                </Button>
            </Box>
  )
}
