import React from "react";
import { urlFor } from "@/lib/client";
import { useDispatch } from "react-redux";
import Image from "next/image";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "@/features/cart/CartSlice";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { Product } from "../../types";


const CartCard = ({ product }: any ) => {
  const dispatch = useDispatch();
  const remove = (i: Product) => {
    dispatch(removeFromCart(i));
    toast.error(`${i.name} has been removed from cart`, {
      position: "top-right",
    });
  };
  return (
    <div className="flex items-center gap-2 bg-white w-full px-4 py-4 border-b border-gray-300">
      <Image
        className=""
        src={urlFor(product.image).url()}
        alt={product.name}
        width={100}
        height={100}
      />
      <div className="w-full text-gray-900">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="flex justify-between">
          <p className="flex items-center">
            <TbCurrencyNaira />
            {product.price}
          </p>
          <p className="flex items-center">
            <TbCurrencyNaira />
            {parseInt(product.price) * parseInt(product.qty)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              className=" w-8 h-8 text-lg border px-2 py-1 bg-gray-900 text-white font-semibold rounded flex justify-center items-center"
              onClick={() => dispatch(decreaseQty(product))}
            >
              -
            </button>
            <span className="px-3">{product.qty}</span>
            <button
              className="w-8 h-8 text-lg border px-2 py-1 bg-gray-900 text-white font-semibold rounded flex justify-center items-center"
              onClick={() => dispatch(increaseQty(product))}
            >
              +
            </button>
          </div>
          <div>
            <button
              className=" px-2"
              title="Remove from Cart"
              onClick={() => remove(product)}
            >
              <AiOutlineDelete className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
