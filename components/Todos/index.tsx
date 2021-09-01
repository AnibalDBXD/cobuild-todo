import { Spinner, Stack,  } from "@chakra-ui/react";
import gql from "graphql-tag";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import { IItem } from "../../interfaces/todo";
import AddItem from "./AddItem";
import Item from "./Item";

interface ITodos {
  uid: string;
}

const Todos = ({ uid }: ITodos): JSX.Element => {
  //Get todos
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

  const { loading, data, refetch } = useQuery(TODO_LIST_QUERY);
  const rawItems = data?.todosList?.items;
  const [items, setItems] = useState<IItem[]>(rawItems);

  useEffect(() => {
    setItems(rawItems);
  }, [rawItems]);

  const update = useCallback(
    (): void => {
      refetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rawItems],
  );
  
  if(loading){
    <Spinner />;
  }
  return (
    <Stack marginBottom="1rem" width="90%">
      <AddItem onAdd={update} uid={uid} />
      {items?.map((item) => <Item key={item.id} {...item} /> )}
    </Stack>
  );
};

export default Todos;
  