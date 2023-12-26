"use client";
import React, { useState } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { X, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart, setCart } from "../store/cartSlice";
import { ICartData } from "../store/cartSlice";
import Image from "next/image";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface RootState {
  cart: {
    products: ICartData[];
    totalQuantity: number;
    totalPrice: number;
  };
}

const Cart = () => {
  const [expanded, setExpanded] = useState(false);

  const cartData: { products: ICartData[] } = useSelector(
    (state: RootState) => state.cart
  );

  const { totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();
  const addToCartHandler = (
    id: number,
    title: string,
    price: number,
    image: string,
    quantity: number,
    totalPrice: number
  ) => {
    if (title && id && price) {
      const cartItem: ICartData = {
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: quantity,
        totalPrice: totalPrice ?? 0,
      };

      dispatch(addToCart(cartItem));
    }
  };
  const removeFromCartHandler = (id: number) => {
    id && dispatch(removeFromCart(id));
  };
  const checkOutHandler=()=>{
    dispatch(setCart([]));
    toast.success("Checkout successfull", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    setExpanded(!expanded);
  }
  return (
    <div>
      <div className="relative">
        <span className="text-xl md:text-2xl cursor-pointer">
          <PiShoppingCartSimpleBold onClick={() => setExpanded(!expanded)} />
        </span>
        <span className=" absolute -top-3 -right-3 w-full px-1 flex items-center justify-center rounded-full bg-red-400 cursor-pointer">
          {totalQuantity}
        </span>
      </div>
      {expanded && (
        <div className="fixed left-0 top-0 z-20 h-screen  w-screen bg-gray-800 bg-opacity-80 transition-all text-black">
          <div className="p-2 h-screen absolute  right-4  w-[370px] bg-white ">
            <div className=" w-[350px] px-6 py-2 border-b-2 border-gray-400 flex flex-row justify-between">
              <p className="font-medium">Cart</p>
              <X
                onClick={() => setExpanded(!expanded)}
                className="w-5 h-5 cursor-pointer text-black"
              />
            </div>
            <div className=" p-3 flex flex-col gap-3">
              {cartData?.products.map((product) => (
                <div
                  key={product.id}
                  className="h-max flex flex-row p-3 gap-1 border-2 border-gray-400"
                >
                  <div className="flex  flex-col items-center justify-center w-2/5 ">
                    <Image
                    height={80}
                    width={80}
                      src={product.image}
                      alt={product.title}
                      className=" object-contain border bg-white border-gray-500 p-4 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col  items-start gap-3 justify-between  w-3/4  ">
                    <p className="text-sm font-semibold text-gray-700">
                      {product.title}
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-md font-semibold">$ {product.price}</p>
                      <div className="flex flex-row items-center gap-2 ">
                        <button
                          onClick={() =>
                            product.id && removeFromCartHandler(product.id)
                          }
                          className="px-2 border-2 border-gray-500"
                        >
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          onClick={() =>
                            addToCartHandler(
                              product.id,
                              product.title,
                              product.price,
                              product.image,

                              1,
                              product.totalPrice
                            )
                          }
                          className="px-2 border-2 border-gray-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="fixed bottom-0 w-[350px] mb-4 border-t-2 border-gray-400">
              <div className=" border-b-2 p-2 border-gray-400">
                <div className=" flex flex-row justify-between ">
                  <p>Items</p>
                  <p>{totalQuantity}</p>
                </div>
                <div className=" flex flex-row justify-between ">
                  <p>total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={checkOutHandler} className="p-2 mt-6 w-full rounded-md text-center text-white bg-green-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
};

export default Cart;
