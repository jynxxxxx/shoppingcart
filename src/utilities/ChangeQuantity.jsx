import { useCartContext } from '../context/CartContext';

export default function ChangeQuantity() {
  const { setQuantity } = useCartContext();

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
  };


  return { handleQuantityChange };
}

export function ChangeCartQuantity() {
  const { cart, setCart } = useCartContext();

  const handleFinalQuantity = (e) => {
    const productCard = e.target.closest('.cartproduct');
    const title = productCard.querySelector('.carttitle').textContent;
    const newQuantity = e.target.value;

    const inCartIndex = cart.findIndex((product) => product.title === title);

    const updatedCart = [...cart];
    updatedCart[inCartIndex].quantity = newQuantity;

    const productPrice = Number(updatedCart[inCartIndex].price.replace('$', ''));
    updatedCart[inCartIndex].total = productPrice * updatedCart[inCartIndex].quantity;
    setCart(updatedCart);

  };

  return { handleFinalQuantity };
}


