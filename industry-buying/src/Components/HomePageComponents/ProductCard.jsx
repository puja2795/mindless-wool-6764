import React from "react";

import { Card, CardBody, Image, Stack, Text, Divider } from "@chakra-ui/react";

export const ProductCard = ({ el }) => {
  return (
    <Card
      maxW="sm"
      borderRadius={"none"}
      _hover={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <CardBody>
        <Image
          src={el.image}
          alt="power brand"
          borderRadius="none"
          boxSize="120px"
        />
        <Stack mt="6" spacing="3">
          <Text align={"left"} fontSize="sm" lineHeight={1.5}>
            {el.title.slice(0, 30)}
          </Text>
          <Text align={"left"} fontSize="xs" color="green.300">
            {el.by}
          </Text>
          <Text align={"right"} fontSize="md" as="b" lineHeight={1} color="red">
            ₹ {el.price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
