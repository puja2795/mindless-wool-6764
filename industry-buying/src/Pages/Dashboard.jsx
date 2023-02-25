import { Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminProductData } from "../Components/AdminProductData";
import { getProduct } from "../Redux/Admin/action";
import { store } from "../Redux/store";

export const Dashboard = () => {
  const [adminData, setAdminData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8000/powertools")
      .then((res) => setAdminData(res.data));
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
            return <AdminProductData key={el.id} el={el} />;
          })}
        </Grid>
      </div>
    </div>
  );
};
