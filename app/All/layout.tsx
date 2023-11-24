
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subnavbar from "../components/Subnavbar";
import BackToTop from "../components/BackToTop";
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