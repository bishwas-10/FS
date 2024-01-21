"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { UserCircle } from "lucide-react";
import { X,ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import axios from "axios";



const Subnavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const { isLoading, data } = useQuery({
    queryKey: [`category`],
    queryFn: async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.data;
      console.log(data)
      return data;
    },
  });
  return (
    <div className=" relative flex items-center p-4 w-full h-12 bg-slate-800 text-white">
      <div className="w-content flex flex-row items-center justify-between">
        <Link
          onClick={() => setExpanded(!expanded)}
         href={"#"}
          className=" px-[6px] py-2 text-md flex items-center  font-bold tracking-wide cursor-pointer hover:border-white hover:border-2 duration-75 transition-all"
        >
          <IoMenu />
          All
        </Link>
        <Link
          href="#"
          className="px-[6px] py-2 text-sm md:font-small hover:border-white hover:border-2 transition-all duration-75"
        >
          Today&apos;s Deal
        </Link>
        <Link
          href="#"
          className="px-[6px] py-2 text-sm md:font-small hover:border-white hover:border-2 transition-all duration-75"
        >
          Customer Service
        </Link>
        <Link
          href="#"
          className="px-[6px] py-2  text-sm md:font-small hover:border-white hover:border-2 transition-all  duration-75"
        >
          Sell
        </Link>
        <Link
          href="#"
          className="px-[6px] py-2 text-sm  md:font-small hover:border-white hover:border-2 transition-all  duration-75 "
        >
          Gift Cards
        </Link>
      </div>
      {expanded && (
        <div className="fixed left-0 top-0 z-20  w-screen bg-gray-800 bg-opacity-80 transition-all">
          <div className=" h-screen   w-[370px] bg-white ">
            <X
              onClick={() => setExpanded(!expanded)}
              className="absolute h-8 w-8 top-0 left-96 stroke-white fill-black  cursor-pointer"
            />
            <div className="w-[370px] py-2 flex flex-row items-center justify-center gap-1 bg-slate-600 text-center">
              <UserCircle />
              <Link href="#" className=" text-xl ">
                {" "}
                Hello! Sign In
              </Link>
            </div>
            <div className="p-6  flex  flex-col h-full justify-between text-black">
              <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">What do you want?</p>
              <Link onClick={() => setExpanded(!expanded)} className="font-medium text-gray-600 hover:text-gray-800" href="All">Show all products</Link>
              <div className="flex flex-col ">
                <h1 className="text-lg font-[600]">Shop by Department</h1>
                {data?.map((name:string) => {
                  return <Link
                  key={name}
                  href={name}
                  onClick={() => setExpanded(!expanded)}
                  className="py-2 flex flex-row justify-between text-lg text-gray-600 font-medium capitalize hover:text-gray-800"
                  >
                    {name}<ChevronRight/>
                  </Link>;
                })}
              </div>
              </div>
              <div className="flex flex-col gap-3 mb-6 text-gray-600">
                <p className="text-lg font-[600]">Help and Settings</p>
                <Link className="hover:text-gray-800"  href="#">Your Account</Link>
                <Link className="hover:text-gray-800" href="#">© English</Link>
                <p >United States</p>
                <Link className="hover:text-gray-800" href="#">Choose Language</Link>
                <Link className="hover:text-gray-800" href="#">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subnavbar;
