import Footer from '../Components/Footer'
const About = () => {
  return (
    <>
    
    <div>
      <div className="relative h-screen bg-cover bg-center" 
    style={{backgroundImage :"url('/Images/02.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
        
      </div>
    </div>
    <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
                <img src="/Images/02.jpg" alt="About us" 
                className="rounded-lg w-full shadow-md h-auto" />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                    Who we are 
                </h3>
                <p className="text-gray-700 mb-4">we are a passonate travel agency committed to providing the best
                    travel experience for our clients.Our team of decdicated professionals works
                    tirelesly to enxure your trips are sameless and unforgotable.
                </p>

            <h3 className="text-2xl font-bold mb-4">
                Our Mission
            </h3>
            <p className="text-gray-700 mb-4">we are a passonate travel agency committed to providing the best
            travel experience for our clients.
            Our team of decdicated professionals works
                    tirelesly to enxure your trips are sameless and unforgotable.
            </p>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default About
