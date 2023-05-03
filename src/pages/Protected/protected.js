import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        let ls = localStorage.getItem("isLogin");
        if(!ls){
            navigate('/')
        }
    })

    return (
        <div>
            {props.Component}
        </div>
    );
};

export default Protected;