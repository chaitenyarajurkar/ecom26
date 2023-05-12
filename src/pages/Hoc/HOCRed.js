import React from 'react';

const HOCRed = (props) => {
    return (
        <div style={{backgroundColor:"red",width:200}}>
            <h1>Red Counter</h1>
           <props.cmp></props.cmp>
        </div>
    );
};

export default HOCRed;