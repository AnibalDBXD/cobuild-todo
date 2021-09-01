import { Box, Spinner, Text } from "@chakra-ui/react";
import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import { IItem } from "../../interfaces/todo";

interface ITodos {
  uid: string;
}


const Todos = ({ uid }: ITodos): JSX.Element => {
  const TODO_LIST_QUERY = gql`
  query{
    todosList(filter: {userId: {equals: "${uid}"}}){
      items{
        id
        userId
        text
        complete
      }
    }
  }
  `;

  const { loading, data } = useQuery(TODO_LIST_QUERY);
  const items: IItem[] = data?.todosList?.items;

  if(loading){
    <Spinner />;
  }
  return (
    <Box>
      {items?.map(({ text, id }) => <Text key={id}>{text}</Text> )}
    </Box>
  );
};

export default Todos;
  