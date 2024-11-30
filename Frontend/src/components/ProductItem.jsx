import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  console.log(currency);
  return (
    <Link to={`/product/${id}`} className="text-gray-800 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt="product-img"
          className="hover:scale-110 transition ease-in-out h-64 object-cover"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        <span className="text-red-500">{price}</span>
      </p>
    </Link>
  );
};

export default ProductItem;
