import React, { useState } from 'react';

import "./Navbar.css"
const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Searching for "${searchTerm}"...`);
    // implement search functionality here
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          {/* <img src={} alt="Logo" /> */}
          <p>indestrialbying</p>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search Products" 
             value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search logo</button>
        </div>
        <div className="menu-container">
          <ul>
          <li><a href="#">Sign In</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">cart</a></li>
            <li><a href="https://play.google.com/store">Play Store logo</a></li>        <li><a href="https://play.google.com/store"> apple Store logo</a></li>            
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
