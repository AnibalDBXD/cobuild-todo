import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { ITodo } from "../interfaces/todo";

const TODO_LIST_QUERY = gql`
query getTodo {
    todosList {
      items {
        text
        id
        complete
      }
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/ban-types
const withTodos = graphql<{}, { todosList: ITodo}>(TODO_LIST_QUERY, {
  // @ts-expect-error I dont know why typescript have problem with this
  props: ({ data }) => {
    return {
      todosList: data?.todosList?.items || []
    };
  },
});
    
export default withTodos;