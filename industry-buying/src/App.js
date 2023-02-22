import './App.css';
import { CartPage } from './Components/CartFolder/CartPage';


// import { Products } from './Components/ProductDisplay/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';


function App() {
  return (

    <div className="App">

     {/* <Products /> */}

      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
       <CartPage/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
      </BrowserRouter>
      

    </div>

  );
}

export default App;