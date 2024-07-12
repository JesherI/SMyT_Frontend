import Link from 'next/link';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import "./login.css"
import "../global.css"
export default function page() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <Footer></Footer>
    </div>
  );
}
