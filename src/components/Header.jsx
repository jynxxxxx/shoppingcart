import { Link,  useNavigate } from "react-router-dom";
import { useCartContext } from '../context/CartContext';
import '../css/Header.css'
import UseProductData from "../data/ProductData";
import { OpenSideCart, SideCart } from "./SideCart";

export default function Header() {
  const { cart, setFilteredProducts, search, setSearch } = useCartContext();
  const { productData } = UseProductData();
  const navigate =  useNavigate();
  const {openSideCart } = OpenSideCart()

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


  if (cart.length === 0)
  return (
    <>
      <div className="header">
        <div className="name">
          <Link to="/shoppingcart">Store Name</Link>
        </div>
        <object className= "icon carticon" data="./shopping-bag.png" alt="cart" onClick={openSideCart}></object>     
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
              <object className= "searchicon" data="./search.png"></object>     
            </button>
          </Link>
        </div>
      </div>
      <SideCart></SideCart>       
    </>
  )

  return (
    <>
      <div className="header">
        <div className="name">
          <Link to="/shoppingcart">Store Name</Link>
        </div>
        <object className= "icon carticon" data="./shopping-bag.png" alt="cart" onClick={openSideCart}></object>
        <div className="itemcount">{cart.length}</div>
        <div className="searchbar">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              className="search" 
              value={search}
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}>
            </input>
          </form>
          <button className="clear" onClick={clearSearch}>X</button>
          <Link to="search" onClick={handleSearch}>
            <button className="searchbtn" onClick={handleSearch}>
              <object className= "searchicon" data="./search.png"></object>     
            </button>
          </Link>
        </div>
      </div>
      <SideCart></SideCart>       
    </>
  )
}