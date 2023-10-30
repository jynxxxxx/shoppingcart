import { UseProductData } from "../data/ProductData";
import { useLocation } from "react-router-dom";
import { AddToCart } from "../utilities/AddtoCart";
import { ChangeQuantity } from "../utilities/ChangeQuantity";
import { useCartContext } from '../context/CartContext';
import { IncrementButtons } from "../utilities/ChangeQuantity";

export default function ProductDetails() {
  const { productData, error, loading } = UseProductData();
  const location = useLocation();
  const { handleAddToCart } = AddToCart()
  const { handleQuantityChange } = ChangeQuantity();
  const { quantity } = useCartContext();
  const { handleMinusOne, handleAddOne } = IncrementButtons()


  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const currentproduct = location.state;

  const filteredProducts = productData.filter((product) => product.title === currentproduct);

  return (
    <>
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id} className="detailsctn">
          <div key={product.id} className="detailscard">
            <div>{product.category}</div>
            <img className="productimage" src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <div>{product.description}</div>
            <div>{product.price}</div>
          </div>
          <div className="quantityinput">
            <button className="incbtn" onClick={ handleMinusOne }> - </button>
            <input className="quantity" type="number" value={ quantity } onChange={ handleQuantityChange } min={1}></input>
            <button className="incbtn" onClick={ handleAddOne }> + </button>
          </div>
          <button type="button" onClick={handleAddToCart}>Cart Button</button>
        </div>
      ))}
    </div>
    </>
  );
}