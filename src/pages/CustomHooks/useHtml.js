import React from 'react';

const useHtml = (data) => {
    return (
        <div>
            <ul>
                {
                    data.map((item)=>{
                        return(
                            <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default useHtml;