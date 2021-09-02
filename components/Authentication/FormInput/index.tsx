import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { FieldProps } from "formik";
import React from "react";

const FormInput = ({ field, form }: FieldProps): JSX.Element  => {
  const { name } = field;
  return (
    <FormControl isInvalid={Boolean(form?.errors?.[name])} isRequired marginBottom="1rem">
      <FormLabel htmlFor={name} textTransform="capitalize">{name}</FormLabel>
      <Input {...field} backgroundColor="white" id={name} placeholder={name} />
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
