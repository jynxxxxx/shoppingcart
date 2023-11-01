import { useCartContext } from '../context/CartContext';

export function ChangeCartQuantity() {
  const { cart, setCart } = useCartContext();

  const handleFinalQuantity = (title, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.title === title) {
        return {
          ...product,
          quantity: newQuantity,
          total: newQuantity * parseFloat(product.price.replace('$', '')),
        };
      }
      return product;
    })
   
    setCart(updatedCart);
  };


  return { handleFinalQuantity };
}


export function IncrementButtons() {
  const {handleFinalQuantity} = ChangeCartQuantity()

  const handleInputChange = (e) => {
    const input = e.target;
    const title = input.title;
    const newQuantity = input.value;

    handleFinalQuantity(title, newQuantity);
  };
  
  const handleMinusOne = (e) => {
    const input = e.target.closest('.quantityinput').querySelector('input[type=number]');
    const title = input.title

    const currentQuantity = Number(input.value);

    const newQuantity = currentQuantity - 1;

    handleFinalQuantity(title, newQuantity);
  };

  const handleAddOne = (e) => {
    const input = e.target.closest('.quantityinput').querySelector('input[type=number]');
    console.log(input)
    
    const title = input.title
    const currentQuantity = Number(input.value);

    const newQuantity = currentQuantity + 1;

    handleFinalQuantity(title, newQuantity);
  };


  return { handleInputChange, handleMinusOne, handleAddOne };
}


