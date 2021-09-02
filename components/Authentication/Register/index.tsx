import { Alert, AlertIcon } from "@chakra-ui/react";
import { Form, Formik, Field, FieldProps } from "formik";
import React, { useState } from "react";
import { createEmailUser } from "../../../firebase";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { validateConfirmPassword, validateEmail, validatePassword } from "../utils";

const Register = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmedPassword: '' }}
      onSubmit={({ email, password }, { setSubmitting }): void => {
        setSubmitting(true);
        createEmailUser(email, password)
          .catch(({ message }) => setErrorMessage(message))
          .finally(() => setSubmitting(false));
      }}
    >
      {({
        values: { password},
        handleSubmit,
        isSubmitting,
      }): JSX.Element => (
        <Form onSubmit={handleSubmit}>
          {errorMessage && (
            <Alert marginBottom="1rem" status="error">
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}
          <Field component={FormInput} name="email" validate={validateEmail} />
          <Field
            component={(props: FieldProps): JSX.Element =>
              <FormInput {...props} autoComplete="new-password" type="password" />}
            name="password"
            validate={validatePassword}
          />
          <Field
            component={(props: FieldProps): JSX.Element =>
              <FormInput {...props} autoComplete="new-password" type="password" />}
            name="confirm password"
            validate={(value: string): string => validateConfirmPassword(value, password)}
          />
          <FormButton isLoading={isSubmitting}>Sign in</FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
