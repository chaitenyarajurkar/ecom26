import React, { Component, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar=()=>{
  const {cartValues} = useContext(AppContext);
  const [isLogin,setIslogin] =useState(false);
  const [isAdmin,setIsAdmin] =useState(false);
    useEffect(()=>{
        
            let ls =localStorage.getItem("isLogin");
            let ls2 =localStorage.getItem("isAdmin");
               if(ls){
                
                setIslogin(true);
               }
               if(ls2){
                setIsAdmin(true);
               }
    },[])
       const logout=()=>{
            localStorage.clear();
            window.location.reload();
       }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">ECCOM</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="/addProduct">Add Product </a> */}
                                <Link to="/addProduct" className="nav-link" >Add Product</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/allProduct">All Product</a> */}
                                <Link to="/" className="nav-link" >All Product</Link>
                            </li>
                            {!isAdmin && <> 
                            {/* <li className="nav-item">
                                <Link to="/constextApi" className="nav-link" >Context Api</Link>
                            </li> */}
                            <li className="nav-item">
                               <p  className="nav-link"> <FontAwesomeIcon icon={faCartShopping} />{" "}<sup>{cartValues}</sup></p> 
                            </li> </>}

                            <li className="nav-item">
                                {/* <a className="nav-link" href="/allProduct">All Product</a> */}
                                <Link to="/memoHook" className="nav-link" >useMemoTopic</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/allProduct">All Product</a> */}
                                <Link to="/fileone" className="nav-link" >CuntomHook</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/allProduct">All Product</a> */}
                                <Link to="/filetwo" className="nav-link" >filetwo</Link>
                            </li>
                        </ul>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav ">
                                
                               {isLogin &&  <li class="nav-item">
                                    <p class="nav-link" onClick={()=>logout()}> <FontAwesomeIcon icon={faRightFromBracket} />Logout</p>
                                </li>}
                                {!isLogin &&   <li className="nav-item">
                                <Link to="/login" className="nav-link" > <FontAwesomeIcon icon={faUser} />Login</Link>
                            </li>}
                            </ul>
                        </div>
                       
                    </div>
                </nav>
            </div>
        );
    }


export default Navbar;