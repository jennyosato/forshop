import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "@/features/cart/CartSlice";
import CartCard from "../components/cartCard";
import { Product } from "../../types";
import { TbCurrencyNaira } from "react-icons/tb";

interface Items extends Product{
  qty: string
}
const Cart = () => {
  const products:Items[] = useSelector(selectProducts);
  
  const productList = products.map((product:Product) => {
    return (
      <div key={product._id}>
        <CartCard product={product} />
      </div>
    );
  });
  
  const total = products.reduce((init, item) => init + parseInt(item.qty) * parseInt(item.price), 0);
  return (
    <div className="min-h-screen md:px-8 py-6 ">
    
    <div className="flex flex-col md:flex-row gap-8 mt-8 ">
      <div className="bg-white w-full md:w-2/3 rounded-md shadow-sm  ">
      <h2 className="text-2xl font-semibold p-3 border-b text-gray-900 ">Your Items</h2>
      {products.length < 1 ? <h2 className="absolute text-center text-gray-900">Your Cart is Empty</h2> : productList}
      </div>

      
     
      <div className=" md:w-1/3 border bg-white rounded-md p-4 h-44 mx-4 text-gray-900">
        <p className="border-b py-2 uppercase font-medium">Order Summary</p>
        <p className="flex items-center justify-between py-2">Subtotal: <span className="flex items-center text-lg font-semibold"><TbCurrencyNaira/>{total}</span> </p>
      
      <button className="w-full text-white font-semibold rounded-sm border bg-slate-600 px-2 py-2">CheckOut</button>
      </div>
      
    </div>
    </div>
  );
};

export default Cart;

