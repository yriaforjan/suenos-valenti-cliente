import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainLayout from "./components/MainLayout/MainLayout";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sessions from "./pages/Sessions/Sessions";
import Cart from "./pages/Cart/Cart";
import Preferences from "./pages/Preferences/Preferences";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />{" "}
          <Route path="sesiones" element={<Sessions />} />
          <Route path="carrito" element={<Cart />} />
          <Route path="preferencias" element={<Preferences />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
