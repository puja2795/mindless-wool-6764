import "./App.css";
import { TempNavbar } from "./Components/TempNavbar";
import MainRoutes from "./Pages/MainRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Navbar";
import { AdminNavbar } from "./Pages/AdminNavbar";
import Sidebar from "./Pages/Sidebar";
import { useSelector } from "react-redux";

function App() {
  const inAdmin = useSelector((store) => {
    return store.authReducer.inAdmin;
  });

  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-right"></ToastContainer>

      {inAdmin ? <AdminNavbar /> : <TempNavbar />}
      <MainRoutes />
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
