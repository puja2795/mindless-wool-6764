import "./App.css";
import { TempNavbar } from "./Components/TempNavbar";
import MainRoutes from "./Pages/MainRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Navbar";
import { AdminNavbar } from "./Pages/AdminNavbar";
import Sidebar from "./Pages/Sidebar";
import { useSelector } from "react-redux";
import Footer from "./Footer";

function App() {
  const inAdmin = useSelector((store) => {
    return store.authReducer.inAdmin;
  });

  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-right"></ToastContainer>

      {inAdmin ? <AdminNavbar /> : <TempNavbar />}

      {/* <TempNavbar /> */}
      <MainRoutes />
      <Navbar />
      {/* // <Sidebar/> */}
      <Footer />
    </div>
  );
}

export default App;
