import "./App.css";
import { TempNavbar } from "./Components/TempNavbar";
import MainRoutes from "./Pages/MainRoutes";
// import Navbar from "./Pages/Navbar";
// import Sidebar from "./Pages/Sidebar";

function App() {
  return (
    <div className="App">
      <TempNavbar />
      <MainRoutes />
      {/* <Navbar/>
      <Sidebar/> */}
    </div>
  );
}

export default App;
