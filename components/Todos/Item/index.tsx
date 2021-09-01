import { GridItem, Grid, Checkbox, Text, Input, useBoolean } from "@chakra-ui/react";
import { useState } from "react";
import { IItem } from "../../../interfaces/todo";
import Delete from "./Delete";
import Edit from "./Edit";

interface IItemComponent extends IItem{
  onUpdate: () => void;
}

const Item = ({ complete, text, id, onUpdate }: IItemComponent): JSX.Element => {
  const [isEditing, setEditing] = useBoolean(false);
  const [value, setValue] = useState("");
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
        <Checkbox
          borderColor="black"
          height="2rem"
          isChecked={complete}
          size="lg"
        />
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
              placeholder="Cancel task"
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
