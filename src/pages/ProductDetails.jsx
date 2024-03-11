import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { mockProducts } from "../data/productsData.js";

const ProductDetails = () => {
  const params = useParams();
  const productId = parseInt(params.productId);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = mockProducts.filter(
      (product) => productId === product.productId
    );
    setProductData(product[0]);
  }, [productId]);

  return (
    <>
      {productData ? (
        <div className="mx-auto flex flex-col">
          <div className="my-6">
            <img
              src={productData.image}
              alt={productData.name}
              className="rounded-md h-[300px] sm:h-[360px] md:h-[460px] object-cover"
            />
          </div>
          <div className="my-6 p-2 max-w-2xl border-t ">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800 md:text-xl ">
                {productData.name}
              </h3>
              <p className="py-0.5 px-2 bg-gray-500 text-gray-200 text-sm rounded-full w-fit">
                {productData.category}
              </p>
            </div>
            <div className="my-2 flex justify-between items-center text-gray-800">
              <h3 className="font-semibold text-gray-800 md:text-xl ">
                Price: ₹{productData.price}
              </h3>
              <p className="">Stock: {productData.stock}</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-gray-800 md:text-xl">Description</h3>
              <div className="w-[360px] sm:w-[400px] md:w-[500px]">
                <p className="text-sm md:text-base text-wrap">
                  {productData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen mx-auto py-4 bg-[url('./assets/pageNotFound.png')] bg-no-repeat bg-contain grayscale">
          <div className="max-w-sm md:max-w-lg">
            <h3 className="text-center text-2xl md:text-3xl text-gray-600">
              The product you are looking for is not found!
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
