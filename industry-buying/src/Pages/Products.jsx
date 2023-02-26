import React, { useEffect } from "react";
import "../styles/Products.css";
import styled from "styled-components";
import BreadCrum from "../Components/ProductDisplay/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import { DisplayProducts } from "./DisplayProducts";
import { ProductSideBar } from "../Components/Products/ProductSideBar";
import { Box } from "@chakra-ui/react";

const Products = () => {
  const prod = useSelector((store) => {
    //console.log(store.productReducer.products);
    return store.productReducer.products;
  });

  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Box id="main_container">

        <Box id="sidebar">
          <ProductSideBar />
        </Box>



        <Box id="product_container">
          <BreadCrum />
          <h1>PowerTools</h1>
          <ProdWrapper>
            {prod.length > 0 &&
              prod.map((el) => {
                return (
                  <Box key={el.id}>
                    <DisplayProducts {...el} />
                  </Box>
                );
              })}
          </ProdWrapper>
        </Box>
      </Box>
    </div>
  );
};

export { Products };

const ProdWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
`;
