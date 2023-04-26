import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './pages/Navbar/navbar';
import Addproduct from './pages/sellerpages/addproduct';
import Allproduct from './pages/sellerpages/allproduct';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
         <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/addProduct' element={<Addproduct />}></Route>
          <Route path='/allProduct' element={<Allproduct />}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
