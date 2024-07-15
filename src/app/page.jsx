import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import "./style.css"
import "./global.css"
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <main className="body">
        <div className="title">
          <h1>Secretaría de Movilidad y Transporte</h1>
        </div>
        <div className="container">
          <div className="texto">
            <h1>hola</h1>
          </div>
          <div className="imagen">
            <h1>hola</h1>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
