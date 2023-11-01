import { useCartContext } from '../context/CartContext';
import { ChangeCartQuantity } from './ChangeQuantity';

export function AddToCart() {
  const { cart, setCart, quantity, setQuantity } = useCartContext();
  const { handleFinalQuantity } = ChangeCartQuantity()

  const handleDetailAddToCart = (e) => {
    console.log("Add to Cart button clicked"); 

    const productCard = e.target.closest('.detailscard');
    console.log(productCard)

    const title = productCard.querySelector('.detailstitle').textContent;
    const image = productCard.querySelector('.detailsimage').getAttribute('data-key');
    const price = productCard.querySelector('.detailsprice').textContent;

    console.log(title)
    console.log(image)
    console.log(price)

    const inCartIndex = cart ? cart.findIndex((product) => product.title === title) : -1;

    if (inCartIndex !== -1) {
      handleFinalQuantity(title, Number(cart[inCartIndex].quantity) + Number(quantity));

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

  const handleSimpleAddToCart = (e) => {
    console.log("Add to Cart button clicked"); 

    const productCard = e.target.closest('.productcard');
    console.log(productCard)

    const title = productCard.querySelector('.cardtitle').textContent;
    const image = productCard.querySelector('.imagelink').getAttribute('data-key');
    const price = productCard.querySelector('.cardprice').textContent;

    const inCartIndex = cart ? cart.findIndex((product) => product.title === title) : -1;

   
    if (inCartIndex !== -1) {
      const updatedCart = [...cart];
      const newQuantity = updatedCart[inCartIndex].quantity + 1;
      updatedCart[inCartIndex].quantity = newQuantity;
      

      const productPrice = Number(updatedCart[inCartIndex].price.replace('$', ''));
      updatedCart[inCartIndex].total = productPrice * updatedCart[inCartIndex].quantity;
      setCart(updatedCart);
    } else {
      const productToAdd = {
        title,
        image,
        price,
        quantity: 1, 
      };
      const productPrice = Number(productToAdd.price.replace('$', ''));
      productToAdd.total = productPrice * productToAdd.quantity;
      setCart([...cart, productToAdd]);
    }

    setQuantity(1)

  };

  return { handleDetailAddToCart, handleSimpleAddToCart };
}
