import { GridItem, Grid, Checkbox, Text, Input, useBoolean, Spinner } from "@chakra-ui/react";
import gql from "graphql-tag";
import { useState } from "react";
import { useMutation } from "react-apollo";
import { IItem } from "../../../interfaces/todo";
import Delete from "./Delete";
import Edit from "./Edit";

interface IItemComponent extends IItem{
  onUpdate: () => void;
}

const TOGGLE_TODO = gql`
mutation TodoToggle($id: ID!, $complete: Boolean!) {
  todoUpdate(filter: { id: $id }, data: {
      complete: $complete
  }) {
    id
    complete
  }
}
`;

const Item = ({ complete, text, id, onUpdate }: IItemComponent): JSX.Element => {
  const [isEditing, setEditing] = useBoolean(false);
  const [value, setValue] = useState("");

  const [toggleTodo, { loading }] = useMutation(TOGGLE_TODO);

  return (
    <Grid backgroundColor={`${complete ? "gray.300" : "transparent"}`}
      border="2px"
      borderColor="gray"
      data-testId={text}
      gap={4}
      padding=".5rem"
      templateColumns="repeat(7, 1fr)"
    >
      <GridItem
        alignItems="center"
        colSpan={1}
        display="flex"
        justifyContent="center"
      >
        {
          loading ? <Spinner /> : (
            <Checkbox
              borderColor="black"
              height="2rem"
              isChecked={complete}
              onChange={(): void => {
                toggleTodo({ variables: {id, complete: !complete}}).finally(onUpdate);
              }}
              size="lg"
            />
          )
        }
      </GridItem>
      <GridItem colSpan={4}
        fontSize="1.5rem"
        fontWeight="bold"
        textAlign="center"
      >
        {
          isEditing ?
            <Input
              fontSize="1.5rem"
              fontWeight="bold"
              onChange={({ target: { value } }): void => setValue(value)}
              placeholder="new Task text"
              textAlign="center"
            />
            :
            <Text
              as="h3"
              onDoubleClick={setEditing.on}
            >{text}
            </Text>
        }
      </GridItem>
      <GridItem colSpan={1}>
        <Edit
          id={id}
          isEditing={isEditing}
          onEdit={onUpdate}
          setEditing={setEditing}
          text={value}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <Delete id={id} onDelete={onUpdate} />
      </GridItem>
    </Grid>
  );
};

export default Item;
