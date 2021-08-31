import type { NextPage } from "next";
import Todos from "../../components/Todos";
import { AppProvider} from '@8base/app-provider';

const Todo: NextPage = () => {
  return (
    <AppProvider onRequestError={(): null => null} onRequestSuccess={(): null => null} uri="https://api.8base.com/ckszdpaqw00jh08mh269g6m5r">
      {
        ({ loading }): JSX.Element => loading ? <h1>Loading</h1> : <Todos />
      }
    </AppProvider>
  );
};

export default Todo;
