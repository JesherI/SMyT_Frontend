import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import Link from 'next/link';
import "../global.css"
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  )
}
