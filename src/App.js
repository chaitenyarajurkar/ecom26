import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './pages/Navbar/navbar';
import Addproduct from './pages/sellerpages/addproduct';
import Allproduct from './pages/sellerpages/allproduct';
import Protected from './pages/Protected/protected';
import Parent from './pages/ContextAPI/parent';
import { createContext, useState } from 'react';

const AppContext= createContext()
function App() {
  const [cartValues,setCartValues] = useState(0);

  const IncreaseCart =()=>{
    setCartValues(cartValues + 1);
  }

  return (
    <div>
      <AppContext.Provider value={{cartValues}}>
      <BrowserRouter>
      <Navbar></Navbar>
         <Routes>
          <Route path='/' element={<Login  />} ></Route>
          <Route path='/addProduct' element={<Protected  Component={<Addproduct/>} />}></Route>
          <Route path='/allProduct' element={<Protected  Component={<Allproduct/>} />}></Route>
          <Route path='/constextApi' element={<Parent />}></Route>
         </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
export {AppContext}