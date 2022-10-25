import {  useEffect  } from "react";
import { Link,useParams } from 'react-router-dom'
import bag from './img/bag.png'
const Header=(props)=>{

    const {cart}=props;
    let i=0;

        console.log(cart);
      
  
        cart.forEach(key=>{
        i++;
     })
 
   
    return(
        <div id='header'>
            <div>
            <h1>MOVIE SHOP</h1>
            </div>

            <div className="header-cart">


         <div>
         <Link style={{ textDecoration: 'none' , color:'white'}} to="/">Products</Link>
            </div>     

            <Link style={{ textDecoration: 'none' , color:'white'}} to="/cart">
          <div className="bag">
          <img src={bag}></img>
          <p>{i}</p>
         
           </div>

           </Link>
            </div>
            
           
        </div>
    )
}
export default Header;