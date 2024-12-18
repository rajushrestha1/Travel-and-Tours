import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Footer from '../Components/Footer';
const Contact = () => {
  return (
    <>
    <div>
      <div>
      {/* <div className="relative h-screen bg-cover bg-center" 
    style={{backgroundImage :"url('/Images/02.jpg')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Me</h1>
      </div>
    </div> */}
    <h1 className="text-3xl font-bold text-center mb-8">
       Contact
        </h1>
    <div className='bg-gray-800 text-white p-6'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4'>
        <div className=''>
          <h1 className='text-xl font-bold mb-4'>
            Contact Details
          </h1>
          <div className='flex items-center mb-4'>
            <EmailIcon className='text-blue-400 mr-2'/>
            <p>shrestharaju010101@gmail.com</p>
          </div>
          <div className='flex items-center mb-4'>
            <ContactPhoneIcon className='text-blue-400 mr-2'/>
            <p>+977-9825821351</p>
          </div>
          <div className='flex items-center mb-4'>
            <LocationOnIcon className='text-blue-400 mr-2'/>
            <p>Kathmandu,Nepal</p>
          </div>
        </div>
        <div>
          <h3>Get in touch</h3>
          <form
            action="https://getform.io/f/adryxlga"
            method="POST"
            className="flex flex-col w-full md:w-1/2 group relative"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none z-10"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none z-10"
            />
            <textarea
              name="message"
              placeholder="Enter your message...."
              rows="5"
              required
              className="p-2 bg-transparent border-2
               rounded-md text-white focus:outline-none z-10"
            ></textarea>

            <button className="text-white bg-blue-500
             hover:scale-110 duration-300 px-5 py-1 m-3
              mx-auto flex items-center rounded-full  z-10
               hover:bg-white hover:text-blue-600 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>
    {/* <Footer className='border-t border-gray-600' /> */}
    </>
  )
}

export default Contact
