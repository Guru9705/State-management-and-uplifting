import React, { useState } from 'react';

const Grocery = ({ grocery, deleteHandler,updateHandler}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newVal, setNewVal] = useState(false);
    return (
        <div className='list-item'>
            {isEdit ?
                (<input type="text" onChange={(e)=>setNewVal(e.target.value)}/>) :
                ( <li>{grocery.value}</li>)
            }
           
            <button onClick={() => deleteHandler(grocery)}>Delete</button>
            {isEdit ?
                (<button onClick={() => { updateHandler(grocery, newVal);setIsEdit(false)}}>Save</button>):(<button onClick={() => setIsEdit(true)}>Edit</button>)}
            
    </div> );
}
 
export default Grocery;