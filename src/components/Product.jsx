/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./modals/DeleteModal";
import UpdateProductModal from "./modals/UpdateProductModal";

const Product = ({ product, deleteProduct, updateProduct }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);

  return (
    <>
      <div className="flex justify-between mx-4 my-6 p-4 rounded-md shadow-md">
        <div className="">
          <div className="">
            <img
              className="w-24 md:w-32 object-cover"
              src={product?.image}
              alt={product?.name}
            />
          </div>
        </div>
        <div className="text-sm md:text-base text-gray-700">
          <h3 className="text-sm md:text-lg font-semibold text-wrap">
            {product.name}
          </h3>
          <span className="block w-fit my-0.5 text-xs font-semibold text-gray-100 bg-gray-500 rounded-full py-0.5 px-2">
            {product.category}
          </span>
          <p>Price: ₹{product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
        <div className="flex flex-col gap-1 justify-start items-start md:flex-row md:justify-between md:gap-8">
          <Link
            to={`/products/${product.productId}`}
            className="text-sm text-indigo-500 hover:underline"
          >
            View Details
          </Link>
          <button
            className="text-red-500 text-sm font-semibold hover:underline"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
          <button
            onClick={() => setShowUpdateProductModal(true)}
            className="text-sm text-cyan-500 hover:underline"
          >
            Edit
          </button>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onDelete={deleteProduct}
          setShowModal={setShowDeleteModal}
          title="product"
          IdToBeDeleted={product.productId}
        />
      )}
      {showUpdateProductModal && (
        <UpdateProductModal
          onUpdate={updateProduct}
          setShowModal={setShowUpdateProductModal}
          product={product}
        />
      )}
    </>
  );
};

export default Product;
