import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import "../styles/DisplayProduct.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleCart } from '../Redux/Product/action';
import { useToast } from '@chakra-ui/react'



const DisplayProducts = ({id, category, name, image,by, price, discount}) => {

  const toast = useToast();

  const CartInitialState = {
    category: category,
    name:name,
    image:image,
    by:by,
    price:price, 
    discount:discount,
  }

 const dispatch = useDispatch();
 const navigate = useNavigate();

  const handleClick = () => {
    dispatch(handleCart(id,CartInitialState))
  
    toast({
      title: 'Item Added.',
      description: "Your Item has been added to Cart.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  
  const HandleBuy = () => {
    console.log('Buy')
     navigate('/Paymentpage')
  }
   


  return (
    <Box id="item_container">
        <Image className="item_image" src={image} alt={name}  />
        <Text className='item_category'> <span>Category:</span>  {category} </Text>
        <Text className='item_name'> {name} </Text>
        <Text className='item_by'> <span> By:</span> {by} </Text>
        <Text className='item_price'> <span>Price:</span>  { `Rs `+ price } </Text>
        <Text className='item_discount'> <span> Discount:</span> {discount + `%`} </Text>
        <Box className='add_buy_btn'>
            <Button className='cart_btn' onClick={handleClick}>ADD to Cart</Button>
            <Button className='buy_btn' onClick={HandleBuy}>Buy Now</Button>
        </Box>
    </Box>
  )
}

export  { DisplayProducts };
