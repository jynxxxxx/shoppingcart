import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart";
import {Search} from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/shoppingcart/*", 
    element: <App />,
  },
  {
    path: "/", 
    element: <Home /> 
  },
  {
    path: "products", 
    children: [
      { index: true, element: <AllProducts /> },
      { path: ":title", element: <ProductDetails /> },
    ],
  },
  { 
    path: ":category", 
    children: [
      { index: true, element: <Categories /> },
      { path: ":title", element: <ProductDetails /> },
    ],
  },
  {
    path: "checkout", 
    element: <Cart /> 
  },
  {
    path: "search", 
    element: <Search /> 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);