import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const AdminProductData = ({ el }) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={el.image}
          alt="product"
          borderRadius="md"
          boxSize="150px"
          alignItems="center"
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm" noOfLines={1}>
            {el.name}
          </Heading>
          <Text fontSize="sm" as="b">
            Category: <span>{el.category}</span>{" "}
          </Text>
          <Text fontSize="sm">Offered By:{el.by}</Text>
          <Text fontSize="sm">Price: ₹{el.price}</Text>
          <Text fontSize="sm">Discount: {el.discount}%</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="20">
          <Button colorScheme="teal" size="sm">
            Edit
          </Button>
          <Button colorScheme="red" size="sm">
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
