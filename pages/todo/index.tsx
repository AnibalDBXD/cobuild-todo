import type { NextPage } from "next";
import { Spinner } from "@chakra-ui/react";
import Todos from "../../components/Todos";
import { AppProvider} from '@8base/app-provider';
import useUser from "../../hooks/useUser";

const Todo: NextPage = () => {
  const user = useUser();
  if(user === undefined){
    return <Spinner />;
  }
  return (
    <AppProvider onRequestError={(): null => null} onRequestSuccess={(): null => null} uri="https://api.8base.com/ckszdpaqw00jh08mh269g6m5r">
      {
        ({ loading }): JSX.Element => loading ?  <Spinner /> : (
          <>
            <Todos uid={user || ""} />
          </>
        )
      }
    </AppProvider>
  );
};

export default Todo;
