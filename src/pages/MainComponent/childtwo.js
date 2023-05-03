import React from 'react';
import { AppContext } from '../../App';
const Childtwo = () => {
    return (
        <div>
            <AppContext.Consumer>
                {(data)=>{
                    console.log(data)
                   
                    return <h1 style={{color:"blue"}}>This is child two{data}</h1>
                   
                }}
            </AppContext.Consumer>
            
        </div>
    );
};

export default Childtwo;