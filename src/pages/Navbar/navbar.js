import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const Navbar=()=>{
  const {cartValues} = useContext(AppContext)
 
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
                                <Link to="/allProduct" className="nav-link" >All Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/constextApi" className="nav-link" >Context Api</Link>
                            </li>
                            <li className="nav-item">
                               <p  className="nav-link"> Cart{cartValues}</p> 
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }


export default Navbar;