
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Subnavbar from "@/app/components/Subnavbar";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";
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