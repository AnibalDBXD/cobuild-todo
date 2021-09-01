import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import Todos from "../../components/Todos";
import { AppProvider} from '@8base/app-provider';
import useUser from "../../hooks/useUser";

const Todo: NextPage = () => {
  const user = useUser();
  return (
    <AppProvider onRequestError={(): null => null} onRequestSuccess={(): null => null} uri="https://api.8base.com/ckszdpaqw00jh08mh269g6m5r">
      {
        ({ loading }): JSX.Element => loading ? <h1>Loading</h1> : (
          <>
            <Todos />
            <Text>{user || "Cargando..."}</Text>
          </>
        )
      }
    </AppProvider>
  );
};

export default Todo;
