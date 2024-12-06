import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}>
          
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
