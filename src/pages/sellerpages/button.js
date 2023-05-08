import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import Modal from '../otherui/modal';

const Button = () => {
    const {IncreaseCart} = useContext(AppContext);
    const [showModal,setShowModal] = useState(false);
    const addToCart=()=>{
        let ls = localStorage.getItem("isLogin");
        if(ls){
            IncreaseCart()
        }else{
            // alert("please login")
            setShowModal(true)
        }
    }
    const closeModal=()=>{
        setShowModal(false)
    }
    return (
        <div>
             <button className='btn btn-primary ' onClick={()=>addToCart()}>Add to Cart</button>

             {showModal && <Modal message="PLese Login " closeModal={closeModal} />}

        </div>
    );
};

export default Button;