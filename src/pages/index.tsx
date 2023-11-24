import { ReactElement } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import Topbanner from "@/components/Topbanner";
import { client, urlFor } from "@/lib/client";
import Layout from "@/components/Layout";
import { TbCurrencyNaira } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import { Product } from "../types";

interface Props {
  data: [Product];
}

export default function Home({ data }: Props) {
  const dispatch = useDispatch();
  const AddToCart = (i: Product) => {
    let x = { ...i, qty: 1 };
    dispatch(addToCart(x));
    toast.success(`Added ${i.name} to Cart`, {
      position: "top-right",
      iconTheme: {
        primary: "#111827",
        secondary: "white",
      },
    });
  };

  const products = data.map((product) => (
    <div key={product._id} className=" bg-white border  p-2 rounded-md">
      <Link href={product.slug.current} className="group">
        <div className="group">
          <div className="overflow-hidden">
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-1/2 hover:shadow group-hover:scale-110 transition ease-in-out 2sec"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {product.name}
            </h2>
            <p className="flex items-center font-bold text-gray-600">
              <TbCurrencyNaira />
              {product.price}
            </p>
          </div>
        </div>
      </Link>
      <div className="py-4">
        <button
          className="rounded-sm hover:bg-gray-950 hover:shadow-md  bg-gray-900 px-4 py-2 text-white font-medium outline-none border-none"
          onClick={() => AddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <Topbanner />

      <div className="h-32 w-10/12 md:w-1/2 m-auto bg-white flex flex-col justify-center items-center gap-1 shadow my-4 rounded-lg ">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 w-9/12 outline-0 rounded text-gray-900 "
        />

        <div>
          <button className=" border-0 shadow-lg px-8 py-2 bg-gray-700 hover:bg-white hover:text-gray-500 rounded font-bold text-white">
            Search
          </button>
        </div>
      </div>

      <h2 className="text-4xl font-bold px-4 text-center py-2 bg-white text-gray-900">
        Top deals
      </h2>
      <div className="w-10/12 m-auto grid grid-cols-fluids gap-4 my-4 ">
        {products}
      </div>

      <section className="grid grid-cols-fluids p-4 gap-4">
        <Link
          href="/stores?category=electronics"
          className="group overflow-hidden"
        >
          <div className="flex items-center justify-center group-hover:scale-110 transition ease-in-out 1s bg-[url('/g.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
            <h2 className="text-white text-2xl font-semibold">Electronics</h2>
          </div>
        </Link>
        <Link
          href="/stores?category=furniture"
          className="group overflow-hidden"
        >
          <div className="flex items-center justify-center group-hover:scale-110 transition ease-in-out 1s bg-[url('/h.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
            <h2 className="text-white text-2xl font-semibold">Furniture</h2>
          </div>
        </Link>
        <Link href="/stores?category=kitchen" className="group overflow-hidden">
          <div className="flex items-center justify-center group-hover:scale-110 transition ease-in-out 1s bg-[url('/d.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
            <h2 className="text-white text-2xl font-semibold">Kitchen</h2>
          </div>
        </Link>
        <Link
          href="/stores?category=beddings"
          className="group overflow-hidden"
        >
          <div className="flex items-center justify-center group-hover:scale-110 transition ease-in-out 1s bg-[url('/a.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
            <h2 className="text-white text-2xl font-semibold">Beddings</h2>
          </div>
        </Link>
        <Link
          href="/stores?category=curtains"
          className="group overflow-hidden"
        >
          <div className="flex items-center justify-center group-hover:scale-110 transition ease-in-out 1s bg-[url('/i.jpeg')] bg-center bg-cover bg-no-repeat bg-black/50 bg-blend-overlay h-44">
            <h2 className="text-white text-2xl font-semibold">Curtains</h2>
          </div>
        </Link>
      </section>
      <section>
        <div className="text-blue-950 h-72 m-4 bg-[url('/banner.jpg')] bg-center bg-cover bg-no-repeat bg-blend-overlay bg-white/50 flex flex-col justify-center items-center gap-2 shadow my-4 rounded-lg  ">
          <h2 className="text-xl font-semibold ">
            Get notified of our new product
          </h2>

          <input
            type="email"
            placeholder="Enter email"
            className="border p-3 w-9/12 md:w-1/2 outline-0 rounded "
          />

          <div>
            <button
              type="submit"
              className=" border-0 shadow-lg px-8 py-2 bg-gray-700 hover:bg-white hover:text-gray-500 rounded font-bold text-white"
            >
              Join
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const query = '*[_type=="deals"]';

  const data = await client.fetch(query);

  return {
    props: { data },
  };
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
