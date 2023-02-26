import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import {Text} from "@chakra-ui/react";

import "./ProductSidebar.css";

const ProductSideBar = () => {
   
   const [searchParams, setSearchParams] = useSearchParams();

   const initialOrder =  searchParams.get("order");        
   const [order, setOrder] = useState(initialOrder || "");

   const initialState = searchParams.getAll("category");
   const [category, setCategory] = useState(initialState || []);

   const initialManfu = searchParams.getAll("by");
   const [by, setBy] = useState(initialManfu || []);


   const handleChange = (e) => {
       
      let newCategory = [...category];
      let value = e.target.value;

      if(newCategory.includes(value)){
         newCategory.splice(newCategory.indexOf(value), 1);
    } else {
        newCategory.push(value);
    }

    setCategory(newCategory);

   console.log(category);
   };

   const handleManufacturer = (e) => {
       
      let newManfu = [...by];
      let value = e.target.value;

      if(newManfu.includes(value)){
         newManfu.splice(newManfu.indexOf(value), 1);
      } else {
         newManfu.push(value);
      }

      setBy(newManfu);
      console.log(by);
   }

   const handleSortChange = (e) => {
      console.log(e.target.value);
      setOrder(e.target.value);
   }

   useEffect(() => {

      let params = {
         category,
      };

      order && (params.order = order);

      setSearchParams(params);
   },[category,order]);

  return (
    <div id='filters'>
       
    <Text className='cate_heading'>Go by Categories</Text>
    <div id="sort_cate">
      
      <div className='tags'>
         <input type="checkbox" value="Saws & Chasers" onChange={handleChange} checked={category.includes("Saws & Chasers")} />
         <label>Saws & Chasers</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Electric Hammers" onChange={handleChange} checked={category.includes("Electric Hammers")} />
         <label>Electric Hammers</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Painting Tools" onChange={handleChange} checked={category.includes("Painting Tools")} />
         <label>Painting Tools</label>
      </div>


      <div className='tags'>
         <input type="checkbox" value="Sander & Polisher" onChange={handleChange} checked={category.includes("Sander & Polisher")} />
         <label>Sander & Polisher</label>
      </div>


      <div className='tags'>
         <input type="checkbox" value="Saws" onChange={handleChange} checked={category.includes("Saws")} />
         <label>Saws</label>
      </div>
       
    </div>  

    <Text className='cate_heading'>Go by Manufacturers</Text>
    <div id="sort_manufacturer">
  
       <div className='tags'>
         <input type="checkbox" value="Makita" onChange={handleManufacturer} checked={category.includes("Makita")} />
         <label>Makita</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Ingco" onChange={handleManufacturer} checked={category.includes("Ingco")} />
         <label>Ingco</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Voltz" onChange={handleManufacturer} checked={category.includes("Voltz")} />
         <label>Voltz</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Xtra Power" onChange={handleManufacturer} checked={category.includes("Xtra Power")} />
         <label>Xtra Power</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Yato" onChange={handleManufacturer} checked={category.includes("Yato")} />
         <label>Yato</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Omada" onChange={handleManufacturer} checked={category.includes("Omada")} />
         <label>Omada</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="HiKOKI" onChange={handleManufacturer} checked={category.includes("HiKOKI")} />
         <label>HiKOKI</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="YIKING" onChange={handleManufacturer} checked={category.includes("YIKING")} />
         <label>YIKING</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Sauran" onChange={handleManufacturer} checked={category.includes("Sauran")} />
         <label>Sauran</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="AKARI" onChange={handleManufacturer} checked={category.includes("AKARI")} />
         <label>AKARI</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="Eibenstock" onChange={handleManufacturer} checked={category.includes("Eibenstock")} />
         <label>Eibenstock</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="AgriPro" onChange={handleManufacturer} checked={category.includes("AgriPro")} />
         <label>AgriPro</label>
      </div>
    </div>  


    <Text className='cate_heading'>Sort By Price</Text>
      <div id="price" onChange={handleSortChange}>
         <div className='tags'>
         <input type="radio" name="order" value={"asc"} defaultChecked={order === "asc"} />
         <label>Low to High</label>
         </div>
         
         <div className='tags'>
         <input type="radio" name="order" value={"desc"} defaultChecked={order === "desc"} />
         <label>High to Low</label>
         </div>
         
      </div> 


    <Text className='cate_heading'>Go by Discounts</Text>
    <div id="discount">
 
       <div className='tags'>
         <input type="checkbox" value="10 - 20" onChange={handleChange} checked={category.includes("10 - 20")} />
         <label>10 - 20</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="20 - 30" onChange={handleChange} checked={category.includes("20 - 30")} />
         <label>20 - 30</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="30 - 40" onChange={handleChange} checked={category.includes("30 - 40")} />
         <label>30 - 40</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="40 - 50" onChange={handleChange} checked={category.includes("40 - 50")} />
         <label>40 - 50</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="50 - 60" onChange={handleChange} checked={category.includes("50 - 60")} />
         <label>50 - 60</label>
      </div>

      <div className='tags'>
         <input type="checkbox" value="60 - 70" onChange={handleChange} checked={category.includes("60 - 70")} />
         <label>60 - 70</label>
      </div>

    </div> 
   
       

    </div>
  )
}

export { ProductSideBar };
