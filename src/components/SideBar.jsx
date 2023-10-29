import { Link } from "react-router-dom";
import { UseProductData } from "../data/ProductData";

export default function SideBar() {
  const { productData, error, loading } = UseProductData();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return(
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/shoppingcart/products">All Products</Link>
            </li>
            {[...new Set(productData.map(product => product.category))].map((category) => (
              <li key={category}>
                <Link to={category} state={category}>{category}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}