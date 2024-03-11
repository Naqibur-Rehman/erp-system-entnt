import { Link, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const { pathname } = useLocation();

  return (
    <header className="w-full py-2 px-4 border border-b-1 md:px-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            className="md:hidden"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <MdMenu size={24} />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl text-indigo-500 font-serif italic">
              ERP
            </span>
          </Link>
        </div>
        <div className=" flex items-center gap-4">
          <Link
            to="/products"
            className={`text-sm md:text-base ${
              pathname === "/products"
                ? "text-indigo-500 font-semibold"
                : "text-gray-700"
            } hover:text-indigo-500 hover:font-semibold`}
          >
            Products
          </Link>
          <Link
            to="/orders"
            className={`text-sm md:text-base ${
              pathname === "/orders"
                ? "text-indigo-500 font-semibold"
                : "text-gray-700"
            } hover:text-indigo-500 hover:font-semibold`}
          >
            Orders
          </Link>
        </div>
      </div>
      {toggleSidebar && (
        <MobileSidebar
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
      )}
    </header>
  );
};

export default Header;
