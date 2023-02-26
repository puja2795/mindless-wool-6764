import "./App.css";
import { TempNavbar } from "./Components/TempNavbar";
import MainRoutes from "./Pages/MainRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Navbar";
import Sidebar from "./Pages/Sidebar"
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-right"></ToastContainer>
      {/* <TempNavbar />
      <MainRoutes /> */}
      <Navbar/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
