import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function AdminInputOption({
  onClick,
  setValue,
  name,
  type,
  placeholder,
}) {
  const [checked, setChecked] = useState(false);
  const [optionData, setOptionData] = useState({
    correct: false,
    name: "",
  });
  return (
    <Box
      mt={5}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex width="300px">
        <Button onClick={onClick} colorScheme="red" size={"sm"}>
          Delete
        </Button>
        <Checkbox
          onChange={() => {
            setChecked(!checked);
            setValue(name, {name:optionData.name ,correct:optionData.correct});
            setOptionData({ ...optionData, correct: checked });
          }}
          value={checked}
          ml={5}
        >
          Checkbox
        </Checkbox>
      </Flex>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={(data) => {
          setValue(name, {name: data.currentTarget.value, correct:checked});
          setOptionData({ ...optionData, name: data.currentTarget.value });
        }}
      />
    </Box>
  );
}
