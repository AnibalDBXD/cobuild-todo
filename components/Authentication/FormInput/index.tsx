import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { FieldProps } from "formik";
import React from "react";

const FormInput = ({ field, form }: FieldProps): JSX.Element  => {
  const { name } = field;
  const isPassword = name.match("password");
  return (
    <FormControl isInvalid={Boolean(form?.errors?.[name])} isRequired marginBottom="1rem">
      <FormLabel htmlFor={name} textTransform="capitalize">{name}</FormLabel>
      <Input type={isPassword ? "password" : "text"} {...field} backgroundColor="white" id={name} placeholder={name} />
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
