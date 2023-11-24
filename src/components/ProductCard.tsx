import React from "react";
import { urlFor } from "@/lib/client";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import { addFavorite } from "@/features/favorite/favoriteSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import { Product } from "../types";

const ProductCard = ({ item }: any) => {
  const dispatch = useDispatch();
  const AddToCart = (i: Product) => {
    let x = { ...i, qty: 1 };
    // console.log(x)
    dispatch(addToCart(x));
    toast.success(`Added ${i.name} to cart`, {
      iconTheme: {
        primary: "#111827",
        secondary: "white",
      },
      position: "top-right",
    });
  };
  return (
    <div className="flex flex-col rounded bg-white shadow-lg group relative ">
      <Link href={item.slug.current}>
        <div className="h-44 relative p-2 overflow-hidden">
          <Image
            src={urlFor(item.image).url()}
            fill
            alt={item.name}
            className="group-hover:scale-110 transition ease-in-out 1s object-cover"
          />
        </div>
        <div className="text-gray-900 p-2">
          <h2 className="text-xl font-semibold group-hover:font-bold group-hover:text-lg">
            {item.name}
          </h2>
          <p className="flex items-center">
            <TbCurrencyNaira />
            {item.price}
          </p>
          <span className="text-xs italic text-gray-500">
            Category: {item.category}
          </span>
        </div>
      </Link>
      <div className=" p-2">
        {/* <button onClick={()=> AddToCart(item)} className='rounded-lg px-6 py-2 bg-gray-900 hover:bg-gray-950 hover:shadow-lg text-white font-semibold'>Add to Cart</button> */}
        <span
          title="Add to Wishlist"
          className="absolute text-gray-900 top-3 right-3 shadow-lg rounded-sm bg-white p-1"
          onClick={() => dispatch(addFavorite(item))}
        >
          <BsHeart className="" />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
