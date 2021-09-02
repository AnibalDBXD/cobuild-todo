import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import gql from "graphql-tag";
import React from "react";
import { useMutation } from "react-apollo";

interface IEdit {
    isEditing: boolean;
    setEditing: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
    id: string;
    onEdit: () => void;
    text: string;
}

const EDIT_TODO = gql`
  mutation TodoEdit($id: ID!, $text: String!) {
    todoUpdate(filter: { id: $id }, data: {
        text: $text
  }){
    id
  }
  }
`;

const Edit = ({ id, text, isEditing, setEditing, onEdit }: IEdit): JSX.Element => {
  const [editTodo, { loading }] = useMutation(EDIT_TODO);

  const handleClick = (): void => {
    setEditing.toggle();
    if(isEditing){
      editTodo({ variables: { id, text } })
        .finally(() => {
          onEdit();
          setEditing.off();
        });
    }
  };

  return (
    <IconButton
      aria-label={isEditing ? "Submit" :"Edit"}
      colorScheme={isEditing ? "green" :"gray"}
      fontSize="20px"
      icon={isEditing ? <CheckIcon /> :<EditIcon />}
      isLoading={loading}
      onClick={handleClick}
      variant="outline"
    />
  );
};

export default Edit;
