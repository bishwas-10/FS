"use client";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Card from "../_components/Card";
import { ProductsProps } from "../_components/Card";
import { ChevronRight } from "lucide-react";
import Loading from "../_components/Loading";
const Page = ({ params }: { params: { Category: string } }) => {
  const CATEGORY = params.Category;

  const fetchCategory = async (CATEGORY: string) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${CATEGORY}`
    );
    const data = await response.data;

    return data;
  };
  const { isLoading, data } = useQuery({
    queryKey: [`category ${CATEGORY}`],
    queryFn: () => fetchCategory(CATEGORY),
  });
  if (isLoading) {
    return <Loading/>;
  }
  return (
    <div className="p-4 my-2 flex flex-wrap items-center justify-center gap-4">
       <div className="w-full">
        <div className="mt-6 flex flex-row gap-2 text-lg capitalize">
          <Link href="/">home</Link>
          <ChevronRight />
          <p>{CATEGORY}</p>
          
          
        </div>
      </div>
      {data?.map((data: ProductsProps) => {
        return (
          <Link key={data.id} href={"/product/" + data.id}>
            {" "}
            <Card product={data} key={data.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
