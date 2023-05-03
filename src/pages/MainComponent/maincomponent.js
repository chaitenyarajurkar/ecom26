import React from 'react';
import Childone from './childone';

const Maincomponent = () => {
    
    return (
        <div>
            <h1 style={{color:"red"}}> this is Prent component </h1>
            <Childone ></Childone>
        </div>
    );
};

export default Maincomponent;