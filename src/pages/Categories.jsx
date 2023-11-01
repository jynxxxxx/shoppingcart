import { UseProductData } from "../data/ProductData";
import { Link, useLocation } from "react-router-dom";
import { AddToCart } from "../utilities/AddtoCart";
import '../css/ProductCard.css'

export default function Categories() {
  const { productData, error, loading } = UseProductData();
  const location = useLocation();
  const { handleSimpleAddToCart } = AddToCart()

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const currentcat = location.state;

  const filteredCategory = productData.filter((product) => product.category === currentcat);

  return (
    <>
      <div className="pageTitle">{currentcat}</div>
      <div className="productctn">
        {filteredCategory.map((product) => (
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
              <button type="button" onClick={handleSimpleAddToCart}>Cart Button</button>
            </div>
          </ div>
        ))}
      </div>
    </>
  );
}

