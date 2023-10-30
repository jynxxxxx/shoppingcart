import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import '../css/Header.css'

export default function Header() {
  const { cart } = useCartContext();

  if (cart.length === 0)
  return (
    <div className="header">
      <div className="name">
        <Link to="/shoppingcart">Store Name</Link>
      </div>
      <object className= "icon carticon" data="./shopping-bag.png" alt="cart"></object>     
    </div>)

  return (
    <div className="header">
      <div className="name">
        <Link to="/shoppingcart">Store Name</Link>
      </div>
      <object className= "icon carticon" data="./shopping-bag.png" alt="cart"></object>
      <div className="itemcount">{cart.length}</div>
    </div>
  )
}