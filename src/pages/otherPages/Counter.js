import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] =useState(0);

    return (
        <div>
            <h4>{count}</h4>
            <button className='btn btn-primary' onClick={()=>setCount(count + 1)} >Increase Count</button>
        </div>
    );
};

export default Counter;