import { useSelector } from "react-redux";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";



const App = () => {
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" 
          element={user ? <Navigate to ="/"/> : <Login/>}/>
        <Route exact path="/register" 
          element={user ? <Navigate to ="/"/> :<Register/>}
        />
        <Route path="/success" element={<Success/>}/>

      </Routes>
    </Router>
  );
};

export default App;