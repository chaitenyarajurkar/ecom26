import React from 'react';

const HOCGreen = (props) => {
    return (
        <div>
            <div style={{backgroundColor:"green",width:200}}>
            <h1>Red Counter</h1>
           <props.cmp></props.cmp>
        </div>
        </div>
    );
};

export default HOCGreen;