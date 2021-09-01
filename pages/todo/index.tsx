import type { NextPage } from "next";
import Todos from "../../components/Todos";
import { AppProvider} from '@8base/app-provider';
import useUser from "../../hooks/useUser";
import FullSpinner from "../../components/FullSpinner";
import { Flex, Heading } from "@chakra-ui/react";

const Todo: NextPage = () => {
  const user = useUser();
  if(user === undefined){
    return <FullSpinner />;
  }
  return (
    <AppProvider onRequestError={(): null => null} onRequestSuccess={(): null => null} uri="https://api.8base.com/ckszdpaqw00jh08mh269g6m5r">
      {
        ({ loading }): JSX.Element => loading ?  <FullSpinner speed="0.5s" /> : (
          <Flex
            alignItems="center"
            flexDirection="column"
            gridGap="1rem"
            height="50vh"
            justifyContent="center"
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
            <Todos uid={user || ""} />
          </ Flex>
        )
      }
    </AppProvider>
  );
};

export default Todo;
