import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import { Checkbox } from '@chakra-ui/react';
import "./ProductSidebar.css";

const ProductSideBar = () => {
  return (
    <div id='filters'>
       
    <Text className='cate_heading'>Go by Categories</Text>
    <Box id="sort_cate">
       <Checkbox>Saws & Chasers</Checkbox>
       <Checkbox>Electric Hammers</Checkbox>
       <Checkbox>Painting Tools</Checkbox>
       <Checkbox>Sander & Polisher</Checkbox>
       <Checkbox>Saws</Checkbox>
    </Box>  

    <Text className='cate_heading'>Go by Categories</Text>
    <Box id="sort_manufacturer">
       <Checkbox>Makita</Checkbox>
       <Checkbox>Ingco</Checkbox>
       <Checkbox>Voltz</Checkbox>
       <Checkbox>Xtra Power</Checkbox>
       <Checkbox>Yato</Checkbox>
       <Checkbox>Omada</Checkbox>
       <Checkbox>HiKOKI</Checkbox>
       <Checkbox>YIKING</Checkbox>
       <Checkbox>Sauran</Checkbox>
       <Checkbox>AKARI</Checkbox>
       <Checkbox>Eibenstock</Checkbox>
       <Checkbox>AgriPro</Checkbox>
    </Box>  


    <Text className='cate_heading'>Go by Categories</Text>
    <Box id="price">
       <Checkbox>All</Checkbox>
       <Checkbox>Low to High</Checkbox>
       <Checkbox>High to Low</Checkbox>
    </Box> 


    <Text className='cate_heading'>Go by Discounts</Text>
    <Box id="discount">
       <Checkbox>0 - 10</Checkbox>
       <Checkbox>10 - 20</Checkbox>
       <Checkbox>20 - 30</Checkbox>
       <Checkbox>30 - 40</Checkbox>
       <Checkbox>40 - 50</Checkbox>
       <Checkbox>50 - 60</Checkbox>
       <Checkbox>60 - 70</Checkbox>
    </Box> 
   
       

    </div>
  )
}

export { ProductSideBar };
