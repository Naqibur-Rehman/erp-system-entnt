import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mockOrders } from "../data/ordersData";
import { mockProducts } from "../data/productsData";

const OrderDetails = () => {
  const params = useParams();
  const orderId = parseInt(params.orderId);

  const [orderData, setOrderData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const order = mockOrders.filter((order) => orderId === order.orderId);
    const product = mockProducts.filter(
      (product) => product.productId === order[0].productId
    );
    setProductData(product[0]);
    setOrderData(order[0]);
    setLoading(false);
  }, [orderId]);

  if (loading) {
    return <div className="">Loading</div>;
  }

  return (
    <>
      {orderData ? (
        <div className="mx-auto flex flex-col">
          <div className="mt-6">
            <img
              src={productData.image}
              alt={productData.name}
              className="rounded-md h-[300px] sm:h-[360px] md:h-[460px] object-cover"
            />
            <h3 className="mt-4 text-center font-semibold text-gray-800 md:text-xl">
              Order Id: {orderData.orderId}
            </h3>
          </div>
          <div className="my-6 p-2 max-w-2xl border-t ">
            <div className="flex justify-between items-center text-gray-800">
              <h3 className="font-semibold text-gray-800 md:text-xl ">
                Ordered By: {orderData.customerName}
              </h3>
              <p className="text-gray-800 text-sm md:text-base">
                Ordered On: {orderData.orderDate}
              </p>
            </div>
            <div className="my-2 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800 md:text-xl ">
                {productData.name}
                <span className="py-0.5 px-2 ms-2 bg-gray-500 text-gray-200 text-xs md:text-sm rounded-full w-fit">
                  {productData.category}
                </span>
              </h3>
              <h3 className="font-semibold text-gray-800 md:text-xl ">
                Price: ₹{orderData.price}
              </h3>
            </div>
            <div className="mt-4">
              <div className="sm:flex justify-between">
                <h3 className="text-gray-800 md:text-xl">
                  Order Status:{" "}
                  <span
                    className={`${
                      orderData.status === "Delivered"
                        ? "text-green-500"
                        : "text-amber-500"
                    }`}
                  >
                    {orderData.status}
                  </span>
                </h3>
                <p className="text-sm md:text-base mt-1">
                  {orderData.status !== "Delivered"
                    ? `Expected On: ${orderData.expectedDeliveryDate}`
                    : `Delivered On: ${orderData.deliveryDate}`}
                </p>
              </div>
              <div className="py-2">
                <div
                  className={`border-l-4 ${
                    orderData?.status === "Delivered" ||
                    orderData.status === "Shipped" ||
                    orderData.status === "Processing"
                      ? "border-l-green-500"
                      : ""
                  } p-2`}
                >
                  Processing
                </div>
                <div
                  className={`border-l-4 ${
                    orderData?.status === "Delivered" ||
                    orderData.status === "Shipped"
                      ? "border-l-green-500"
                      : ""
                  } p-2`}
                >
                  Shipped
                </div>
                <div
                  className={`border-l-4 ${
                    orderData?.status === "Delivered"
                      ? "border-l-green-500"
                      : ""
                  } p-2`}
                >
                  Delivered
                  <p className="text-sm mt-1">
                    {orderData.status === "Delivered"
                      ? orderData?.deliveryDate
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen mx-auto py-4 bg-[url('./assets/pageNotFound.png')] bg-no-repeat bg-contain grayscale">
          <div className="max-w-sm md:max-w-lg">
            <h3 className="text-center text-2xl md:text-3xl text-gray-600">
              The order details you are looking for is not found!
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
