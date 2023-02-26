import { Grid, Heading, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminProductData } from "../Components/AdminProductData";
import { getData } from "../Redux/Product/action";

export const Dashboard = () => {
  // const [adminData, setAdminData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminData = useSelector((store) => {
    return store.productReducer.products;
  });

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/powertools/${id}`)
      .then(alert("Product Deleted"));
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getData());
    // axios
    //   .get("http://localhost:8080/powertools")
    //   .then((res) => setAdminData(res.data));
  }, []);

  return (
    <div>
      <Heading
        as="h2"
        size="xl"
        color={"cyan.800"}
        marginTop={10}
        marginBottom={10}
      >
        Welcome To Dashboard
      </Heading>
      <div
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "30px",
          border: "1px solid grey",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {adminData.map((el) => {
            return (
              <AdminProductData
                key={el.id}
                el={el}
                handleDelete={handleDelete}
              />
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
