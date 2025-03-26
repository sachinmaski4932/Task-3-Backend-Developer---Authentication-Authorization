import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../components/Users";
import UserDetails from "../components/UserDetails";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import AddUser from "../components/AddUser";
import AddProduct from "../components/AddProduct";
import Navbar from "../components/Navbar";

const RoutesComponent = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
