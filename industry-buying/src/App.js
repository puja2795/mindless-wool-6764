import "./App.css";
import { CartPage } from "./Components/CartFolder/CartPage";

// import { Products } from './Components/ProductDisplay/Products';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      {/* <Products /> */}

      {/* <ToastContainer theme="colored" position="top-center"></ToastContainer> */}
      <CartPage />
    </div>
  );
}

export default App;
