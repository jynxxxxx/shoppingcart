import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import Header from "./Header";
import { NavBar } from "./NavBar"
import '../css/MainLayout.css'

export default function MainLayout( ) {
  const location = useLocation();
  const { setQuantity } = useCartContext();

  useEffect(() => {
    setQuantity(1);
  }, [location.pathname]); 
  
  return (
    <div className="masterctn">
      <Header />
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
   
    </div>
  );
}