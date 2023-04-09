import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "./PriceTag";

const OrderSummaryItem = (props) => {

  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({
  cartData,
  settotal,
  setcartdata,
  total,
}) => {
  // const [fulltotal,settotaly]=useState(0);
  const toast = useToast();
  const finalcarttotal = useSelector(
    (store) => store.productReducer.finaltotal
  );

  let fulltotaltotal = () => {
    cartData.map((el) => settotal((p) => p + +el.price));
  };
  console.log(total);

  useEffect(() => {
    fulltotaltotal();
  }, [cartData]);

  
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (cartData.length !== 0) {
    
      toast({
        title: "Item Added.",
        description: "Your are ready checkout.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setcartdata([]);
      navigate("/paymentpage");
    } else {
      toast({
        title: "Item Added.",
        description: "Your Cart is empty.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(total)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>

          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="red"
        onClick={handleCheckout}
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Stack>
  );
};
