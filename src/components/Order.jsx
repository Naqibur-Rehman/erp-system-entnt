/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./modals/DeleteModal";
import ChangeStatusModal from "./modals/ChangeStatusModal";

const Order = ({ order, deleteOrder, updateOrderStatus }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);

  return (
    <div className="mx-4 my-6 p-4 rounded-md shadow-md">
      <div className="flex justify-between gap-2 items-start">
        <div className="text-sm text-gray-800 w-1/2">
          <span className="font-semibold block">OrderId: {order.orderId}</span>
          <Link to={`/products/${order.productId}`}>
            <p className="mt-1">{order.productName}</p>
            <p>Price: {order.price}</p>
            {/* <span className="text-xs font-semibold text-gray-100 bg-gray-500 rounded-full py-0.5 px-2">
              {order.productCategory}
            </span> */}
          </Link>
        </div>
        <div className="text-sm text-gray-700 space-y-1 w-1/2">
          <p>
            Ordered By:{" "}
            <span className="font-semibold">{order.customerName}</span>
          </p>
          <p>Ordered On: {order.orderDate}</p>
          <p>
            {order.status !== "Delivered" ? "Expected On: " : "Delivered On: "}{" "}
            {order.status !== "Delivered"
              ? order.expectedDeliveryDate
              : order.deliveryDate}
          </p>
        </div>
        <div className="text-sm flex flex-col gap-1">
          <h3>Status</h3>
          <p
            className={`${
              order.status === "Delivered"
                ? " text-green-500"
                : "text-amber-500"
            } `}
          >
            {order.status}
          </p>
        </div>
      </div>
      <div className="flex gap-6 mt-4 pt-3 border-t justify-between items-start md:justify-cente">
        <Link
          to={`/orders/${order.orderId}`}
          className="text-sm text-indigo-500 hover:underline"
        >
          View Order Details
        </Link>
        <button
          className="text-red-500 text-sm font-semibold hover:underline"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete Order
        </button>
        <button
          className="text-sm text-cyan-500 hover:underline"
          onClick={() => setShowChangeStatusModal(true)}
        >
          Update Status
        </button>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onDelete={deleteOrder}
          setShowModal={setShowDeleteModal}
          title={"order"}
          IdToBeDeleted={order.orderId}
        />
      )}
      {showChangeStatusModal && (
        <ChangeStatusModal
          setShowChangeStatusModal={setShowChangeStatusModal}
          onChange={updateOrderStatus}
          IdToBeUpdated={order.orderId}
        />
      )}
    </div>
  );
};

export default Order;
