import {
  Flex,
  Card,
  CardBody,
  Image,
  Icon,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Slider = ({ items, columns, type }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(columns);
  const width = (100 / columns).toString() + "%";
  const imageWidth = (90 / columns).toString() + "%";

  const prevHandler = (e) => {
    // e.prevent
    setStart(start <= 0 ? 0 : start - 1);
    setEnd(end <= columns ? columns : end - 1);
  };

  const nextHandler = () => {
    setStart(
      start + columns >= items.length ? items.length - columns : start + 1
    );
    setEnd(end == items.length ? end : end + 1);
  };

  return (
    <Flex>
      <Box w="5%" margin="auto" onClick={prevHandler}>
        <Icon boxSize={10} as={ChevronLeftIcon} />
      </Box>
      <Grid templateColumns="repeat(4,1fr)" gap={1.5} marginTop="12px">
        {items.slice(start, end).map((item, index) => {
          return (
            <Card
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            >
              <CardBody>
                <Box>
                  <Image
                    src={item.image}
                    alt="item-photo"
                    borderRadius="lg"
                    m="auto"
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform .2s",
                    }}
                  />
                </Box>
                <Stack mt="6" spacing="3">
                  <Text align={"left"} fontSize="sm" lineHeight={1.5}>
                    {item.name.substring(0, 20)}
                  </Text>
                  <Text align={"left"} fontSize="xs" color="green">
                    {item.discount}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
        ;
      </Grid>

      <Box w="5%" margin="auto" onClick={nextHandler}>
        <Icon boxSize={10} as={ChevronRightIcon} />
      </Box>
    </Flex>
  );
};

export default Slider;
