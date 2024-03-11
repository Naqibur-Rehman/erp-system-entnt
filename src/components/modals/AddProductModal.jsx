/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const AddProductModal = ({ onAdd, setShowModal }) => {
  const [formData, setFormData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData === null) {
      toast.error("All fields are required");
      return;
    }
    if (formData.name === null || formData?.name.trim() === "") {
      toast.error("Product name not provided");
      return;
    }
    if (formData.category === undefined || formData.category === "") {
      toast.error("Product category not provided");
      return;
    }
    if (formData.price === undefined || formData.price === "") {
      toast.error("Product price not provided");
      return;
    }
    if (formData?.price <= 0) {
      toast.error("Product price can not be less than 0");
      return;
    }
    if (formData.stock === undefined || formData?.stock === "") {
      toast.error("Product stock not provided");
      return;
    }
    if (formData.stock <= 0) {
      toast.error("Product stock can not be less than 0");
      return;
    }
    if (
      formData.description === undefined ||
      formData?.description.trim() === ""
    ) {
      toast.error("Product description not provided");
      return;
    }

    onAdd(formData);
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)]">
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
        <h1 className="md:text-xl">Fill the details to add product.</h1>
        <div className="w-full">
          <form onSubmit={submitHandler} className="flex flex-col gap-4 my-4">
            {/* //todo add labels */}
            <div className="flex items-center w-full gap-2">
              <label htmlFor="name" className=" text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Product Name"
                className="p-2 rounded-md w-full outline-none focus:ring-1 ring-indigo-500"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.id]: e.target.value });
                }}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <label htmlFor="category" className=" text-gray-700">
                Category:
              </label>
              <select
                name="category"
                id="category"
                defaultValue=""
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.id]: e.target.value });
                }}
                className="p-2 w-full rounded-md outline-none focus:ring-1 ring-indigo-500"
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fitness">Fitness</option>
                <option value="Fashion">Fashion</option>
                <option value="Sports">Sports</option>
                <option value="Home Appliances">Home Appliances</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="price" className=" text-gray-700">
                Price:
              </label>
              <input
                type="number"
                id="price"
                placeholder="Product Price"
                className="p-2 w-full appearance-none rounded-md outline-none focus:ring-1 ring-indigo-500"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.id]: e.target.value });
                }}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <label htmlFor="stock" className=" text-gray-700">
                Stock:
              </label>
              <input
                type="number"
                id="stock"
                placeholder="Product Stock"
                className="p-2 rounded-md outline-none w-full focus:ring-1 ring-indigo-500"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.id]: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className=" text-gray-700">
                Description:
              </label>
              <textarea
                name="description"
                id="description"
                rows={3}
                placeholder="Descrption"
                className="p-2 rounded-md outline-none focus:ring-1 ring-indigo-500"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.id]: e.target.value });
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white  text-sm rounded-md"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
