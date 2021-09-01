import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { GridItem, Grid, Checkbox, IconButton, Text } from "@chakra-ui/react";
import { IItem } from "../../../interfaces/todo";

const Item = ({ complete, text }: IItem): JSX.Element => {
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
      <GridItem colSpan={4}>
        <Text
          as="h3"
          fontSize="1.5rem"
          fontWeight="bold"
          textAlign="center"
        >{text}
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <IconButton
          aria-label="Edit"
          colorScheme="gray"
          fontSize="20px"
          icon={<EditIcon />}
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
