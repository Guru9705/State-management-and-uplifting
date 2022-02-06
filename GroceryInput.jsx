import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const GroceryInput = ({ grolist, setGroList }) => {
    const [value, setValue] = useState("");

    const inputHandle = (e) => {
        setValue(e.target.value);
    }
    const addHandler = () => {
        if (value !== "") {
            setGroList([...grolist, {
                value,
                id:uuidv4(),
            }]);
        }
        
        setValue("")
    }
    return ( 
        <div>
            <input type="text" onChange={inputHandle} value={value} />
            <button onClick={addHandler}>ADD</button>
        </div>
     );
}
 
export default GroceryInput;