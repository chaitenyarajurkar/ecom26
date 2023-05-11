import React, { useState } from 'react';
// 1 the hook which return data and function
const useCounter = () => {

    const [count, setCount] = useState(0);
    const handleIncrement= ()=>{
        setCount(count + 1)
    }

    return{
        count,
        handleIncrement
    }
    
};

export default useCounter;