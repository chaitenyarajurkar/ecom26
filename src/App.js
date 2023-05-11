import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './pages/Navbar/navbar';
import Addproduct from './pages/sellerpages/addproduct';
import Allproduct from './pages/sellerpages/allproduct';
import Protected from './pages/Protected/protected';
import Parent from './pages/ContextAPI/parent';
import { Suspense, createContext, lazy, useState } from 'react';
// import MemoHook from './pages/memoHook/memoHook';
// import Fileone from './pages/otherPages/fileone';
// import Filetwo from './pages/otherPages/filetwo';

// lazyLoading
const Fileones = lazy(()=>import('./pages/otherPages/fileone'));
const MemoHooks =lazy(()=>import('./pages/memoHook/memoHook'));
const FileTwo = lazy(()=>import('./pages/otherPages/filetwo'));

const AppContext= createContext()
function App() {
  const [cartValues,setCartValues] = useState(0);

  const IncreaseCart =()=>{
    
    setCartValues(cartValues + 1);
  }

  return (
    <div>
      <AppContext.Provider value={{cartValues,IncreaseCart}}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Suspense fallback={<div>....Loading</div>}>
         <Routes>
          <Route path='/' element={<Allproduct  />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/addProduct' element={<Protected  Component={<Addproduct/>} />}></Route>
          {/* <Route path='/allProduct' element={<Protected  Component={<Allproduct/>} />}></Route> */}
          <Route path='/constextApi' element={<Parent />}></Route>

          <Route path='/memoHook' Component={MemoHooks}></Route>
          <Route path='/fileone' Component={Fileones} ></Route>
          <Route path='/filetwo' Component={FileTwo}></Route>

         </Routes>
         </Suspense>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
export {AppContext}