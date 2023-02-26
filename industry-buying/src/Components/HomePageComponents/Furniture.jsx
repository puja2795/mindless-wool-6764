import { useState, useEffect } from "react";
import data from "../../data.json";
import Slider from "./Slider";
import { Grid, Heading } from "@chakra-ui/react";

const Furniture = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.furniture);
  }, []);

  return (
    <div>
      <Heading
        as="h3"
        size="md"
        textAlign="left"
        marginTop="12px"
        paddingLeft={3}
      >
        FURNITURE, HOSPITALITY AND FOOD SERVICE
      </Heading>
      <Slider items={products} columns={8} type="card" />
    </div>
  );
};

export default Furniture;
