import { FC } from "react";
import { Flex } from "@chakra-ui/react";

const Layout: FC = ({ children }) => {
  return (
    <Flex
      backgroundColor="gray.100"
      flexDirection="column"
      minHeight="100vh"
    >
      {children}
    </Flex>
  );
};

export default Layout;
