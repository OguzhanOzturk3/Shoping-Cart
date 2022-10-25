import itemData from './itemData'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import deleteItem from './img/delete.png'
const Cart = (props) => {
    const { cart, setCart } = props;
    const [counts, setCounts] = useState([]);
    let sum=0;
    function removeItem(e) {
        const i = e.target.id;
        console.log("target id:" + i)
        let a = 0;
        let b = 1;
        let arr = cart;


        while (b) {

            if (cart[a].id == i) {

                arr.splice(a, 1);
                setCart([...arr]);

                counts[i] = counts[i] - 1;
                console.log(cart);

                console.log(counts);
                console.log("-------------");

                b = 0;
            }
            else {
                a++;
            }

        }

    }


    useEffect(() => {
        
        let count = [...counts]
        cart.forEach(function (x) { count[x.id] = (count[x.id] || 0) + 1; });
        setCounts([...count]);

        console.log("asdasdasd")

    }, cart)


    return (
        <div className='main-cart'>
            <div className='cart-items'>
                {counts.map((item, index) => {
                    if (item > 0) {
                        sum = sum+itemData[index].price*item;
                        return <div key={index} className='cart-item'>
                            <div className='cart-img'><img src={itemData[index].image}></img></div>

                            <div className='cart-name'>{itemData[index].name}</div>
                            <div className='cart-count'>{item}</div>
                            <div id={index} onClick={removeItem} className='cart-delete' >
                             
                                <img id={index} src={deleteItem} />
                                
                                </div>
                            <div className='cart-total'>Price: {Math.round(itemData[index].price*item*100)/100}$</div>
                            
                            


                        </div>
                    }


                })}

                <h3>Total Price:{Math.round(sum*100)/100}$</h3>

            </div>
        </div>
    );
}

export default Cart;