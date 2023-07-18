import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client, urlFor } from "@/lib/client";
import { TbCurrencyNaira } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/CartSlice";
import Rating from "@/components/rating";
import Link from "next/link";
import StarRating from "@/components/starRating";
import toast from 'react-hot-toast'
import Image from "next/image";
import { Product } from "../../types";


interface Px{
  data: Product,
  products: [Product]
}

const Item = ({ data, products } : Px) => {

  const rating = data.reviews
        .reduce((init, item) => init + item.rating / data.reviews.length, 0)
        .toFixed(1)
    

  const dispatch = useDispatch();
  const AddToCart = (i:Product) => {
    let x = { ...i, qty: 1 };
    
    dispatch(addToCart(x));
    toast.success(`Added ${i.name} to cart`, {
      position: 'top-right',
      iconTheme: {
        primary: '#111827',
        secondary: 'white'
      }

    })
  };
  const sameCategoryProduct = products.map((product:Product) => {
    return (
      <Link 
        href={product.slug.current}
        key={product._id}
        className="h-full w-64 hover:scale-110 transition ease-in-out 1s"
      >
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          className="h-full w-full"
          width={300}
          height={300}
        />
      </Link>
    );
  });
  const reviewList = data.reviews.map((rev) => {
    return (
      <div key={rev._id} className="w-full border-b-2 p-2">
        <div className="flex justify-between text-sm ">
          <div className="flex items-center gap-1">
            ({rev.rating})<StarRating rating={rev.rating} />
          </div>
          <p>{rev.user}</p>
        </div>

        <p className="italic px-3 font-medium">{rev.text}</p>
      </div>
    );
  });
  return (
    <div className="min-h-screen ">
      <div className="w-full bg-white py-6 px-2">
        <h2 className="text-2xl text-gray-900 font-semibold">{data.category}</h2>
        
      </div>
      <div className="flex flex-col md:flex-row mx-auto border h-full shadow-lg w-11/12 mt-8">
        <div className=" w-full md:w-1/2 h-full bg-white p-8">
          <Image
            src={urlFor(data.image).url()}
            alt={data.name}
            width={400}
            height={400}
            className="w-full h-full border-8 "
          />
        </div>
        <div className="w-full md:w-1/2 bg-white flex flex-col p-4 items-left text-gray-900">
          <h2 className="text-5xl font-semibold py-2 border-b">{data.name}</h2>
          <div className="flex items-center gap-1 p-1">
            <StarRating rating={rating} />{" "}
            <span className="text-sm text-gray-900">
              ({data.reviews.length})reviews
            </span>{" "}
          </div>
          <p className="flex items-center text-2xl font-semibold py-2 ">
            Price: <TbCurrencyNaira className="text-3xl" />
            {data.price}{" "}
          </p>
          <p className="text-xl font-medium">Color: {data.color}</p>
          <p className="text-sm italic py-2 border-b">
            Category: {data.category}
          </p>

          <p className="py-2 border-b">
            <span className="font-semibold">Description:</span>{" "}
            {data.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum vitae qui distinctio natus harum amet
            facere eius consequuntur. Iusto recusandae accusamus dolorem facere
            praesentium. Voluptatibus, libero. Ipsam iusto necessitatibus quis
            possimus ducimus eaque nulla, quo cumque a reprehenderit nostrum
            accusantium.
          </p>
          <div className="py-4 flex gap-4">
            <button
              onClick={() => AddToCart(data)}
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded w-1/2"
            >
              Add to Cart
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 bg-gray-100 p-2">
            <Image
              src={urlFor(data.image).url()}
              alt={data.name}
              width={400}
              height={400}
              className="w-full h-full "
            />
            <Image
              src={urlFor(data.image).url()}
              alt={data.name}
              width={400}
              height={400}
              className="w-full h-full "
            />
            <Image
              src={urlFor(data.image).url()}
              alt={data.name}
              width={400}
              height={400}
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-11/12 py-4 mx-auto gap-4 text-gray-900">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Top Reviews</h2>
          {reviewList}
        </div>
        <div className="bg-white w-full">
          <h2 className="text-xl font-semibold text-center">Write a review</h2>
          <Rating id={data} />
        </div>
      </div>
      <div className="w-11/12 mx-auto bg-white h-72 rounded shadow text-gray-900 ">
        <h2 className="text-3xl text-center font-bold py-4 px-2">
          Other Products in {data.category} category
        </h2>
        <div className="relative overflow-x-hidden w-full h-full py-4">
        <div className="tracks transition ease-in-out flex h-44 gap-4 p-4 justify-center mt-8 absolute whitespace-nowrap animate-marquee w-[150%] will-change-transform">{sameCategoryProduct}</div>
        </div>
        
      </div>
    </div>
  );
};

export default Item;
export const getStaticPaths: GetStaticPaths = async () => {
  const query = '*[_type in ["product", "deals"]]';
  const data = await client.fetch(query);
  const item = data.map((i:Product) => ({
    params: { slug: i.slug.current},
  }));
  return {
    paths: item,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params: { slug } }:any) => {
  const query = `*[_type in ["product","deals"] && slug.current == '${slug}'][0]{
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
  const categoryQuery = `*[_type=="product" && category == '${data.category}']`;
  const products = await client.fetch(categoryQuery);
  return {
    props: { data, products }, revalidate: 60
  };
};

