"use client"
import { Children, useState } from "react";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export function Provider1({ children }: any) {
  const [client] = useState(new QueryClient());
  return (
    <>
      <QueryClientProvider client={client} >
       
        {children}
        
        <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </>
  );
}
