import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Admin.css";

export const AdminEditProduct = () => {
  const { id } = useParams();
  const [editProduct, setEditProduct] = useState([]);
  const [data, setData] = useState({});

  const handleEdit = (id, data) => {
    axios.patch(`http://localhost:8000/powertools/${id}`, data);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/powertools")
      .then((res) => setEditProduct(res.data));

    const productData = editProduct.find((el) => el.id === Number(id));
    productData && setData(productData);
  }, []);

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
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
        />
        <label>Image</label>
        <input
          type="url"
          name="image"
          value={data.image}
          onChange={(e) => setData({ ...data, image: e.target.value })}
        />
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Offered By</label>
        <input
          type="text"
          name="by"
          value={data.by}
          onChange={(e) => setData({ ...data, by: e.target.value })}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <label>Product Discount</label>
        <input
          type="text"
          name="discount"
          value={data.discount}
          onChange={(e) => setData({ ...data, discount: e.target.value })}
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
