/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DashboardCard = ({ title, value, link, icon }) => {
  return (
    <div className="p-3 flex gap-4 justify-between w-full sm:w-60 rounded-md shadow-md">
      <div className="">
        <h3 className="text-gray-500 uppercase">{title}</h3>
        <p className="text-2xl">{value}</p>
        <Link
          to={`/${link}`}
          className="text-sm capitalize font-semibold text-indigo-500 "
        >
          View All {link}
        </Link>
      </div>
      {icon}
      {/* <Icon className="bg-amber-600 text-white p-3 rounded-full text-5xl shadow-lg" /> */}
    </div>
  );
};

export default DashboardCard;
