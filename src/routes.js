import { Routes, Route } from "react-router-dom"
import {IDK} from "./components/idk.jsx"
import { HomePage } from "./pages/HomePage.jsx"


function Routes() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/idk" element={ <IDK /> } />
      </Routes>
    </div>
  )
}

export default Routes