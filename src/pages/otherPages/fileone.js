import React from 'react';
import useCounter from '../CustomHooks/useCounter';
import useApi from '../CustomHooks/useApi';
import useHtml from '../CustomHooks/useHtml';

const Fileone = () => {
    const hookflow = useCounter();
    const hookflow2 = useCounter();
    const apidata = useApi("https://jsonplaceholder.typicode.com/todos/1");
    const users= useApi("https://jsonplaceholder.typicode.com/users");
    const data =useHtml(["cars","bike","cycle"]);

    console.log(apidata,users)
    return (
        <div className='text-center'>
            
            <div>
            <p>Count No: {hookflow.count}</p>
            <button className='btn btn-primary' onClick={()=>hookflow.handleIncrement()}>Increment Handle</button>
            </div>

            <div>
            <p>Count No2: {hookflow2.count}</p>
            <button className='btn btn-primary' onClick={()=>hookflow2.handleIncrement()}>Increment Handle2</button>
            </div>

            <h4>{apidata?.title}</h4>
            {/* {apidata && apidata?.title && <h4>{apidata.title}</h4>} */}

            <div>
                {data}
            </div>
            <div>
                {useHtml(["cars","bike","cycle"])}
            </div>

        </div>
    );
};

export default Fileone;