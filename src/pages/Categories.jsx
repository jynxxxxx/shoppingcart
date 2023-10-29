import { UseProductData } from "../data/ProductData";
import { Link, useLocation } from "react-router-dom";
import AddToCart from "../utilities/AddtoCart";

export default function Categories() {
  const { productData, error, loading } = UseProductData();
  const location = useLocation();
  const { handleAddToCart } = AddToCart()

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const currentcat = location.state;

  // Filter the productData based on the current category
  const filteredProducts = productData.filter((product) => product.category === currentcat);

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id} className="productctn">
          <Link to={product.title} state={product.title}>
            <div className="productcard">
              <div className="cardcategory">{product.category}</div>
              <img className='productimage' src={product.image} alt={product.title} />
              <h3 className="cardtitle">{product.title}</h3>
              <div className="cardprice">{product.price}</div>
            </div>
          </Link>
          <button type="button" onClick={ handleAddToCart }>Cart Button</button>
        </div>
      ))}
    </div>
  );
}
