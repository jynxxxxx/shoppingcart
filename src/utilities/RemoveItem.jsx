import { useCartContext } from '../context/CartContext';

export default function RemoveFromCart() {
  const { cart, setCart } = useCartContext();

  const removeFromCart = (e) => {
    const productCard = e.target.closest('.cartproduct');

    const title = productCard.querySelector('.carttitle').textContent;

    const inCartIndex = cart.findIndex((product) => product.title === title)

    const updatedCart = [...cart];

    updatedCart[inCartIndex] = { ...updatedCart[inCartIndex], quantity: 1 };

    updatedCart.splice(inCartIndex, 1);

    setCart(updatedCart);
  }

  return { removeFromCart };
}
