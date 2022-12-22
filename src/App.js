import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import AllFoods from "./pages/AllFoods";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from "react";


function App() {
  return (


    <div className="App">

      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
            </Routes>
      <Footer />

    </div>

  )
}

export default App;
