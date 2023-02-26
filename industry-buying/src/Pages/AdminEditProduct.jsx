import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../Redux/Admin/action";
import "./Admin.css";

export const AdminEditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8080/powertools/${id}`, product)
      .then(alert("Product Updated Successfully"));
    navigate("/dashboard");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/powertools/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  // useEffect(() => {
  //   const productData = product.find((el) => el.id === Number(id));
  //   productData && setData(productData);
  // }, []);

  return (
    <div className="Admin_main_container">
      <form className="admincont">
        <h1>Edit product</h1>
        ____________________________
        <br />
        <br />
        <label>Product Category</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <label>Image</label>
        <input
          type="url"
          name="image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <label>Offered By</label>
        <input
          type="text"
          name="by"
          value={product.by}
          onChange={(e) => setProduct({ ...product, by: e.target.value })}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <label>Product Discount</label>
        <input
          type="text"
          name="discount"
          value={product.discount}
          onChange={(e) => setProduct({ ...product, discount: e.target.value })}
        />
        <div>
          <button className="AdminBtn" type="submit" onClick={handleEdit}>
            | EDIT PRODUCT |
          </button>
        </div>
      </form>
    </div>
  );
};
