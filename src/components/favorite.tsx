import React from "react";
import { useSelector } from "react-redux";
import { favoriteList } from "@/features/favorite/favoriteSlice";
import { urlFor } from "@/lib/client";
import { useDispatch } from "react-redux";
import { removeFavorite } from "@/features/favorite/favoriteSlice";
import { AiOutlineDelete, AiFillCloseSquare } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../types";

const Favorite = ({closeWishlist}:any) => {
  const dispatch = useDispatch();
  const favoriteLists = useSelector(favoriteList);
  
  const lists = favoriteLists.map((i:Product) => {
    return(
        <div key={i._id} className="flex gap-2 border-b-4 p-2 shadow-lg border-gray-900 text-gray-900">
            <Image src={urlFor(i.image).url()}  width={100}
        height={100} className=" w-1/2 md:w-1/4 h-44 object-cover" alt={i.name} />
        <div>

        <Link href={i.slug.current} onClick={closeWishlist} className="font-semibold text-xl hover:font-bold">{i.name}</Link>
        <p>{i.description}</p>
           <p className="flex items-center">
            <TbCurrencyNaira />
            {i.price}
          </p>
          <button
              className="w-8 h-8 text-lg border px-2 py-1 bg-gray-900 text-white font-semibold rounded flex justify-center items-center"
              onClick={() => dispatch(removeFavorite(i))}
            >
              <AiOutlineDelete/>
            </button> 
        </div>
           

        </div>
    )
  })
  return (
    <div className="w-full fixed left-0 top-0 bg-black/50 flex justify-end">
      <div className="md:w-1/3 w-full bg-white h-screen overflow-y-auto relative p-4 flex flex-col gap-4">
       
       <div className="flex justify-between">
       <h2 className="text-2xl font-semibold">Wishlist</h2>
       <span onClick={closeWishlist}><AiFillCloseSquare className="text-2xl text-gray-900"/></span>
        </div> 
       
        {favoriteLists.length > 0 ?lists: <div className="m-auto"><h2 className="text-2xl text-gray-900">Your Wishlist is empty</h2></div>}
      </div>
    </div>
  )
};

export default Favorite;
