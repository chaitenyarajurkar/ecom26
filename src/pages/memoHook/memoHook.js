import React, { useMemo, useState } from 'react';
//topic name = useMemo hook
const MemoHook = () => {
    const [num,setNum] =useState(0);
    const [flag,setFlag] = useState(false);


    // const callNum=()=>{
    //     console.log(num,"here num changes")
    //     return num
    // }
    
   const count= useMemo(()=>{
    console.log(num,"here num changes")
    return num
   },[num])
  

    return (
        <div className='text-center'>
            <h4 >Memo Hook Component</h4>
            <button className='btn btn-primary' onClick={()=>setNum(num + 1)}>increase num</button>
            <p>{count}</p>
            <button className='btn btn-danger' onClick={()=>setFlag(!flag)}>Flag</button>


        </div>
    );
};

export default MemoHook;