import { CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { GridItem, Grid, Checkbox, IconButton, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { IItem } from "../../../interfaces/todo";

const Item = ({ complete, text }: IItem): JSX.Element => {
  const [isEditing, setEditing] = useState(false);
  return (
    <Grid backgroundColor={`${complete ? "gray.300" : "transparent"}`}
      border="2px"
      borderColor="gray"
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
        <Checkbox isChecked={complete} size="lg" />
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
              placeholder="Edit task"
              textAlign="center"
            />
            : 
            <Text
              as="h3"
              onDoubleClick={(): void => setEditing(true)}
            >{text}
            </Text>
        }
      </GridItem>
      <GridItem colSpan={1}>
        <IconButton
          aria-label="Edit"
          colorScheme="gray"
          fontSize="20px"
          icon={isEditing ? <CloseIcon /> :<EditIcon />}
          onClick={(): void => setEditing(cv => !cv)}
          variant="outline"
        />
      </GridItem>
      <GridItem colSpan={1}>
        <IconButton
          aria-label="Delete"
          colorScheme="red"
          fontSize="20px"
          icon={<DeleteIcon />}
          variant="outline"
        />
      </GridItem>
    </Grid>
  );
};

export default Item;
