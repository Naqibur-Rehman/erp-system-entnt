import { useState } from "react";
import Product from "../components/Product";
import { mockProducts } from "../data/productsData.js";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import AddProductModal from "../components/modals/AddProductModal.jsx";

const ProductsManagement = () => {
  const [products, setProducts] = useState(mockProducts);

  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const addProductHandler = (product) => {
    setProducts([
      {
        ...product,
        productId: Math.round(Math.random() * 1000),
        image:
          "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
      },
      ...products,
    ]);
  };

  const updateProductHandler = (updatedProduct) => {
    setProducts(
      products.map((product) => {
        if (product.productId === updatedProduct.productId) {
          return { ...updatedProduct };
        }
        return { ...product };
      })
    );
  };

  const deleteProductHandler = (productId) => {
    const productDeleted = products.filter(
      (product) => productId === product.productId
    );
    setProducts(products.filter((product) => productId !== product.productId));
    toast.success(`Deleted product ${productDeleted[0].name}`);
  };

  return (
    <div className="w-full mx-auto my-6 max-w-3xl">
      <button
        onClick={() => setShowAddProductModal(true)}
        className="flex items-center py-2 px-4 w-fit rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm mx-auto"
      >
        <IoMdAdd size={24} /> Add New Product
      </button>
      {products?.map((product) => (
        <Product
          key={product.productId}
          product={product}
          deleteProduct={deleteProductHandler}
          updateProduct={updateProductHandler}
        />
      ))}
      {showAddProductModal && (
        <AddProductModal
          onAdd={addProductHandler}
          setShowModal={setShowAddProductModal}
        />
      )}
    </div>
  );
};

export default ProductsManagement;
