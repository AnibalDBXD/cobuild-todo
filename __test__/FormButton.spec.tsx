import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormButton from "../components/Authentication/FormButton";

describe("<FormButton />", () => {
  test("should be render", () => {
    const component = render(<FormButton>submit</FormButton>);
    component.getByText("submit");
  });
  test("should call onClick function", () => {
    const mockSubmit = jest.fn();
    const component = render(
      <FormButton onClick={mockSubmit}>submit</FormButton>
    );
    fireEvent.click(component.getByText("submit"));
    expect(mockSubmit).toBeCalledTimes(1);
  });
});