import React from "react";
import { render } from "@testing-library/react";
import FormButton from "../components/Authentication/FormButton";

describe("<FormButton />", () => {
  test("should be render", () => {
    const component = render(<FormButton>submit</FormButton>);
    component.getByText("submit");
  });
});