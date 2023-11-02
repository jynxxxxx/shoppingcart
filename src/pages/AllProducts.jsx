import { Link } from "react-router-dom";
import { UseProductData } from "../data/ProductData";
import '../css/ProductCard.css'
import { AddToCart } from "../utilities/AddtoCart";


export function AllProducts() {
  const { productData, error, loading } = UseProductData();
  const { handleSimpleAddToCart } = AddToCart();

  
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;


  return (
    <>
      <div className="pageTitle">All Products</div>
      <div className="productctn">
        {Object.values(productData).map((product) => (
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
              <button type="button" onClick={handleSimpleAddToCart}>
                <object className= "addtocarticon" data="./add-to-cart.png"></object>
              </button>
            </div>
          </ div>
        ))}
      </div>
    </>
  );
}



 
  
  

