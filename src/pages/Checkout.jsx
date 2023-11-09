import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../css/Checkout.css'

export function Checkout() {
  const { cart } = useCartContext();
  const { cartTotal } = useCartContext()

  const navigate = useNavigate();

  return (
    <>
      <div className="pageTitle">Checkout</div>
      <div className="checkoutctn">
      {Object.values(cart).map((product) => (
        <div key={product.title} className="checkoutproduct">
          <div className="checkoutcard">
            <div className="checkouttitle">{product.title}</div>
            <div className="checkoutimage" style={{ backgroundImage: `url(${product.image})`}}></div>
            <div className="checkoutprice">{product.price}</div>
            <div className="checkoutquantity">x {product.quantity}</div>
            <div className="checkouttotalprice">Total: ${parseFloat(product.total).toFixed(2)}</div>
          </div>
        </div>
      ))}
      </div>
      <div className="checkoutTotal">Cart Total: ${parseFloat(cartTotal).toFixed(2)}</div>
      <div className="finalcheckout">
          <button className="finalcheckoutbtn"
            onClick={() => {
              window.localStorage.clear();
              alert('Your purchase has been received and is on its way!')
              navigate('/', { replace: true });
            }}>Checkout
          </button>
      </div>
    </>
  );
}
