import { useState } from "react";
import React from "react";
import "./Admin.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Admin/action";

let initialState = {
  category: "",
  image: "",
  name: "",
  by: "",
  price: "",
  discount: "",
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct(initialState);
  };
  return (
    <div className="Admin_main_container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="admincont"
      >
        <h1>Add products</h1>
        ____________________________
        <br />
        <br />
        <label>Product Category</label>
        <input
          type="txt"
          name="category"
          value={product.category}
          onChange={(e) => handleChange(e)}
        />
        <label>Image</label>
        <input
          type="url"
          name="image"
          value={product.image}
          onChange={(e) => handleChange(e)}
        />
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Offered By</label>
        <input
          type="text"
          name="by"
          value={product.by}
          onChange={(e) => handleChange(e)}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={(e) => handleChange(e)}
        />
        <label>Product Discount</label>
        <input
          type="text"
          name="discount"
          value={product.discount}
          onChange={(e) => handleChange(e)}
        />
        <div>
          <button className="AdminBtn" type="submit">
            | ADD |
          </button>
        </div>
      </form>
    </div>
  );
};
