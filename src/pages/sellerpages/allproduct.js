import React, { Component } from 'react';
import axios from 'axios';
import Button from './button';
import Modal from '../otherui/modal';
class Allproduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllProducts: [],
            showModalpopup:false,
            showDelete:false
            
        }
    }
    async componentDidMount() {
        console.log(this.state.getAllProducts.length)
        
        let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
        let ls = localStorage.getItem("isAdmin");
       
        this.setState({
            getAllProducts:res.data.data,
            showDelete:ls ? true: false
        })

        console.log(res.data.data)
    }
    deleteProduct=async(item)=>{
       console.log(item);
       this.setState({
        showModalpopup:true
       })
    //    let ress = await  axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductById",{params:{id:item.productId}});
    //    console.log(ress);
    //    let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
    //    this.setState({
    //        getAllProducts:res.data.data
    //    })
    }

    addToCart=()=>{
        console.log("add to crt call");
        
    }
    closeModal=()=>{
        this.setState({
            showModalpopup:false
        })
    }


    render() {
        return (
            <div className='container'>
              {!this.state.getAllProducts.length > 0  && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
            <div className='row'>
                {
                    this.state.getAllProducts.map((item)=>{

                        return(
                            <div className='col-4'>
                            <div className="card" style={{"width": "18rem"}}>
                            <img className="card-img-top" src={item.productImageUrl} width={200} height={180} alt="not available" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productDescription}</p>
                                    {/* <a href="#" className="btn btn-primary">Edit detail</a> */}
                                  {this.state.showDelete &&   <button className='btn btn-danger' onClick={()=>this.deleteProduct(item)}>Delete</button>}
                                   <Button />
                                </div>
                        </div>
                        </div>
                        )
                    })
                }
               
            </div>


              {this.state.showModalpopup && <Modal message="Are you sure want to delelte item" closeModal={()=>this.closeModal()}  /> }
            </div>
        );
    }
}

export default Allproduct;