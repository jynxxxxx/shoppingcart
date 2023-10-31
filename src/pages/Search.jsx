import { AddToCart } from "../utilities/AddtoCart";
import { UseProductData } from "../data/ProductData";
import { useCartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import '../css/ProductCard.css'

export function Search() {
  const { filteredProducts } = useCartContext();
  const { error, loading } = UseProductData();
  const { handleAddToCart } = AddToCart()

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  console.log(filteredProducts)

  if (filteredProducts.length === 0){
    return (
      <>
        <div className="pageTitle">Search Results</div>
        <div className="searchError">
          No products match your search
        </div>
      </>
    )
  }
    
  return (
    <>
      <div className="pageTitle">Search Results</div>
      <div className="productctn">
        {filteredProducts.map((product) => (
          <div key={product.id} className="productcard">
            <div className="productinfo">
              <div className="cardcategory">{product.category}</div>
              <Link to={product.title} state={product.title} className="imagelink"  style={{ backgroundImage: `url(${product.image})`}} data-key={product.image}></Link>
              <Link to={product.title} state={product.title} className="titlelink">
                <div className="cardtitle">{product.title}</div>
              </Link>
            </div>
            <div className="pricecart">
              <div className="cardprice">{product.price}</div>
              <button type="button" onClick={handleAddToCart}>Cart Button</button>
            </div>
          </ div>
        ))}
      </div>
    </>
  );
}
