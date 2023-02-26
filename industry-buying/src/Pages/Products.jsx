import React, { useEffect } from "react";
import "../styles/Products.css";
import styled from "styled-components";
// import BreadCrum from "../Components/Products/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import { DisplayProducts } from "./DisplayProducts";
import { ProductSideBar } from "../Components/Products/ProductSideBar";
import { Box,Text } from "@chakra-ui/react";
import {  useLocation, useSearchParams } from "react-router-dom";

const Products = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  //console.log(location);

  const prod = useSelector((store) => {
    //console.log(store.productReducer.products);
    return store.productReducer.products;
  });

  

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      by:searchParams.getAll("by"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order")
    }
  }

  useEffect(() => {
    dispatch(getData(obj));
  }, [location.search]);

  return (
    <div id="products_display">
      <Box id="main_container">
  
        <Box id="sidebar">
          <ProductSideBar />
        </Box>

        <Box id="product_container">
          <Text style={{fontStyle:"normal", fontFamily:"sans-serif", fontSize:"34px", fontWeight:"500", marginLeft:"20px"}}>PowerTools</Text>
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
