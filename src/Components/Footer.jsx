import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4">

      <div>
        <h2 className="font-bold text-2xl mb-4">Travel</h2>
        <p className="mb-4">hey its me raju shrestha</p>
      </div>
      <div className="flex flex-col md:items-center">
        <h2 className="text-lg font-semibold">Quick Links</h2>
        <div className="flex flex-col mt-3 space-y-2 cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
        <div className="flex space-x-4 mb-4 cursor-pointer">
        <a href='https://github.com/rajushrestha1'
                className='text-xl  text-gray-950 hover:text-gray-950'
                target='_blank'
                rel='noopner noreferrer'
                >
                    <GitHubIcon />
                </a>
                    <a href='https://www.linkedin.com/in/raju-shrestha-6b5070245/'
                className='text-xl text-blue-600 hover:text-blue-700 '
                target='_blank'
                rel='noopner noreferrer'
                >
                <LinkedInIcon />
                </a>
                <a href='https://www.facebook.com/raju.stha.123829'
                className='text-xl text-blue-600 hover:text-blue-700'
                target='_blank'
                rel='noopner noreferrer'
                >
                <FacebookIcon />
                </a>
                <a href='https://www.instagram.com/rajushrestha67/'
                className='text-xl text-pink-600 hover:text-pink-700  '
                target='_blank'
                rel='noopner noreferrer'
                >
                <InstagramIcon />
                </a>
        </div>
        <form className="flex items-center justify-center mt-8">
            <input type="email" placeholder="Enter Your Email" required  
            className="rounded-l-lg p-2 w-full bg-gray-800 border border-gray-600"/>
            <button className="bg-blue-800 text-white px-4 py-2 
            border border-gray-600 rounded-r-lg h-11 hover:bg-blue-600">Submit</button>
        </form>
      </div>
        </div>
        <div className=" mt-8 justify-center border-t border-gray-700 pt-4">
        <p> @ 2024 Travel Agency. All rights reserved. </p>
        <div className=" flex justify-end space-x-4 mt-4 md:mt-0 cursor-pointer">
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of services</Link>
        </div>
        </div>
    </div>
  )
}

export default Footer
