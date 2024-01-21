
import type { Metadata } from "next";
import Navbar from "@/app/_components/Navbar";
import Subnavbar from "@/app/_components/Subnavbar";
import Footer from "@/app/_components/Footer";
import BackToTop from "@/app/_components/BackToTop";
  const metadata: Metadata ={
    title: 'store'
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <main>
      <Navbar/>
     
        {children}
        <BackToTop/>
        <Footer/>
     </main>
    )
  } 