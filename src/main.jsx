import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import PageNotFound from "./pages/PageNotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductsManagement from "./pages/ProductsManagement.jsx";
import OrdersManagement from "./pages/OrdersManagement.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<ProductsManagement />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/orders" element={<OrdersManagement />} />
      <Route path="/orders/:orderId" element={<OrderDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
