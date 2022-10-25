
import { Link, useParams } from 'react-router-dom'
import itemData from './itemData'
import { useState, useEffect } from "react";


const ItemDetail = (props) => {

  const { item_id } = useParams();
  const [iname, setIname] = useState("");
  const { cart, setCart } = props;


  useEffect(() => {

    itemData.find(obj => {
      if (obj.id == item_id) {
        setIname(obj)

      }

    });

  })


  const addCart = () => {

    itemData.find(obj => {
      if (obj.id == item_id) {

        setCart([...cart, obj])
        console.log(cart);

      }

    });

  }

  return (
    <div className='main'>
      <div className='detail-main'>
        <div> <img src={iname.image}></img></div>

        <div className='detail-item'>
          <div className='info-name'><p>{iname.name}</p></div>
          <div className='info'><h1>Price:</h1><p> {iname.price}$</p></div>
          <div className='info'><p><h4>Description</h4><hr></hr> {iname.description}</p></div>
          
          <div className='add-cart'>
          <button onClick={addCart}>ADD Cart</button>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default ItemDetail;
