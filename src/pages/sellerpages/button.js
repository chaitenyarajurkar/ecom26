import React, { useContext } from 'react';
import { AppContext } from '../../App';

const Button = () => {
    const {IncreaseCart} = useContext(AppContext)
    const addToCart=()=>{
        IncreaseCart()
    }
    return (
        <div>
             <button className='btn btn-primary ' onClick={()=>addToCart()}>Add to Cart</button>
        </div>
    );
};

export default Button;