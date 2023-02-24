import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export const ProductCard = ({ el }) => {
  return (
    <Card maxW="sm" borderRadius={"none"}>
      <CardBody>
        <Image
          src={el.image}
          alt="power brand"
          borderRadius="none"
          boxSize="120px"
        />
        <Stack mt="6" spacing="3">
          <Text align={"left"} fontSize="sm" lineHeight={1}>
            {el.title}
          </Text>
          <Text align={"left"} fontSize="sm" lineHeight={1}>
            {el.by}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <Text align={"right"} fontSize="md" as="b" lineHeight={1} color="red">
        {el.price}
      </Text>
    </Card>
  );
};
