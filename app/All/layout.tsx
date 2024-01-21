
import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Subnavbar from "../_components/Subnavbar";
import BackToTop from "../_components/BackToTop";
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
      <Subnavbar/>
        {children}
        <BackToTop/>
        <Footer/>
     </main>
    )
  } 