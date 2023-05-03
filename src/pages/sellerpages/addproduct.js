import axios from 'axios';
import React, { Component } from 'react';


// {
//     "ProductId": 0,   // default value 
//     "CreatedDate": "2023-04-27T15:39:33.823Z",

//     "ProductSku": "string",
//     "ProductName": "string",
//     "ProductPrice": 0,
//     "ProductShortName": "string",
//     "ProductDescription": "string",
//     "DeliveryTimeSpan": "string",
//     "CategoryId": 0,      //drop down (select input)
//     "ProductImageUrl": "string"
//   }
class Addproduct extends Component {
        constructor(props) {
            super(props);
            this.state={
                ProductId: 0,   
                CreatedDate: new Date(),
                ProductSku:"" ,
                ProductName:"",
                ProductPrice:0,
                ProductShortName:"",
                ProductDescription:"",
                DeliveryTimeSpan:"",
                CategoryId:"",
                ProductImageUrl:"",
                productTypes:[]
                
            }
        }

        async componentDidMount(){
               let res =await axios.get("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory");
                    console.log(res.data.data);
                    this.setState({
                        productTypes:res.data.data
                    }) 
        }
        
        onChangeHandler=(fieldName,e)=>{
            console.log(e.target.value)
          this.setState({
            [fieldName]:e.target.value
          })
        }
        onSubmitHandler=async(e)=>{
         e.preventDefault();
         console.log(this.state)
         let obj ={
            "ProductId": 0,
            "ProductSku": this.state.ProductSku,
            "ProductName": this.state.ProductName,
            "ProductPrice": this.state.ProductProductPriceSku,
            "ProductShortName": this.state.ProductShortName,
            "ProductDescription": this.state.ProductDescription,
            "CreatedDate": this.state.CreatedDate,
            "DeliveryTimeSpan": this.state.DeliveryTimeSpan,
            "CategoryId": this.state.CategoryId,
            "ProductImageUrl": this.state.ProductImageUrl,
          }

          let submitres = await axios.post("https://onlinetestapi.gerasim.in/api/Ecomm/CreateProduct",obj);
          console.log(submitres)
        }
    render() {
        return (
            <div className='row'>
                <h4 className='text-center'> Add Product</h4>
                <div className='offset-3 col-6 pt-3' >
                    <form  onSubmit={(e)=>this.onSubmitHandler(e)}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ProductSku</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"  onChange={(e)=>this.onChangeHandler("ProductSku",e)} placeholder="ProductSku" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ProductName</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"  onChange={(e)=>this.onChangeHandler("ProductName",e)} placeholder="ProductName" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ProductPrice</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" onChange={(e)=>this.onChangeHandler("ProductPrice",e)}  placeholder="ProductPrice" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ProductShortName</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>this.onChangeHandler("ProductShortName",e)} placeholder="ProductShortName" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ProductDescription</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>this.onChangeHandler("ProductDescription",e)} placeholder="ProductDescription" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">DeliveryTimeSpan</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>this.onChangeHandler("DeliveryTimeSpan",e)}  placeholder="DeliveryTimeSpan" />
                        </div>
                        <div className="from-group">
                        <label for="exampleInputEmail1">Product Category</label>
                            <select className="form-select" aria-label="Default select example"   onChange={(e)=>this.onChangeHandler("CategoryId",e)} >
                                <option selected>choose product</option>
                                {this.state.productTypes.map((item)=>{
                                    return(
                                        <option value={item.categoryId}>{item.categoryName}</option>
                               
                                    )
                                })}
                              
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">ProductImageUrl</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>this.onChangeHandler("ProductImageUrl",e)}  placeholder="ProductImageUrl" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Addproduct;