import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import './App.css'
import { AllProducts } from "./pages/AllProducts";
import Home from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import MainLayout from "./components/MainLayout";
import { SideCart } from "./components/SideCart";
import { CartContextProvider } from "./context/CartContext";
import { Search } from "./pages/Search";

export default function App( ) {
  
  return (
    <>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<AllProducts />} />
              <Route path=":title" element={<ProductDetails />} />
            </Route>
            <Route path=":category" >
              <Route index element={<Categories />} />
              <Route path=":title" element={<ProductDetails />} />
            </Route>
            <Route path="checkout" element={<SideCart />} />
            <Route path="search" element={<Search />} />
            

          </Route>
        </Routes>
      </CartContextProvider>
    </>
  );
}



