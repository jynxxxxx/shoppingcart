import { Link } from "react-router-dom";
import { UseProductData } from "../data/ProductData";
import '../css/AllProducts'
import AddToCart from "../utilities/AddtoCart";
import ChangeQuantity from "../utilities/ChangeQuantity";
import { useCartContext } from '../context/CartContext';


export default function AllProducts() {
  const { productData, error, loading } = UseProductData();
  const { handleAddToCart } = AddToCart();
  const { handleQuantityChange} = ChangeQuantity();
  const { quantity } = useCartContext();

  
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;


  return (
    <div>
      {Object.values(productData).map((product) => (
        <div key={product.id} className="productctn">
          <Link to={product.title} state={product.title}>
            <div className="productcard">
              <div className="cardcategory">{product.category}</div>
              <img className='productimage' src={product.image} alt={product.title} />
              <h3 className="cardtitle">{product.title}</h3>
              <div className="cardprice">{product.price}</div>
            </div>
          </Link>
          <button type="button" onClick={handleAddToCart}>Cart Button</button>
          <input className="quantity" type="number" value={ quantity } onChange={ handleQuantityChange }></input>
        </ div>
      ))}
    </div>
  );
}



 
  
  

