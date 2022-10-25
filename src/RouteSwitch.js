import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Items from "./Items";
import Cart from "./Cart";
import Header from "./Header";
import { useState  } from "react";
import './style.css';


const RouteSwitch = () => {

  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Header cart={cart} />,<Items cart={cart} />]} />
        <Route path="itemdetail/:item_id"  element={[<Header cart={cart} />,<ItemDetail cart={cart} setCart={setCart} />]} />
        <Route path="cart"  element={[<Header cart={cart} />,<Cart cart={cart} setCart={setCart} />]} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
