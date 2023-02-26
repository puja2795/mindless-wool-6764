import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import "../styles/Products.css";

import { useDispatch } from 'react-redux';
import { handleCart } from '../Redux/Product/action';



const DisplayProducts = ({id, category, name, image,by, price, discount}) => {

  const CartInitialState = {
    category: category,
    name:name,
    image:image,
    by:by,
    price:price, 
    discount:discount,
  }

 const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleCart(id,CartInitialState))

  }
  //console.log("add to cart")
   


  return (
    <Box style={{border:"1px solid green", width:"300px",padding:"30px"}}>
        <Image  src={image} alt={name} width="100px" height="100px" />
        <Text> Category: {category} </Text>
        <Text> {name} </Text>
        <Text> By: {by} </Text>
        <Text> Price: { `RS.` +  price} </Text>
        <Text>Discount: {discount + `%`} </Text>
        <Box style={{display: "flex",justifyContent:"space-around", alignItems:"center", marginTop:"10px",gap:"20px"}}>
            <Button id='cart_btn' onClick={handleClick}>ADD to Cart</Button>
            <Button id='buy_btn'>Buy Now</Button>
        </Box>
    </Box>
  )
}

export  { DisplayProducts };
