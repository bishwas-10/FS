"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight, Circle } from "lucide-react";


type ImageSliderProps = {
  images: {
    url: StaticImageData;
    alt: string;
  }[];
};
const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  return (
    <section className="w-[860px] h-full px-4 relative mt-4">
      <div className="w-full h-full flex overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <Image
            src={url}
            alt={alt}
            key={alt}
            className="w-full h-full transition-all rounded-lg"
            style={{ translate: `${-100 * imageIndex}% `, animation: "translate 1.5s ease-in-out infinite",  } 
          
          }
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="absolute top-0 bottom-0 left-4 rounded-tl-lg rounded-bl-lg hover:bg-black hover:opacity-20 transition-all"
      >
        <ArrowBigLeft className="stroke-white fill-black" />
      </button>
      <button
        onClick={showNextImage}
        className="absolute top-0 bottom-0 right-4 rounded-tr-lg rounded-br-lg hover:bg-black hover:opacity-20 transition-all"
      >
        <ArrowBigRight className="stroke-white fill-black " />
      </button>
      <div className="flex flex-row absolute bottom-2 left-1/2 -translate-x-1/2 gap-1">
        {images.map((_, index) => (
          <button key={index} onClick={()=>setImageIndex(index)} className=" cursor-pointer hover:scale-125 transition-all">
            {index === imageIndex ? (
              <Circle  className="  w-4 h-4 stroke-white fill-white" />
            ) : (
              <Circle className="  w-4 h-4 stroke-white fill-black/20" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
