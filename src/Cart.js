import itemData from './itemData'
import { Link } from 'react-router-dom'
import {  useState,useEffect  } from "react";
const Cart =(props)=>{
const {cart,setCart} = props;
const [counts, setCounts] = useState([]);

function removeItem(e){
    const i= e.target.id;
    console.log("target id:"+i)
    let a=0;
    let b=1;
    let arr = cart;
    
    
    while(b){
     
        if(cart[a].id==i){
            
            arr.splice(a,1);
            setCart([...arr]);
            
            counts[i]=counts[i]-1;
            console.log(cart);
                  
            console.log(counts);
            console.log("-------------");
         
            b=0;
        }
        else{
            a++;
        }
    
    }
    
    }


useEffect(() => {
    let count = [...counts]
 cart.forEach(function (x) { count[x.id] = (count[x.id] || 0) + 1; });
 setCounts([...count]);
        
    console.log("asdasdasd")
   
  },cart)


return(
<div>
  { counts.map((item,index)=> {
    if(item>0){
    return <div key={index} > id={index} name= {itemData[index].name} count={item}<button  id={index} onClick={removeItem}>Remove</button></div>
    }

       
})}

<div><Link to="/">Items</Link></div>
</div>
);
}

export default Cart;