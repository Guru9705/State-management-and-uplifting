import React, { useState } from 'react';
import GroceryInput from './GroceryInput';
import Grocery from './Grocery';

import ReactDOM from 'react-dom';


const GroceryList = () => {
  
    const [grolist, setGroList] = useState([]);

    const updateHandler = (item, name) => {
        console.log("fuytfuytf",item,name)
        const newList = grolist.map((x) => {
            if (x.id == item.id) {
                x.value = name;
                return x;
            } else {
                return x;
            }
               
            
        })
        setGroList(newList)
    }
    const deleteHandler = (item) => {
        console.log(item)
        const newList = grolist.filter((x) =>  x.id !== item.id );
        setGroList(newList)
    }
    return (
        <div>
            <GroceryInput grolist={grolist} setGroList={setGroList} />
            <ul className='gro-list'>
             {console.log(grolist)}
            {grolist.map((g) => {
                return (
                    <Grocery grocery={g} key={g.id} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
                        
                        
                )
            })} 
                </ul>
        </div>
    );
}
 
export default GroceryList;