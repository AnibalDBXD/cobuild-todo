import type { NextPage } from "next";
import Todos from "../../components/Todos";
import { AppProvider} from '@8base/app-provider';
import useUser from "../../hooks/useUser";
import FullSpinner from "../../components/FullSpinner";

const Todo: NextPage = () => {
  const user = useUser();
  if(user === undefined){
    return <FullSpinner />;
  }
  return (
    <AppProvider onRequestError={(): null => null} onRequestSuccess={(): null => null} uri="https://api.8base.com/ckszdpaqw00jh08mh269g6m5r">
      {
        ({ loading }): JSX.Element => loading ?  <FullSpinner speed="0.5s" /> : (
          <>
            <Todos uid={user || ""} />
          </>
        )
      }
    </AppProvider>
  );
};

export default Todo;
