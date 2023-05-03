import React, { Component } from 'react';
import axios from 'axios';
import Button from './button';
class Allproduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllProducts: []
            
        }
    }
    async componentDidMount() {
        console.log(this.state.getAllProducts.length)
        debugger
        let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
        
        this.setState({
            getAllProducts:res.data.data,
            

        })

        console.log(res.data.data)
    }
    deleteProduct=async(item)=>{
       console.log(item);
       let ress = await  axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductById",{params:{id:item.productId}});
       console.log(ress);
       let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
       this.setState({
           getAllProducts:res.data.data
       })
    }

    addToCart=()=>{
        console.log("add to crt call");
        
    }
    render() {
        return (
            <div className='container'>
              {!this.state.getAllProducts.length > 0  && <div className="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>}
            <div className='row'>
                {
                    this.state.getAllProducts.map((item)=>{

                        return(
                            <div className='col-4'>
                            <div class="card" style={{"width": "18rem"}}>
                            <img class="card-img-top" src={item.productImageUrl} width={200} height={180} alt="not available" />
                                <div class="card-body">
                                    <h5 class="card-title">{item.productName}</h5>
                                    <p class="card-text">{item.productDescription}</p>
                                    {/* <a href="#" class="btn btn-primary">Edit detail</a> */}
                                    <button className='btn btn-danger' onClick={()=>this.deleteProduct(item)}>Delete</button>
                                   <Button />
                                </div>
                        </div>
                        </div>
                        )
                    })
                }
               
            </div>
            </div>
        );
    }
}

export default Allproduct;