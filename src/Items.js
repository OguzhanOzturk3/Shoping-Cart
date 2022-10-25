

import itemData from './itemData'
import React, { useState } from "react";

import ListItem from './comp/ListItem'




const Items = (cart) => {

  const [id, setId] = useState(0);
 
  console.log(id);

  const getId=(e)=>{
    
    setId(e.target.id );  
    }
   
    return (
      <div className='main'>
        
      

      <ListItem iData={itemData} getId={getId} />
       
       


      </div>
    );
  };
  
  export default Items;
  