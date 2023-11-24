"use client";
import React, { useState } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMinecartLoaded } from "react-icons/bs";
import Cart from "./Cart";
import { ProductsProps } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const fetchAllProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = await response.data;

  return data;
};
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showBox, setShowBox] = useState(false);
  const router = useRouter()
  const { data } = useQuery<any[]>({
    queryKey: ["all-products"],
    queryFn: fetchAllProducts,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    setSearchQuery(query);
  };
const handleSearchClick=(id:number|undefined)=>{
  router.push(`/product/${id}`)
  setShowBox(false);
}
  const searchProducts = data?.filter((product) => {
    return searchQuery === ""
      ? product
      : product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <div className="w-full h-full p-4 flex flex-row items-center justify-between  bg-slate-700 text-white">
      <div className="flex items-center" id="header-left">
        <a
          href="/"
          className="flex flex-row items-center text-lg md:text-xl font-semibold tracking-wider text-slate-100"
        >
          Fake
          <span className="text-red-500">Store</span>
       
        <span className="text-xl ">
          <BsMinecartLoaded />
        </span> </a>
      </div>
      <div className="relative flex flex-row w-60 md:w-96" id="header-center">
        <input
          onFocus={() => setShowBox(true)}
          onChange={handleInputChange}
          onBlur={()=>setTimeout(()=>setShowBox(false),200)}
          type="text"
          placeholder="search for items"
          className="px-4 py-1 w-full text-sm focus:outline-none text-black rounded-l"
        />
        <button className="p-2 text-lg bg-yellow-600 text-black rounded-r ">
          <AiOutlineSearch />
        </button>
        {showBox &&
        <div className="absolute flex flex-col gap-2   top-12 -left-14 z-10 w-[350px] md:w-[600px] bg-white  h-max">
          
           { searchProducts?.slice(0, 4)?.map((item: ProductsProps) => {
              return (
                <ul key={item.id}>
                <li
                  onFocus={()=>setShowBox(true)}
                  onClick={()=>handleSearchClick(item.id) }
                  
                  className="flex flex-row gap-3 cursor-pointer text-black border-2 border-gray-300 p-2"
                >
                  {" "}
                  <Image
                  height={40}
                  width={40}
                    src={item.image}
                    alt="product-img"
                    className="h-10 w-10"
                  />
                  <p className="line-clamp-2 text-sm">{item.title}</p>{" "}
                </li>
                </ul>
              );
            })}
        </div>}
      </div>
      <div id="header-right">
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
