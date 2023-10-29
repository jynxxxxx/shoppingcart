import { useCartContext } from '../context/CartContext';

export default function AddToCart() {
  const { cart, setCart, quantity, setQuantity } = useCartContext();

  const handleAddToCart = (e) => {
    const productCard = e.target.closest('.productctn');

    const title = productCard.querySelector('.cardtitle').textContent;
    const image = productCard.querySelector('.productimage').src;
    const price = productCard.querySelector('.cardprice').textContent;

    const inCartIndex = cart ? cart.findIndex((product) => product.title === title) : -1;

   
    if (inCartIndex !== -1) {
      const updatedCart = [...cart];
      const newQuantity = updatedCart[inCartIndex].quantity + Number(quantity);
      updatedCart[inCartIndex].quantity = newQuantity;

      const productPrice = Number(updatedCart[inCartIndex].price.replace('$', ''));
      updatedCart[inCartIndex].total = productPrice * updatedCart[inCartIndex].quantity;
      setCart(updatedCart);
    } else {
      const productToAdd = {
        title,
        image,
        price,
        quantity: quantity, 
      };
      const productPrice = Number(productToAdd.price.replace('$', ''));
      productToAdd.total = productPrice * productToAdd.quantity;
      setCart([...cart, productToAdd]);
    }

    setQuantity(1)

  };

  return { handleAddToCart };
}
