import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartContext } from '../context/CartContext';
import { IncrementButtons } from "../utilities/ChangeQuantity";
import '../css/SideCart.css'
import RemoveFromCart from "../utilities/RemoveItem";

export function SideCart() {
  const { cart } = useCartContext();
  const {cartTotal, setCartTotal} = useCartContext()
  const { handleInputChange, handleMinusOne, handleAddOne } = IncrementButtons()
  const { removeFromCart } = RemoveFromCart()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let total = 0;
    for (const product of cart) {
      const productPrice = Number(product.price.replace('$', ''));
      total += productPrice * product.quantity;
    }
    setCartTotal(total.toFixed(2));
  }, [cart]);

  const openSideCart = () => {
    setIsSidebarOpen(true);
    document.querySelector('.sidebar').classList.add('show');
  };

  const closeSideCart = () => {
    setIsSidebarOpen(false);
    document.querySelector('.sidebar').classList.remove('show');
  };

  window.addEventListener('click', (e) => {
    if (isSidebarOpen) {
      if (!e.target.closest('.sidebar')) {
        closeSideCart();
      }
    } else {
      if (e.target.matches('.carticon') || e.target.matches('.itemcount')) {
        openSideCart();
      }
    }
  });

  return (
    <>
      <div className="sidebar">
        <div className="closeSideCart" onClick={closeSideCart}>
          <div>X</div>
        </div>
        <div className="sideCart">
          <div className="pageTitle">Cart</div>
          <div className="cartctn">
            {Object.values(cart).map((product) => (
              <div key={product.title} className="cartproduct">
                <div className="cartcard">
                  <div className="cartfirstrow">
                    <Link to={`./products/${product.title}`} state={product.title} className="carttitlelink">
                      <div className="carttitle">{product.title}</div>
                    </Link>
                    <button type="button" className='removebtn' onClick={removeFromCart}>X</button>
                  </div>
                  <Link to={`./products/${product.title}`} state={product.title} className="cartimagelink" style={{ backgroundImage: `url(${product.image})`}} data={product.image}></Link>
                  <div className="cartprice">{product.price}</div>
                  <div className="quantityinput">
                    <button className="incbtn" onClick={ handleMinusOne }> - </button>
                    <input
                      className="quantity"
                      type="number"
                      title ={product.title}                      
                      min={1}
                      value={product.quantity}
                      onChange={ handleInputChange }
                    />
                    <button className="incbtn" onClick={ handleAddOne }> + </button>
                  </div>
                  <div className="totalprice">Total: ${parseFloat(product.total).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="cartTotal">Cart Total: ${parseFloat(cartTotal).toFixed(2)}</div>
          
          <div className="cartbtns">
            <button
                className="clearCart"
                onClick={() => {
                  window.localStorage.clear();
                  window.location.reload();
                }}
              >
                Clear Cart
              </button>
            <div className="checkout">
              <Link to="/shoppingcart/checkout">
                <button className="checkoutbtn" onClick = {closeSideCart}> Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
