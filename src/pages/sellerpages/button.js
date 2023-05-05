import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Button = () => {
    const {IncreaseCart} = useContext(AppContext)
    const addToCart=()=>{
        let ls = localStorage.getItem("isLogin");
        if(ls){
            IncreaseCart()
        }else{
            alert("please login")
        }
    }
    return (
        <div>
             <button className='btn btn-primary ' onClick={()=>addToCart()}>Add to Cart</button>
        </div>
    );
};

export default Button;