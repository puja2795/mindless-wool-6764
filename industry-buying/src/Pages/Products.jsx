import React from 'react';
import { Box } from "@chakra-ui/react";
import "../styles/Products.css"
import BreadCrum from '../Components/ProductDisplay/BreadCrum';


const Products = () => {
  return (
    <div>
      <Box id='main_container'> 
        <Box id='sidebar'></Box>
        <Box id='product_container'>
          <BreadCrum />
          <h1>PowerTools</h1>
        </Box>
      </Box>
    </div>
  )
}

export  { Products };


