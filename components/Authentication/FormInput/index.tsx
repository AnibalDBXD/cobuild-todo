import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { FieldProps } from "formik";
import React from "react";

interface IFormInput extends FieldProps {
  type: string;
  autoComplete: string;
}

const FormInput = ({ field, form, type, autoComplete }: IFormInput): JSX.Element  => {
  const { name } = field;
  return (
    <FormControl isInvalid={Boolean(form?.errors?.[name])} isRequired marginBottom="1rem">
      <FormLabel htmlFor={name} textTransform="capitalize">{name}</FormLabel>
      <Input
        {...field}
        autoComplete={autoComplete}
        backgroundColor="white"
        id={name}
        placeholder={name}
        type={type}
      />
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
