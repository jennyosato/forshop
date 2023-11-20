import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

const list = [
    {
        title: 'All',
        route: '/stores'
    },
    {
        title: 'Furniture',
        route: "/stores?category=furniture"
    },
    {
        title: 'Electronics',
        route: "/stores?category=electronics"
    },
    {
        title: 'Kitchen Appliances',
        route: "/stores?category=kitchen"
    },
    {
        title: 'Beddings',
        route:"/stores?category=beddings"
    },
    {
        title: 'Curtains',
        route: "/stores?category=curtains"
    }
]
const Sidebar = (props: any) => {
   const router = useRouter()
//    console.log(router)
  return (
    <nav
      onClick={props.onClick}
      className={clsx(
        !props.toggle && "hidden",
        "p-2 bg-white z-40 top-[72px] border absolute flex shrink-0 right-0 sm:w-1/6 md:fixed md:left-0 md:top-16 md:h-screen md:block"
      )}
    >
      <ul
        className="p-2 font-semibold text-blue-950 sm:px-2"
      >
        {list.map(link => (
            <li key={link.title} className={`rounded-r-full hover:bg-blue-900/10 py-2 px-3 ${router.asPath == link.route && 'bg-blue-900/20 rounded-r-full border-l-2 border-gray-900'}`}>
                <Link href={link.route} className=" leading-8 tracking-wide block">{link.title}</Link>
            </li>
        ) )}
       
      </ul>
    </nav>
  );
};

export default Sidebar;
