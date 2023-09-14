import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Company from "./routes/Company";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Cart from "./routes/Cart";
import Wishlist from "./routes/Wishlist";
import Female from "./routes/Female";
import Male from "./routes/Male";
import Props from "./routes/Props";
import Sale from "./routes/Sale";
import PhysicalStore from "./routes/PhysicalStore";
import Exchanges from "./routes/Exchanges";
import Partners from "./routes/Partners";
import Services from "./routes/Services";
import Sitemap from "./routes/Sitemap";
import Lookmarinheiro from "./routes/Lookmarinheiro";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/exchange",
    element: <Exchanges />,
  },
  {
    path: "/lookmarinheiro",
    element: <Lookmarinheiro />,
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
