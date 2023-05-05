import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogin:false,
            
        }
    }
      componentDidMount(){
        
           let ls = localStorage.getItem("isLogin");
           if(ls){
            this.setState({
                isLogin:true,

               })
           }
      }
    login=(e)=>{
    
           e.preventDefault();
         console.log(this.state);
         
         if(this.state.username==="admin"  && this.state.password==="123"){
            
               this.setState({
                isLogin:true
               })
               localStorage.setItem("isLogin",true);
               localStorage.setItem("isAdmin",true);
            //    localStorage.clear() 
            debugger
            window.location.reload()

         }else{
            
            alert("please check credentials")
         }
         
    }
    handleChange=(fieldname,e)=>{
    
     this.setState({
        [fieldname]:e.target.value
     })
    }


  

    render() {
      
        return (
            <div className='col-6  offset-3'>  

{this.props.Component}            
               {this.state.isLogin && <Navigate to={"/"} replace={true} ></Navigate>} 
                <form onSubmit={(e)=>this.login(e)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username / Mobile no.</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter username" onChange={(e)=>this.handleChange("username",e)} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label> 
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>this.handleChange("password",e)} />
                    </div>
                    {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;