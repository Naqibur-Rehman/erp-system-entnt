/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdOutlineListAlt,
  MdShoppingCart,
  MdClose,
} from "react-icons/md";

const MobileSidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const { pathname } = useLocation();
  //   Sidebar for mobile and tabs
  return (
    toggleSidebar && (
      <div className="fixed top-0 w-full md:hidden bg-white left-0 z-10 h-full bg-[rgba(0,0,0,0.5)]">
        <aside className="w-3/4 min-h-screen bg-gray-50 border-r-red-100 md:hidden">
          <div className="text-gray-800 w-full">
            <button
              onClick={() => setToggleSidebar(false)}
              className="absolute right-1/4 m-2"
            >
              <MdClose size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2 px-3 py-2">
              <span className="text-xl text-indigo-600 font-serif italic">
                ERP
              </span>
            </Link>
            <div
              onClick={() => setToggleSidebar(false)}
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
              onClick={() => setToggleSidebar(false)}
              className={`px-3 border-b ${
                pathname === "/products" ? "bg-indigo-500 text-white" : ""
              } hover:bg-indigo-500 hover:text-white rounded`}
            >
              <Link to="/products" className="flex gap-2 py-2 ">
                <MdOutlineListAlt size={24} /> <span>Products</span>
              </Link>
            </div>
            <div
              onClick={() => setToggleSidebar(false)}
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
      </div>
    )
  );
};

export default MobileSidebar;
