import { useState } from "react";
import Order from "../components/Order";
import { mockOrders } from "../data/ordersData";
import { toast } from "react-toastify";

const OrdersManagement = () => {
  const [orders, setOrders] = useState(mockOrders);

  const deleteOrderHandler = (orderId) => {
    setOrders(orders.filter((order) => orderId !== order.orderId));
    toast.success(`Deleted order ${orderId}`)
  };

  const updateOrderStatusHandler = (orderId, status) => {
    if (status === "") {
      return;
    }

    setOrders(
      orders.map((order) => {
        if (order.orderId === orderId) {
          return { ...order, status };
        }
        return { ...order };
      })
    );
    toast.success(`Updated order status to ${status}`)
  };

  console.log(orders[1].orderDate);
  console.log(new Date().toLocaleDateString("en-GB"));

  return (
    <div className="w-full mx-auto my-6 max-w-3xl">
      {orders.map((order) => (
        <Order
          key={order.orderId}
          order={order}
          deleteOrder={deleteOrderHandler}
          updateOrderStatus={updateOrderStatusHandler}
        />
      ))}
    </div>
  );
};

export default OrdersManagement;
