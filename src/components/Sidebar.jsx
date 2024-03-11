/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdOutlineListAlt,
  MdShoppingCart,
} from "react-icons/md";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="min-w-64 min-h-screen hidden bg-gray-50 border-r-red-100 md:flex">
        <div className="text-gray-800 w-full">
          <div
            className={`px-3 border-b ${
              pathname === "/dashboard" || pathname === "/"
                ? "bg-indigo-500 text-white"
                : ""
            } hover:bg-indigo-500 hover:text-white rounded`}
          >
            <Link to="/dashboard" className="flex gap-2 py-2 ">
              <MdSpaceDashboard size={24} /> <span>Dashboard</span>
            </Link>
          </div>
          <div
            className={`px-3 border-b ${
              pathname === "/products" ? "bg-indigo-500 text-white" : ""
            } hover:bg-indigo-500 hover:text-white rounded`}
          >
            <Link to="/products" className="flex gap-2 py-2 ">
              <MdOutlineListAlt size={24} /> <span>Products</span>
            </Link>
          </div>
          <div
            className={`px-3 border-b ${
              pathname === "/orders" ? "bg-indigo-500 text-white" : ""
            } hover:bg-indigo-500 hover:text-white rounded`}
          >
            <Link to="/orders" className="flex gap-2 py-2 ">
              <MdShoppingCart size={24} /> <span>Orders</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
