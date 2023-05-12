import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HocList = (WrapperComponent,title,url) => {
   const OrignalComponent = ()=>{
    const [data,setData]= useState(null);
    useEffect(()=>{
     
        const getData=async()=>{
               let res = await axios.get(url);
               setData(res.data);
        }
        getData()
    },[])
    return (
        
        <div >
            <h1>{title} </h1>
            <WrapperComponent apiData={data}></WrapperComponent>
        </div>
    );
   }

   return  OrignalComponent
   
};

export default HocList;