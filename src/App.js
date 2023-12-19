import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Shop from "./Pages/Shop.jsx";
import Product from "./Pages/Product.jsx";
import Sobre from "./Pages/Sobre.jsx";
import Contato from "./Pages/Contato.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSetup from "./Pages/LoginSetup.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/sobre" element={<Sobre category="sobre" />} />
          <Route path="/contato" element={<Contato category="contato" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSetup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
