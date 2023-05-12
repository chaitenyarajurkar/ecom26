import React from 'react';
import HocList from '../Hoc/HocList';

const UserList = ({apiData}) => {
    console.log("apiData>>>>>>>>>",apiData)
    return (
        <div>
            {apiData.map((item)=>{
                return(
                  <p> {item.name}</p> 
                )
            })}
        </div>
    );
};

const DisplayUser = HocList(UserList,"User list","https://jsonplaceholder.typicode.com/users");

export default DisplayUser;