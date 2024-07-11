import { FunctionComponent } from "react"
import Homepage from "./components/homepage"
import Header from "./components/header"
import Footer from "./components/footer"
import Login from "./components/login/login"
import Temp from "./components/temp"
import Menu from "./components/menu/Menu"
export default function Home() {
  return (
    <div>
      <Temp></Temp>
      <Login></Login>
      <Menu></Menu>
    </div>
  )
}
