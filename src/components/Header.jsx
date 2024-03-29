import { Link,  useNavigate } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import '../css/Header.css'
import UseProductData from "../data/ProductData";
import { SideCart } from "./SideCart";
import searchicon from '../assets/searchicon.png';
import shoppingbag from '../assets/shoppingbagicon.png';

export function Header() {
  const { cart, setFilteredProducts, search, setSearch } = useCartContext();
  const { productData } = UseProductData();
  const navigate =  useNavigate();

  const clearSearch = () => {
    const input = document.querySelector('.search');
    input.value = ''
    setSearch('')
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const newFilteredProducts = productData.filter((product) => {
      const titleLower = product.title.toLowerCase();
      const categoryLower = product.category.toLowerCase();
      return titleLower.includes(search) || categoryLower.includes(search);
    });
    setFilteredProducts(newFilteredProducts);
    clearSearch();

    navigate("search");
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <Link to="/shoppingcart" className="name">Stuff & Stuff</Link>
        </div>
        <object className= "icon carticon" data={shoppingbag} alt="cart"></object>
        {cart.length !== 0 ? <div className="itemcount">{cart.length}</div> : null}
        <div className="searchbar">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              className="search" 
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}>
            </input>
          </form>
          <button className="clear" onClick={clearSearch}>X</button>
          <Link to="search" onClick={handleSearch}>
            <button className="searchbtn" onClick={handleSearch}>
              <object className= "searchicon" data={searchicon}></object>     
            </button>
          </Link>
        </div>
      </div>
      <SideCart></SideCart>       
    </>
  )
}