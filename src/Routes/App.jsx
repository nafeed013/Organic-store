import Header from "../components/Header";
import Footer from "../components/Footer";
//import ProductsProvider from "../store/Organic-Store";
//import { Outlet } from "react-router-dom";
import "./App.css";
import Products from "./Products";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <Header />
      <Products />
      <Checkout />
      <Footer />
    </>
  );
}

export default App;
