import { Box, Text } from "@chakra-ui/react";
import compose from "lodash/flowRight";
import React from "react";
import withTodos from "../../HOCs/withTodos";
import { IItem } from "../../interfaces/todo";

const Todos = ({ todos }: { todos: IItem[]}): JSX.Element => {
  return (
    <Box>
      {todos?.map(({ text }) => {
        <Text>{text}</Text>;
      })}
    </Box>
  );
};
  
export default compose(withTodos)(Todos);
  