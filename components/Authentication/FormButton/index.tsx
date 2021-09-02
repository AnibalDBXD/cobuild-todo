import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IFormButton {
    isLoading?: boolean;
    children: ReactNode;
}

const FormButton = ({children, ...props}: IFormButton): JSX.Element => {
  return (
    <Button color="white" colorScheme="cyan" size="lg" {...props} type="submit">{children}</Button>
  );
};

export default FormButton;
