import { UseProductData } from "../data/ProductData";
import { useLocation } from "react-router-dom";
import { AddToCart } from "../utilities/AddtoCart";
import { useCartContext } from '../context/CartContext';
import '../css/ProductDetails.css'

export function ProductDetails() {
  const { productData, error, loading } = UseProductData();
  const location = useLocation();
  const { handleDetailAddToCart } = AddToCart()
  const { quantity, setQuantity } = useCartContext();


  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const currentproduct = location.state;
  console.log(location.state)

  const targetProduct = productData.filter((product) => product.title === currentproduct);

  return (
      <div className="detailsctn">
        {targetProduct.map((product) => (
          <div key={product.id} className="detailscard">
            <div className="detailsimage" style={{ backgroundImage: `url(${product.image})`}} data-key={product.image}> </div>
            <div className="detailside">
              <div className="detailsinfo">
                <div className="detailscat">{product.category}</div>
                <div className="detailstitle">{product.title}</div>
                <div className="descrip">{product.description}</div>
              </div>
              <div className="pricectn">
                <div className="detailsprice">{product.price}</div>
                <div className="quantityinput">
                  <button className="incbtn" 
                    onClick={(e) => {
                      const input = e.target.closest('.quantityinput').querySelector('input[type=number]');
                      if (input.value>1) {
                        const newValue = parseInt(input.value, 10) - 1;
                        setQuantity(newValue)
                      }
                    }}>-
                  </button>
                  <input
                    className="quantity"
                    type="number"
                    title ={product.title}                      
                    min={1}
                    value={quantity}
                    onChange= {(e) => setQuantity(e.target.value)}
                  />
                  <button className="incbtn" 
                    onClick={(e) => {
                      const input = e.target.closest('.quantityinput').querySelector('input[type=number]');
                      const newValue = parseInt(input.value, 10) + 1;
                      setQuantity(newValue)
                    }}>+
                  </button>
                </div>
              <button className="addtocart" type="button" onClick={handleDetailAddToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}