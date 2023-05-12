import React from 'react';
import DisplayUser from './Userlist';

// import Counter from './Counter';
// import HOCRed from '../Hoc/HOCRed';
// import HOCGreen from '../Hoc/HOCGreen';



//Higher Order Component 

// it is an pure function 

// take props as component and return as modified component 
const Filetwo = () => {

    return (
        <div>
            {/* <HOCRed cmp={Counter}></HOCRed>
            <HOCGreen cmp={Counter}></HOCGreen> */}
   <DisplayUser></DisplayUser>


            
        </div>
    );
};

export default Filetwo;