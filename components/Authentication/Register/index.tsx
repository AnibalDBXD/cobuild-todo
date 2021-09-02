import { Form, Formik, Field } from "formik";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { validateConfirmPassword, validateEmail, validatePassword } from "../utils";

const Register = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmedPassword: '' }}
      onSubmit={(values, { setSubmitting }): void => {
        setSubmitting(true);
      }}
    >
      {({
        values: { password},
        handleSubmit,
        isSubmitting,
      }): JSX.Element => (
        <Form onSubmit={handleSubmit}>
          <Field component={FormInput} name="email" validate={validateEmail} />
          <Field component={FormInput} name="password" validate={validatePassword} />
          <Field
            component={FormInput}
            name="confirm password"
            validate={(value: string): string => validateConfirmPassword(value, password)}
          />
          <FormButton isLoading={isSubmitting}>Log in</FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
