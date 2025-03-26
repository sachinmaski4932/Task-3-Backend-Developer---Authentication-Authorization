import React from "react";
import { Link } from "react-router-dom";
import "../index.css";



const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>React Router App</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-user">Add User</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  );
};

export default Navbar;
