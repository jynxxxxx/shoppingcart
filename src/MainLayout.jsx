import { Outlet } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar"
import './css/MainLayout.css'

export default function MainLayout( ) {
  return (
    <div className="masterctn">
      <NavBar />
      <SideBar />
      <div className="content">
        <Outlet />
      </div>
   
    </div>
  );
}