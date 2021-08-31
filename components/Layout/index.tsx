import { FC } from "react";
import { Flex } from "@chakra-ui/react";

const Layout: FC = ({ children }) => {
  return (
    <Flex
      backgroundColor="gray.100"
      flexDirection="column"
      minHeight="100vh"
      minWidth="100vw"
      padding={1}
    >
      {children}
    </Flex>
  );
};

export default Layout;
