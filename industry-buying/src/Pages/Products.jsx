import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import "../styles/Products.css";
import BreadCrum from "../Components/ProductDisplay/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  productFailureAction,
  productRequestAction,
  productSuccessAction,
} from "../Redux/Product/action";
import { DisplayProducts } from "./DisplayProducts";

const Products = () => {
  const prod = useSelector((store) => {
    //console.log(store.productReducer.products);
    return store.productReducer.products;
  });

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(productRequestAction());

    axios
      .get(`http://localhost:8080/powertools`)
      .then((res) => {
        // console.log(res.data);
        dispatch(productSuccessAction(res.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(productFailureAction());
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box id="main_container">
        <Box id="sidebar"></Box>
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
