import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AdminNavbar = () => {
  return (
    <LinkWrapper>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin">Add Products</Link>
      <Link to="/">Logout</Link>
    </LinkWrapper>
  );
};
export { AdminNavbar };
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: skyblue;
`;
