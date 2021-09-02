import React from "react";
import { render } from "@testing-library/react";
import FormInput from "../components/Authentication/FormInput";
import { Field, Formik } from "formik";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = (onSubmit: any): JSX.Element => {
  return (
    <Formik
      initialValues={{ test: ''}}
      onSubmit={(): void => {
        onSubmit();
      }}
    >
      <Field component={FormInput} name="test" />
    </Formik>
  );
};

describe("<FormInput />", () => {
  test("should be render", () => {
    const { getByPlaceholderText, getByText } = render(<Input onSubmit={jest.fn()} />);
    getByPlaceholderText("test");
    getByText("test");
  });
});