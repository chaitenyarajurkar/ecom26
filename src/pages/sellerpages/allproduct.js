import React, { Component } from 'react';
import axios from 'axios';
import Button from './button';
class Allproduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllProducts: [],
            showModalpopup:false
            
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
                                    <button className='btn btn-danger' onClick={()=>this.deleteProduct(item)}>Delete</button>
                                   <Button />
                                </div>
                        </div>
                        </div>
                        )
                    })
                }
               
            </div>


              {this.state.showModalpopup &&  <div className="modal" tabindex="-1" style={{display:"block"}} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.closeModal()}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default Allproduct;