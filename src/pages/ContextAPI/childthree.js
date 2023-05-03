import React, { useContext } from 'react';
import { ParentContext } from './parent';


//hooks  useContext
const Childthree = () => {
    const {user,name} = useContext(ParentContext)
      console.log(user)
    return (
        <div>
            <h4>Child three {name}</h4>
        </div>
    );
};

export default Childthree;