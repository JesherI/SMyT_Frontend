import { FunctionComponent } from "react"
import Menu from "./components/menu"
import Homepage from "./components/homepage"
import Header from "./components/header"
import Footer from "./components/footer"
import Login from "./components/login/login"
import Temp from "./components/temp"
export default function Home() {
  return (
    <div>
      <Temp></Temp>
      <Login></Login>
    </div>
  )
}
