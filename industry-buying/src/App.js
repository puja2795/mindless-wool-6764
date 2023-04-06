import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Navbar";
import { AdminNavbar } from "./Pages/AdminNavbar";
import { useSelector } from "react-redux";
import CategoryNav from "./Components/Navbar/CategoryNav";


function App() {
  const inAdmin = useSelector((store) => {
    return store.authReducer.inAdmin;
  });

  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-right"></ToastContainer>

      {inAdmin ? <AdminNavbar /> : <Navbar />}

      <CategoryNav/>
      <MainRoutes />
    </div>
  );
}

export default App;
