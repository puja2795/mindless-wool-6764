import React, { useState } from 'react'
import './PaymentPage.css'
import photo from './images/card_img.png'
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {

const [name,setName]=useState("");

// const handleChange=(e)=>{
//     // console.log(e.target.value)
//     setName(e.target.value)
// }
const navigate=useNavigate();
    const handleSubmit=(e)=>{
       e.preventDefault()
        // console.log(e)

        name===""?alert(`Please Fill The Form`):alert(`${name} Your Payment Success `)||navigate("/");
        
        // setName(e.target.value)
        setName("")

        // 
    };
    // console.log(name)
  return (
   
   
<div class="container">

<form action="" onSubmit={handleSubmit}>

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text"  onChange={(e)=>setName(e.target.value)} placeholder="john deo"/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com"/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="mumbai"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="india"/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src={photo} alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="Pay"  class="submit-btn"/>

</form>

</div>  
   
  )
}
