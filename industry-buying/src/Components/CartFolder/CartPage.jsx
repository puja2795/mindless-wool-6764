import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../Redux/store'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
// import { cartData } from './_data'

export const CartPage = () => {
  const [total,settotal]=useState(0);
  const [cartData,setcartdata]= useState([]);
  const finalcarttotal=useSelector(store=>store.productReducer.finaltotal);
console.log(finalcarttotal)
  const getdata=()=>{
   return axios.get("https://plum-quail-tam.cyclic.app/cart")
    .then(res=>setcartdata(res.data))
  }
  useEffect(()=>{
    getdata();
    
  },[]);

  const onClickDelete=(id,price)=>{
  console.log(id)
  axios.delete(`http://localhost:8080/cart/${id}`);
  setcartdata(
     cartData.filter((post) => {
        return post.id !== id;
     })
  );
 settotal((p)=>p-price)
}

// let fulltotaltotal =()=>{
//   cartData.map((el)=>
// settotal(finalcarttotal+el.price)
// )}
// console.log(total)




// useEffect(()=>{
// cartData.map(({price})=>

// // console.log(price)
// settotal(prev=>prev+price)
// )
// },[cartData]);
  // const data=useSelector(store=>store.productReducer.cart)
  // console.log(data)
return(
  <Box
    maxW={{
      base: '3xl',
      lg: '7xl',
    }}
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align={{
        lg: 'flex-start',
      }}
      spacing={{
        base: '8',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart 
        </Heading>

        <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} onClickDelete={()=>onClickDelete(item.id,item.price)}/>
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary cartData={cartData} settotal={settotal} total={total} setcartdata={setcartdata}/>
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
)
}



