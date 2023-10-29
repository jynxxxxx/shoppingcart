import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartContext } from '../context/CartContext';
import { ChangeCartQuantity } from "../utilities/ChangeQuantity";
import RemoveFromCart from "../utilities/RemoveItem";

export default function Cart() {
  const { cart } = useCartContext();
  const [cartTotal, setCartTotal] = useState(0);
  const { handleFinalQuantity } = ChangeCartQuantity();
  const { removeFromCart } = RemoveFromCart()

  useEffect(() => {
    let total = 0;
    for (const product of cart) {
      const productPrice = Number(product.price.replace('$', ''));
      total += productPrice * product.quantity;
    }
    setCartTotal(total.toFixed(2));
  }, [cart]);


  return (
    <div>
      {Object.values(cart).map((product) => (
        <div key={product.title} className="cartproduct">
          <div className="cartcard">
            <Link to={product.title} state={product.title}>
              <img className='cartimage' src={product.image} alt={product.title} />
              <h3 className="carttitle">{product.title}</h3>
            </Link>
            <div className="cartprice">{product.price}</div>
            <input
              className="quantity"
              type="number"
              min={1}
              defaultValue={product.quantity}
              onChange={handleFinalQuantity}
            />
            <div className="totalprice">{product.total}</div>
            <button type="button" onClick={removeFromCart}>Remove From Cart</button>
          </div>
        </div>
      ))}
      <div className="cartTotal">Total Price: ${cartTotal}</div>
    </div>
  );
}
