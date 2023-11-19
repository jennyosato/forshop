import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectProducts } from "@/features/cart/CartSlice";
import Image from "next/image";
import { SessionType } from "../../types";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { data: session }: SessionType | any = useSession();
  const firstName: string[] = session?.user?.name.split(" ");
  const cartValue = useSelector(selectProducts);

  return (
    <header className="shadow-md flex justify-between items-center bg-gray-900 fixed p-4 w-full z-50 gap-3">
      <div className="text-2xl border-4 italic text-white">ForStores</div>
      <div className="hidden sm:flex">
      <NavLinks />
      </div>
      
      <div className="flex gap-4 font-bold items-center text-white ">
        <Link href="/Cart" className="flex items-center">
          <BsCart className="" />
          <sup className="-ml-1 w-4 h-4 flex justify-center items-center rounded-full bg-white text-gray-900">
            {cartValue.length}
          </sup>
        </Link>

        {session ? (
          <div className="flex items-center gap-2 group relative">
           <div className="w-6 h-6 relative">
           <Image
              src={session?.user?.image}
              fill
              alt={session?.user?.name}
              className="object-cover rounded-full"
            />
           </div>
           
            <p className="font-thin flex items-center gap-2">
              {firstName[0]} <MdKeyboardArrowDown />
            </p>
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
    </header>
  );
};

export default Navbar;
