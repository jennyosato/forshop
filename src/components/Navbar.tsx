import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import {MdKeyboardArrowDown} from 'react-icons/md'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { selectProducts } from "@/features/cart/CartSlice";
import Image from "next/image";
import Favorite from "./favorite";
import { SessionType } from "../../types";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleFavoriteList = () => {
    setToggle((prev) => !prev);
  };
  const toggleMenuItems = () => {
    setToggleMenu((prev) => !prev);
  };

  const { data: session }: SessionType | any = useSession();

  const firstName: string[] = session?.user?.name.split(" ");

  const cartValue = useSelector(selectProducts);

  return (
    <header className="shadow-md flex justify-between bg-gray-900 py-4 px-4 fixed w-full z-50 gap-3">
      <div className="text-2xl border-4 italic text-white ">ForStores</div>

      <nav
        className={
          toggleMenu
            ? "flex absolute w-full left-0 top-12 bg-gray-900 justify-center "
            : "hidden md:flex w-full md:w-1/2 justify-center items-center"
        }
      >
        <ul className="flex py-2 px-4 justify-center">
          <li>
            <Link
              className="hover:font-bold px-2 font-semibold text-white"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold px-2 font-semibold text-white"
              href="/stores"
            >
              Store
            </Link>
          </li>
          <li
            className="hover:font-bold px-2 font-semibold text-white cursor-pointer"
            onClick={toggleFavoriteList}
          >
            Wishlist
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 font-bold items-center text-white">
        <RxHamburgerMenu className="md:hidden" onClick={toggleMenuItems} />

        <Link href="/Cart" className="flex items-center">
          <BsCart className="" />
          <sup className="-ml-1 w-4 h-4 flex justify-center items-center rounded-full bg-white text-gray-900">
            {cartValue.length}
          </sup>
        </Link>

        {session ? (
          <div className="flex items-center gap-2 group relative">
            <Image
              src={session?.user?.image}
              width={300}
              height={300}
              alt={session?.user?.name}
              className="w-6 h-6 rounded-full"
            />
            <p className="font-thin flex items-center gap-2">{firstName[0]} <MdKeyboardArrowDown/></p>
            <button
            className=" hidden group-hover:block absolute top-6 right-0 bg-gray-900 w-20 h-10 rounded-sm font-medium"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
          </div>
        ) : (
          <button
            className="bg-gray-900 w-20 h-10 rounded-sm font-medium"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>

      {toggle && <Favorite closeWishlist={() => setToggle(false)} />}
    </header>
  );
};

export default Navbar;
