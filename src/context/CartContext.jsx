import { createContext, useState, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext({});

export function useCartContext() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [quantity, setQuantity] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);


  return (
    <CartContext.Provider value={{cart, setCart, quantity, setQuantity, search, setSearch, filteredProducts, setFilteredProducts, cartTotal, setCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}