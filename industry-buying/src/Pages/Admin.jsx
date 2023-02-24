import { useState } from 'react'
import React from 'react'
import './Admin.css'
import {useDispatch} from 'react-redux'
import { addProduct } from "../Redux/ProductReducer/action"


let initialState ={
    image:"",
    brand:"",
    price:"",
    description:"",
}

export const Admin = () => {
    const [product , setProduct] = useState(initialState)
    const dispatch =useDispatch()

const handleChange = (e) =>{
 const {name ,value} = e.target

 setProduct((prev) =>{
    return{...prev,[name]: name === "price" ? +value :value}
 })
}

    const handleSubmit =(e) =>{
        e.preventDefault()
        dispatch(addProduct(product))
        setProduct(initialState)
    }
    return (

        <div className='Admin_main_container'>
                
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} className="admincont" >


                <h1>Add products</h1>
                ____________________________
                <br />
                <br />

                <label>Image</label>
                <input type="url"
                name='image'
                value={product.image}
                onChange={(e) => handleChange(e)} />

                <label>Brand</label>
                <input type="text"
                 name='brand'
                 value={product.brand}
                 onChange={(e) => handleChange(e)} />

                <label>Price</label>
                <input type="number"
                 name='price'
                 value={product.price}
                 onChange={(e) => handleChange(e)} />

                <label>Description</label>
                <input type="text" 
                 name='description'
                 value={product.description}
                 onChange={(e) => handleChange(e)}/>



                <div >
                    <button className='AdminBtn' type="submit" >| ADD |</button>

                </div>
            </form>
        </div>


    )
}

