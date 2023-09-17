import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Company from "./routes/About/Company.jsx";
import Login from "./routes/User/Login.jsx";
import Register from "./routes/User/Register.jsx";
import Cart from "./routes/HeaderPaths/Cart.jsx";
import Wishlist from "./routes/HeaderPaths/Wishlist.jsx";
import Female from "./routes/ProductTypes/Female.jsx";
import Male from "./routes/ProductTypes/Male.jsx";
import Props from "./routes/ProductTypes/Props.jsx";
import Sale from "./routes/ProductTypes/Sale.jsx";
import PhysicalStore from "./routes/About/PhysicalStore.jsx";
import Exchanges from "./routes/Support/Exchanges.jsx";
import Partners from "./routes/About/Partners.jsx";
import Services from "./routes/Support/Services.jsx";
import Sitemap from "./routes/Support/Sitemap.jsx";
import Product from "./routes/Product.jsx";
import Protected from "./routes/Protected.jsx";
import Requests from "./routes/HeaderPaths/Requests.jsx";
import ErrorPage from "./routes/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/exchanges",
    element: <Exchanges />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/female",
    element: <Female />,
  },
  {
    path: "/male",
    element: <Male />,
  },
  {
    path: "/props",
    element: <Props />,
  },
  {
    path: "/sale",
    element: <Sale />,
  },
  {
    path: "/physicalstore",
    element: <PhysicalStore />,
  },
  {
    path: "/company",
    element: <Company />,
  },
  {
    path: "/protected",
    element: <Protected />,
  },
  {
    path: "/requests",
    element: <Requests />,
  },
]);

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />
      },
    ],
  },
]);*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
