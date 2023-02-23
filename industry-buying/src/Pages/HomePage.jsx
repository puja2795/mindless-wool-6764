import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export const HomePage = () => {
  // const usenavigate = useNavigate();
  // const [displayusername, displayusernameupdate] = useState("");
  // useEffect(() => {
  //   let username = sessionStorage.getItem("username");
  //   if (username === "" || username === null) {
  //     usenavigate("/login");
  //   } else {
  //     displayusernameupdate(username);
  //   }
  // }, []);

  return (
    <div>
      <h1 className="text-center">Welcome </h1>
    </div>
  );
};
