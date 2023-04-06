import React from "react";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <div style={{marginTop:"80px", width:"100%", height:"50px", border:"1px solid black", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <Link to="/product">Power Tools</Link>
      <Link to="/product">Electrical</Link>
      <Link to="/product">Safet Gears</Link>
      <Link to="/product">Home Requirements</Link>
      <Link to="/product">Office Supplies</Link>
      <Link to="/product">IT & Electronics</Link>
    </div>
  );
};

export default CategoryNav;
