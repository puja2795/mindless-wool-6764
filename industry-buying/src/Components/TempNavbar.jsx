import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const TempNavbar = () => {
  return (
    <LinkWrapper>
      <Link to="/">HomePage</Link>
      <Link to="/product">Products</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/admin">Admin</Link>
    </LinkWrapper>
  )
}

export {TempNavbar} ;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:20px;
  background-color: skyblue;
`