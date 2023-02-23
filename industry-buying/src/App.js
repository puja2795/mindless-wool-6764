import "./App.css";
import { TempNavbar } from "./Components/TempNavbar";
import MainRoutes from "./Pages/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-right"></ToastContainer>
      <TempNavbar />
      <MainRoutes />
    </div>
  );
}

export default App;
