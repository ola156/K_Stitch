import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import { assets } from "../assets/assets";
import RelativeProduct from "../components/RelativeProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* productData*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt="pro"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt="pro"
              className="w-full h-auto overflow-y-hidden "
            />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1 ">
          <h1 className="font-medium text-3xl  mt-4">{productData.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-3">(125)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">
            {currency} <span className="text-red-500">{productData.price}</span>
          </p>
          <p className="mt-5 text-gray-600 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={` ${
                    item === size ? "border-red-400" : ""
                  } border py-2 px-4 bg-gray-200   `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-red-500 text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            Add To Cart
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1">
            <p>Returns Available within 7 days of Purchase</p>
            <p>Cash on delivery is Available</p>
            <p>
              {" "}
              You can always reach out to our Desgner to customize your outfits
            </p>
          </div>
        </div>
      </div>

      {/*----------------------description--review--------------------------- */}
      <div className="mt-20">
        <div className="flex item-center">
          <p className="border px-5 py-3 text-sm ">Description </p>
          <p className="border px-5 py-3 text-sm ">Reviews (125) </p>
        </div>
        <div className=" flex flex-col gap-4  max-w-[70%] border px-12 py-5 h-auto text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            illo nulla a non, earum delectus inventore quos ab maiores veniam
            odio, fugiat corporis ut autem reiciendis deleniti perferendis,
            aliquid officiis.
          </p>
        </div>
      </div>
      {/*----------------------related products--------------------------- */}
      <RelativeProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0 "></div>
  );
};

export default Product;
