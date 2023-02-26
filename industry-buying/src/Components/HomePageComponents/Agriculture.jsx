import { useState, useEffect } from "react";
import data from "../../data.json";
import Slider from "./Slider";
import { Heading } from "@chakra-ui/react";

const Agriculture = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.agriculture);
  }, []);

  return (
    <div>
      <Heading as="h3" size="md" textAlign="left" marginTop="12px">
        AGRICULTURE GARDEN & LANDSCAPING
      </Heading>
      <Slider items={products} columns={8} type="card" />
    </div>
  );
};

export default Agriculture;
