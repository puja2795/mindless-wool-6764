import React, { useState } from "react";
import "./PaymentPage.css";
import photo from "./images/card_img.png";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function PaymentPage() {
  const [name, setName] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  
  let cart = useSelector((store) => {
    return (store.productReducer.cart)
  })

  console.log(cart)


  const handleSubmit = (e) => {
    e.preventDefault();
   
    cart.length = 0

    name === ""
      ? alert(`Please Fill The Form`)
      : toast({
          title: "Item Added.",
          description: `${name} your payment was Successfull`,
          status: "success",
          duration: 3000,
          isClosable: true,
        },navigate("/")) || navigate("/");

    setName("");
  };
 


  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>

            <div className="inputBox">
              <span>full name :</span>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="john deo"
                required
              />
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input type="email" placeholder="example@example.com" required />
            </div>
            <div className="inputBox">
              <span>address :</span>
              <input
                type="text"
                placeholder="room - street - locality"
                required
              />
            </div>
            <div className="inputBox">
              <span>city :</span>
              <input type="text" placeholder="mumbai" required />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>state :</span>
                <input type="text" placeholder="india" required />
              </div>
              <div className="inputBox">
                <span>zip code :</span>
                <input type="text" placeholder="123 456" required />
              </div>
            </div>
          </div>

          <div className="col">
            <h3 className="title">payment</h3>

            <div className="inputBox">
              <span>cards accepted :</span>
              <img src={photo} alt="" />
            </div>
            <div className="inputBox">
              <span>name on card :</span>
              <input type="text" placeholder="mr. john deo" required />
            </div>
            <div className="inputBox">
              <span>credit card number :</span>
              <input
                type="password"
                placeholder="1111-2222-3333-4444"
                pattern="\d{16}"
                required
              />
            </div>
            <div className="inputBox">
              <span>Valid Upto :</span>
              <input type="text" placeholder="january" required />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>exp year :</span>
                <input type="number" placeholder="2022" required />
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="123" pattern="\d{3}" required />
              </div>
            </div>
          </div>
        </div>

        <input type="submit" value="Pay" class="submit-btn" />
      </form>
    </div>
  );
}
