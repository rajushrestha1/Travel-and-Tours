import Clients from "../Components/Clients"
import Footer from "../Components/Footer"
import PopularDestination from "../Components/PopularDestination"
import Services from "../Components/Services"
import Gallery from "../Pages/Gallery"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
const Home = () => {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center" 
    style={{backgroundImage :"url('/Images/02.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">this is a travel and tour agency</h1>
        <p className="text-lg md:text-2xl text-white mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl bg-blue-500 hover:bg-white hover:text-blue-500 transform transition duration-300 hover:scale-105">Get started</button>
      </div>
    </div>
    <Gallery />
    <About />
    <PopularDestination />
    <Services />
    <Clients />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
