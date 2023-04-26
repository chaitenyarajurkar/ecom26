import React, { Component } from 'react';
import axios from 'axios';
class Allproduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllProducts: []
        }
    }
    async componentDidMount() {
        let res = await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
        this.setState({
            getAllProducts:res.data.data
        })

        console.log(res.data.data)
    }

    render() {
        return (
            <div className='row'>
                {
                    this.state.getAllProducts.map((item)=>{

                        return(
                            <div className='col-4'>
                            <div class="card" style={{"width": "18rem"}}>
                            <img class="card-img-top" src={item.productImageUrl} alt="not available" />
                                <div class="card-body">
                                    <h5 class="card-title">{item.productName}</h5>
                                    <p class="card-text">{item.productDescription}</p>
                                    <a href="#" class="btn btn-primary">Edit detail</a>
                                </div>
                        </div>
                        </div>
                        )
                    })
                }
               
            </div>
        );
    }
}

export default Allproduct;