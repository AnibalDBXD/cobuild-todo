import { AddIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useMutation } from "react-apollo";

const ADD_TODO = gql`
  mutation TodoCreate($data: TodoCreateInput!){
    todoCreate(data: $data) {
        id
        userId
        complete
        text
    }
  }
`;

interface IAddItem{
    uid: string;
    onAdd: () => void;
}

const AddItem = ({ uid, onAdd } :IAddItem): JSX.Element => {
  const [addTodo, { loading, error }] = useMutation(ADD_TODO);
  const [value, setValue] = useState("");
  const handleAdd = (): void => {
    addTodo({ variables: { data: { text: value, complete: false, userId: uid} } })
      .finally(() => {
        onAdd();
        setValue("");
      });
  };

  return (
    <>
      <InputGroup size="lg">
        <Input
          isDisabled={loading}
          maxLength={50}
          onChange={({ target: { value } }): void => setValue(value)}
          placeholder="Create a task"
          value={value}
          variant="Filled"
        />
        <InputRightElement>
          <IconButton
            aria-label="Create task"
            colorScheme="gray"
            fontSize="20px"
            icon={<AddIcon />}
            isLoading={loading}
            onClick={handleAdd}
            variant="outline"
          />
        </InputRightElement>
      </InputGroup>
      {
        error && (
          <Alert status="error">
            <AlertIcon />
            There was an error submitting the task 😞.
            Try again later
          </Alert>
        )
      }
    </>
  );
};

export default AddItem;
