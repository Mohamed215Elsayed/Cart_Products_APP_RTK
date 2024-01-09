import "./App.css";
import AppNavbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
