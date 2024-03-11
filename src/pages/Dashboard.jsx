import { MdOutlineListAlt, MdShoppingCart } from "react-icons/md";
import { BsCartCheckFill, BsCartPlusFill } from "react-icons/bs";

import { mockProducts } from "../data/productsData.js";
import { mockOrders } from "../data/ordersData.js";
import DashboardCard from "../components/DashboardCard.jsx";
import Calendar from "../components/Calendar.jsx";

const Dashboard = () => {
  const pendingOrders = mockOrders.filter(
    (order) => order.status !== "Delivered"
  );

  return (
    <div className="mx-auto">
      <div className="flex gap-4 flex-wrap justify-center my-6 px-4">
        <DashboardCard
          title="Total Products"
          value={mockProducts.length}
          link={"products"}
          icon={
            <MdOutlineListAlt className="bg-teal-600 text-white p-3 rounded-full text-5xl shadow-lg" />
          }
        />
        <DashboardCard
          title="Total Orders"
          value={mockOrders.length}
          link={"orders"}
          icon={
            <MdShoppingCart className="bg-indigo-600 text-white p-3 rounded-full text-5xl shadow-lg" />
          }
        />
        <DashboardCard
          title="Pending Orders"
          value={pendingOrders.length}
          link={"orders"}
          icon={
            <BsCartPlusFill className="bg-amber-600 text-white p-3 rounded-full text-5xl shadow-lg" />
          }
        />
        <DashboardCard
          title="Completed Orders"
          value={mockOrders.length - pendingOrders.length}
          link={"orders"}
          icon={
            <BsCartCheckFill className="bg-green-600 text-white p-3 rounded-full text-5xl shadow-lg" />
          }
        />
      </div>

      <div className="">
        <Calendar pendingOrders={pendingOrders} />
      </div>
    </div>
  );
};

export default Dashboard;
