"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import  Link from 'next/link';
import Card from "../components/Card";
import Subnavbar from "../components/Subnavbar";
import { ProductsProps } from "../components/Card";
import { setAllProducts, setSelectedProduct } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from "../components/Loading";
const fetchAllProducts=async()=>{
    
    const response= await axios.get('https://fakestoreapi.com/products');
    const data= await response.data;
    
    return data;
}

export default function Store(){
   const {isLoading, data}= useQuery<any[]>(
    {
        queryKey: ["all-products"],
        queryFn: fetchAllProducts,
        staleTime:30000
    }
    );
   if(isLoading){
    return <Loading/>;
   }
   const dispatch= useDispatch();
   return <div className="p-4 my-12 flex flex-wrap items-center justify-center gap-4">
        {data?.map((product:ProductsProps)=>{
            return <Link key={product.id} href={'/product/'+product.id}
            onClick={()=>dispatch(setSelectedProduct(product))}
            ><Card product={product} /></Link>
        })}
    </div>
}