import { StaticImageData } from 'next/image'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
type CategoriesProps={
    categories:{
        name: string,
        url : StaticImageData,
        alt:string
    }[],
}
const CategoryHome = ({categories}:CategoriesProps) => {
  return (
    <div className="flex flex-wrap">
        {categories.map(({name, url, alt}, index)=>(
            <Link key={name} href={"/"+name } className="m-4 p-2 flex flex-col items-center  grow basis-56 rounded-lg shadow-xl shadow-gray-400 cursor-pointer hover:scale-105 transition-all">
                <p className="text-sm tracking-wide  uppercase">{name}</p>
                <Image 
                src={url}
                alt={alt}
                className="w-70 h-60 rounded-sm"
                />
            </Link>
        ))}
    </div>
  )
}

export default CategoryHome