/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ExpectedDeliveryModal = ({ setShowModal, pendingOrders, date }) => {
  const [ordersFound, setOrdersFound] = useState([]);

  useEffect(() => {
    setOrdersFound(
      pendingOrders.filter((order) => order.expectedDeliveryDate === date)
    );
  }, [pendingOrders, date]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70">
      <div className="px-10 py-6 mx-auto my-20 relative flex flex-col w-3/4 md:max-w-lg items-center bg-gray-50 rounded-md">
        <div
          className="absolute right-0 top-0 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <AiOutlineCloseCircle
            size={24}
            className="text-gray-700 m-2 hover:text-gray-900"
          />
        </div>
        <h1 className="md:text-xl">
          Orders expected to be delivered on {date}.
        </h1>
        <div className="w-full my-2 text-sm md:text-base">
          {ordersFound.length >= 1 && (
            <div className="px-2 py-1 flex w-full justify-between">
              <p className="">OrderId</p>
              <p className="">Product</p>
              <p className="">
                <span className="text-sm font-normal"></span> Customer
              </p>
            </div>
          )}
          {ordersFound.map((order) => (
            <Link
              key={order.orderId}
              to={`/orders/${order.orderId}`}
              className="px-2 py-1 my-2 hover:text-white font-semibold flex w-full justify-between bg-amber-500 rounded-md"
            >
              <p className="">{order.orderId}</p>
              <p className="">{order.productName}</p>
              <p className="">
                <span className="text-sm font-normal"></span>{" "}
                {order.customerName}
              </p>
            </Link>
          ))}
        </div>
        {ordersFound.length === 0 && (
          <p className="md:text-xl"> No orders found </p>
        )}
      </div>
    </div>
  );
};

export default ExpectedDeliveryModal;
