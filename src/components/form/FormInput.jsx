import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export default function FormInput({name, type, label, register,placeholder, errors}) {
    let color = errors[name] && "red"
  return (
    <FormControl background={"transparent"}    mt={5} color={"#ffb409"}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        borderColor={color}
        focusBorderColor="#ffb409"
        background={"transparent"}
        color="#ffb409"
        border="1px solid #ffb409"
        _placeholder={{color:"#ffb409"}}
        _hover={{border:"1px solid #ffb409"}}
      />
      {errors[name] && (
        <FormHelperText color={"#ff9c9c"}>
          {errors[name]?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}
