import type { NextPage } from "next";
import Todos from "../../components/Todos";
import { AppProvider} from '@8base/app-provider';
import useUser from "../../hooks/useUser";
import FullSpinner from "../../components/FullSpinner";
import { Button, Flex, Heading, useBoolean } from "@chakra-ui/react";
import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { signOut } from "../../firebase";

const Todo: NextPage = () => {
  const user = useUser();
  const [isLoading, setLoading] = useBoolean(false);
  if(user === undefined){
    return <FullSpinner />;
  }

  const handleSignOut = (): void => {
    setLoading.on();
    signOut().finally(() => setLoading.off);
  };
  return (
    <AppProvider onRequestError={(): null => null} onRequestSuccess={(): null => null} uri="https://api.8base.com/ckszdpaqw00jh08mh269g6m5r">
      {
        ({ loading }): JSX.Element => loading ?  <FullSpinner speed="0.5s" /> : (
          <Flex
            alignItems="center"
            flexDirection="column"
            gridGap="1rem"
            justifyContent="center"
            minHeight="50vh"
            width="100%"
          >
            <Heading
              as="h1"
              bgClip="text"
              bgGradient="linear(to-l, gray.900, gray.500)"
              fontSize="6xl"
              fontWeight="extrabold"
            >TodoApp
            </Heading>
            <Button
              colorScheme="blackAlpha"
              fontWeight="bold"
              isLoading={isLoading}
              left="0"
              margin="2rem"
              onClick={handleSignOut}
              position="fixed"
              rightIcon={<ArrowBackIcon />}
              top="0"
              variant="outline"
            >
              Sign out
            </Button>
            <Todos uid={user || ""} />
          </ Flex>
        )
      }
    </AppProvider>
  );
};

export default Todo;
