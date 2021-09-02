import { Button, ButtonProps } from "@chakra-ui/react";

const FormButton = ({children, ...props}: ButtonProps): JSX.Element => {
  return (
    <Button color="white" colorScheme="cyan" size="lg" {...props} type="submit">{children}</Button>
  );
};

export default FormButton;
