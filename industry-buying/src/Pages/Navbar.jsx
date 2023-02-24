import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import "./Navbar.css"
const Navbar = () => {
 const [searchTerm, setSearchTerm] = useState(''); 
 
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
          <img src={`https://www.industrybuying.com/static/images/industry-buying-white-logo.png`} alt="Logo" />
          
        </div>
        <div className="search-container">
        <div className="butt1">
        <li className={`dropdown ${dropdownActive ? 'active' : ''}`}>
        <button onClick={toggleDropdown}> All categery</button>
          <ul className="dropdown-content">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
        </div>
          <input type="text" placeholder="Search Products" 
             value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}><FaSearch/></button>
        </div>
       <div className="butt2">
       <li className={`dropdown ${dropdownActive1 ? 'active' : ''}`}>
          <a href="#" onClick={toggleDropdown1}>sing in </a>
          <ul className="dropdown-content1">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
       </div>
        
       <div className='menu-container'>
       <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">cart</a></li>
            <li><a href="https://play.google.com/store">Play Store logo</a><a href="https://play.google.com/store"> apple Store logo</a></li>
            
        </ul>
       </div>
                        
      </div>   
    </nav>
  );
}

export default Navbar;
