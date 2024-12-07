import Footer from "../Components/Footer";

const Gallery = () => {
    const images=[
        '/Images/gal1.jpg',
        '/Images/gal2.jpg',
        '/Images/gal3.jpg',
        '/Images/gal4.jpg',
        '/Images/gal5.webp',
        '/Images/gal6.webp',

    ];
  return (
    <>

    <div>
        <div>
      <div className="relative h-screen bg-cover bg-center" 
    style={{backgroundImage :"url('/Images/hero.png')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Explore Our Gallery</h1>
        
      </div>
    </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 px-4">
            {images.map(image=>(
                <div key={image} className="bg-white  shadow-md overflow-hidden cursor-pointer">
                    <img src={image} alt=" " className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"/>
                </div>
            ))}
        </div>
    </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Gallery