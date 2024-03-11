/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ChangeStatusModal = ({
  setShowChangeStatusModal,
  onChange,
  IdToBeUpdated,
}) => {
  const [orderStatus, setOrderStatus] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)]">
      <div className="px-8 py-6 mx-auto my-20 relative flex flex-col max-w-sm md:max-w-lg items-center bg-gray-50 rounded-md">
        <div
          className="absolute right-0 top-0 cursor-pointer"
          onClick={() => setShowChangeStatusModal(false)}
        >
          <AiOutlineCloseCircle
            size={24}
            className="text-gray-700 m-2 hover:text-gray-900"
          />
        </div>
        <AiOutlineExclamationCircle
          size={32}
          className="text-indigo-600 my-2"
        />
        <h1 className="text-xl">Change order statuּs.</h1>
        <div
          className={`relative w-full my-6 rounded-md bg-gray-100 ${
            showOptions ? "ring-1" : ""
          } ring-indigo-500 `}
        >
          <div
            className="w-ful flex py-2 px-4 items-center justify-between cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          >
            {orderStatus ? orderStatus : "Order Status"}{" "}
            <MdOutlineKeyboardArrowDown size={20} />
          </div>
          {showOptions && (
            <div className="absolute left-0 my-4 rounded-md bg-gray-100 w-full ring-1 ring-indigo-500">
              <ul className="space-y-1">
                <li
                  onClick={() => {
                    setOrderStatus("Processing");
                    setShowOptions(false);
                  }}
                  className="cursor-pointer hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-md"
                >
                  Processing
                </li>
                <li
                  onClick={() => {
                    setOrderStatus("Shipped");
                    setShowOptions(false);
                  }}
                  className="cursor-pointer hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-md"
                >
                  Shipped
                </li>
                <li
                  onClick={() => {
                    setOrderStatus("Delivered");
                    setShowOptions(false);
                  }}
                  className="cursor-pointer hover:bg-indigo-500 hover:text-white px-4 py-2 rounded-md"
                >
                  Delivered
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-8 my-4 ">
          <button
            onClick={() => {
              setShowChangeStatusModal(false);
              onChange(IdToBeUpdated, orderStatus);
            }}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white  text-sm rounded-md"
          >
            Update
          </button>
          <button
            onClick={() => setShowChangeStatusModal(false)}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeStatusModal;
