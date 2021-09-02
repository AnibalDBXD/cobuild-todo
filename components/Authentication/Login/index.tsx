import { Alert, AlertIcon } from "@chakra-ui/react";
import { Form, Formik, Field, FieldProps } from "formik";
import { useState } from "react";
import { loginWithEmail } from "../../../firebase";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { validateEmail, validatePassword } from "../utils";

const Login = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }, { setSubmitting }): void => {
        setSubmitting(true);
        loginWithEmail(email, password)
          .catch(({ message }) => setErrorMessage(message))
          .finally(() => setSubmitting(false));
      }}
    >
      {({
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
          <Field name="password" validate={validatePassword}>
            {(props: FieldProps): JSX.Element => <FormInput {...props} autoComplete="current-password" type="password" />}
          </Field>
          <FormButton isLoading={isSubmitting}>Log in</FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
