/* eslint-disable react/prop-types */
import {
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

const DeleteModal = ({ onDelete, setShowModal, title, IdToBeDeleted }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)]">
      <div className="px-8 py-6 mx-auto my-20 relative flex flex-col max-w-fit md:max-w-lg items-center bg-gray-50 rounded-md">
        <div
          className="absolute right-0 top-0 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <AiOutlineCloseCircle
            size={24}
            className="text-gray-700 m-2 hover:text-gray-900"
          />
        </div>
        <AiOutlineExclamationCircle size={32} className="text-red-700 my-2" />
        <h1 className="md:text-xl">
          Are you sure you want to delete this {title}?
        </h1>
        <div className="flex gap-4 my-4 ">
          <button
            onClick={() => {
              setShowModal(false);
              onDelete(IdToBeDeleted);
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white  text-sm rounded-md"
          >
            Yes, I&apos;m Sure
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-md"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
