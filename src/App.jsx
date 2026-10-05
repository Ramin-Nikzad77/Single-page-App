import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  function login() {
    setIsAuth(true);
  }
  function logout() {
    setIsAuth(false);
  }
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar isAuth={isAuth} onLogout={logout}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Login onLogin={login} />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Checkout></Checkout>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
