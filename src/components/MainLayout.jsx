import { Outlet } from "react-router-dom";
import Header from "./Header";
import { NavBar } from "./NavBar"
import '../css/MainLayout.css'

export default function MainLayout( ) {
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