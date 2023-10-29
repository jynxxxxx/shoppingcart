import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import '../css/NavBar'

export default function NavBar() {
  const { cart } = useCartContext();

  return (
    <div className="navbar">
      <Link to="/shoppingcart">Store Name</Link>
      <div><Link to="/shoppingcart/checkout">
        <object className= "icon" data="./shopping-bag.png" alt="cart"></object>
        <div className="itemcount">{cart.length}</div>
      </Link></div>
    </div>
  )
}