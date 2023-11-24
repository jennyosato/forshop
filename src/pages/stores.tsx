import React, { useState } from "react";
import { GetStaticProps } from "next";
import { client } from "@/lib/client";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import { Product } from "../types";
import Sidebar from "@/components/Sidebar";

interface Props {
  data: [Product];
}

const Stores = ({ data }: Props) => {
  const [toggleNav, setToggleNav] = useState(false);
  const router = useRouter();
  const catQuery = router.query.category;

  const filteredProducts = catQuery
    ? data.filter(
        (product) =>
          product.category.toLowerCase() === catQuery.toString().toLowerCase()
      )
    : data;
  const products = filteredProducts.map((product) => (
    <ProductCard item={product} key={product._id} />
  ));
  return (
    <div>
      <div className="flex">
        <Sidebar onClick={() => setToggleNav(false)} toggle={toggleNav} />
        <section className="w-full md:w-5/6 md:ml-[16.67%] flex flex-col grow px-4">
          <div className="flex justify-between items-center  mt-8">
            <h2 className="text-3xl font-bold text-blue-950 py-2 ">Products</h2>
            <div className="flex items-center gap-2 px-2 md:hidden ">
              <span>Filter</span>
              <button
                onClick={() => setToggleNav((prev) => !prev)}
                className="border px-2 w-28 bg-white rounded text-gray-900"
              >
                {catQuery ? catQuery : "All"}
              </button>
            </div>
          </div>

          <div className="w-full grid grid-cols-fluid sm:gap-6">{products}</div>
        </section>
      </div>
    </div>
  );
};

export default Stores;

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type in ["product", "deals"]]{
     _id,
    description,
    image,
    name,
    price,
    category,
    color, 
    slug,
    "reviews": *[_type == "review" && product._ref == ^._id]{_id, rating, text, user}
}`;
  const data = await client.fetch(query);

  return {
    props: { data },
  };
};


