
import { Link,useParams } from 'react-router-dom'
import itemData from './itemData'
import { useState, useEffect  } from "react";


const ItemDetail=(props) =>{

  const { item_id } = useParams();
  const [iname, setIname] = useState("");
  const {cart,setCart}=props;


  useEffect(() => {

    itemData.find(obj => {
    if(obj.id==item_id){
      setIname(obj.name)

    }

    });
    
  })


  const addCart=()=>{

    itemData.find(obj => {
      if(obj.id==item_id){
        
        setCart([...cart,obj])
        console.log(cart);
     
      }
      
      });
     
  }

  return (
    <div>
    <h1>Item Detail</h1>
  <h1>{iname}</h1>
  <button onClick={addCart}>ADD Cart</button> 
  <div><Link to="/">Items</Link></div>
  <div><Link to="/cart">Cart</Link></div>
</div>
  );
}

export default ItemDetail;
