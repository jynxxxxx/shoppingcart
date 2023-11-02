import { Link } from "react-router-dom";
import { UseProductData } from "../data/ProductData";
import '../css/NavBar.css'

export function NavBar() {
  const { error, loading } = UseProductData();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const categoryOrder = ["Men's Clothing", "Women's Clothing", "Jewelery"]

  return(
    <>
      <div className="navbar">
        <ul className="navcat">
          <li className="nav">
            <Link to="/shoppingcart/products">All Products</Link>
          </li>
          {categoryOrder.map((category) => (
            <li className="nav" key={category}>
              <Link to={category} state={category}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}