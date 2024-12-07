import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Gallery from "./Pages/Gallery"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
