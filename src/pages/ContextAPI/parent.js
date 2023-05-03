import React, { createContext, useState } from 'react';
import AllChild from './allChild';


//crete context
// provider
// consume 

const ParentContext = createContext()

const Parent = () => {
    const [user,setUser]= useState(3);
    const [name,setName]= useState("codeFirst");
    return (
        <div>
            <h1>this is parent</h1>
            <ParentContext.Provider value={{user,name}}>
                
           <AllChild />
            
            </ParentContext.Provider>
           
            
        </div>
    );
};

export default Parent;
export {ParentContext};