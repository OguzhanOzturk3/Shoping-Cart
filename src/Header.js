import {  useEffect  } from "react";

const Header=(props)=>{

    const {cart}=props;
    let i=0;

        console.log(cart);
      
  
        cart.forEach(key=>{
        i++;
     })
 
   
    return(
        <div>
            <h2>This is Header.</h2>
            <p>{i} Items in cart</p>
        </div>
    )
}
export default Header;