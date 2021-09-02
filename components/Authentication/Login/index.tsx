import { Form, Formik, Field } from "formik";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { validateEmail, validatePassword } from "../utils";

const Login = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }): void => {
        setSubmitting(true);
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
      }): JSX.Element => (
        <Form onSubmit={handleSubmit}>
          <Field component={FormInput} name="email" validate={validateEmail} />
          <Field component={FormInput} name="password" validate={validatePassword} />
          <FormButton isLoading={isSubmitting}>Log in</FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
