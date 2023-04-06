import React, { useState } from "react";
import { FaSearch, FaGooglePlay } from "react-icons/fa";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { BsCart2, BsApple } from "react-icons/bs";


import "./Navbar.css";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownActive1, setDropdownActive1] = useState(false);

  function toggleDropdown() {
    setDropdownActive(!dropdownActive);
  }
  function toggleDropdown1() {
    setDropdownActive1(!dropdownActive1);
  }
  const handleSearch = () => {
    console.log(`Searching for "${searchTerm}"...`);
    // implement search functionality here
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <a href="/">
            <img
              src={`https://www.industrybuying.com/static/images/industry-buying-white-logo.png`}
              alt="Logo"
            />
          </a>
        </div>
        <div className="search-container">
          <div className="butt1">
            <li className={`dropdown ${dropdownActive ? "active" : ""}`}>
              <button onClick={toggleDropdown}>
                {" "}
                Search
              </button>
            </li>
          </div>
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        <div className="butt2">
          <li className={`dropdown1 ${dropdownActive1 ? "active" : ""}`}>
            <a href="#" onClick={toggleDropdown1} className="button2">
              Sign In <TriangleDownIcon />{" "}
            </a>
            <ul className="dropdown-content1">
              <li>
                <a href="/login">Sign In </a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/product">Product</a>
              </li>
              <li>
                <a href="/adminregister">Admin Register</a>
              </li>
              <li>
                <a href="/adminlogin">Admin Sign in</a>
              </li>
            </ul>
          </li>
        </div>

        <div className="menu-container">
          <ul>
            <li>
              <a href="/cart">
                <BsCart2 />
                cart
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store">
                <FaGooglePlay />
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store">
                {" "}
                <BsApple />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
