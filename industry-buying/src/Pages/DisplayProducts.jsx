import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import "../styles/Products.css";

const DisplayProducts = ({id, category, name, image,by, price, discount}) => {
  return (
    <Box style={{border:"1px solid green", width:"300px",padding:"30px"}}>
        <Image  src={image} alt={name} width="100px" height="100px" />
        <Text> Category: {category} </Text>
        <Text> {name} </Text>
        <Text> By: {by} </Text>
        <Text> Price: { `RS.` +  price} </Text>
        <Text>Discount: {discount + `%`} </Text>
        <Box style={{display: "flex",justifyContent:"space-around", alignItems:"center", marginTop:"10px",gap:"20px"}}>
            <Button id='cart_btn'>ADD to Cart</Button>
            <Button id='buy_btn'>Buy Now</Button>
        </Box>
    </Box>
  )
}

export  { DisplayProducts };
