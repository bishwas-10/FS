
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subnavbar from "../components/Subnavbar";
import BackToTop from "../components/BackToTop";
 export const metadata: Metadata ={
    title: 'category'
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