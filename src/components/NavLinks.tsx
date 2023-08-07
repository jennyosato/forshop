import React, {useState} from 'react'
import Link from 'next/link'
import { BsHeart } from "react-icons/bs";
import {BiHome} from 'react-icons/bi'
import {FaStore} from 'react-icons/fa'
import Favorite from "./favorite";

const NavLinks = () => {
    const [toggle, setToggle] = useState(false);

    const toggleFavoriteList = () => {
        setToggle((prev) => !prev);
      };
  return (
    <nav className='fixed bottom-0 bg-red-600 md:bottom-[100%] w-full md:top-4 left-0 justify-center z-50'
   
  >
    <ul className="flex py-2 px-4 justify-center gap-2 bg-gray-900 md:bg-transparent w-full">
      <li>
        <Link
          className="hover:font-bold px-2 font-semibold text-white flex flex-col items-center"
          href="/"
        >
          <BiHome className="md:hidden" />
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:font-bold px-2 font-semibold text-white flex flex-col items-center"
          href="/stores"
        >
          <FaStore className="md:hidden" />
          Store
        </Link>
      </li>
      <li
        className="hover:font-bold px-2 font-semibold text-white cursor-pointer flex flex-col items-center"
        onClick={toggleFavoriteList}
      >
        <BsHeart className="md:hidden" />
        Wishlist
      </li>
    </ul>
    {toggle && <Favorite closeWishlist={() => setToggle(false)} />}
  </nav>
  )
}

export default NavLinks