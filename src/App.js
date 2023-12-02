import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Shop from "./Pages/Shop.jsx";
import Sobre from "./Pages/Sobre.jsx";
import Contato from "./Pages/Contato.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/sobre" element={<Sobre category="sobre" />} />
          <Route path="/contato" element={<Contato category="contato" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
