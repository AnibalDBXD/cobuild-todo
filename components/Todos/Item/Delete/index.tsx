import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import gql from "graphql-tag";
import React from "react";
import { useMutation } from "react-apollo";

const DELETE_TODO = gql`
mutation TodoDelete($id: ID!){
    todoDelete(filter: { id: $id }) {
      success
    }
  }
`;

interface IDelete{
    id: string;
    onDelete: () => void;
}

const Delete = ({id, onDelete}: IDelete): JSX.Element => {
  const [deleteTodo, { loading }] = useMutation(DELETE_TODO);

  const handleClick = (): void => {
    deleteTodo({ variables: { id } }).finally(() => onDelete());
  };
  return (
    <IconButton
      aria-label="Delete"
      colorScheme="red"
      fontSize="20px"
      icon={<DeleteIcon />}
      isLoading={loading}
      onClick={handleClick}
      variant="outline"
    />
  );
};

export default Delete;
