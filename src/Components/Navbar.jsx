import { useState } from 'react';
import {Link} from 'react-router-dom'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const[isOpen, setIsOpen]=useState(false)
  return (
    <nav className='fixed m-4 top-0 right-0 left-0 z-50 shadow-lg bg-white'>
        <div className='container px-4 flex justify-between items-center h-16'>
      <h3 className='text-2xl font-bold'>Travel</h3>
      <div className='hidden md:flex space-x-4 text-sm font-bold items-center '>
        <Link to="/" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Home</Link>
        <Link to="/gallery" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Gallery</Link>
        <Link to="/contact" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Contact</Link>
        <Link to="/about" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>About</Link>
        <button className='py-2 px-6 border bg-gray-300'>Login</button>
      </div>
      <div className='md:hidden'>
        <button onClick={()=>setIsOpen(!isOpen)}>{isOpen? <MenuOpenIcon />: <MenuIcon />} </button>
      </div>
        </div>
        {isOpen && (
            <div className='md:hidden flex space-y-4 py-4 flex-col bg-whitetext-sm font-bold items-center '>
            <Link to="/" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Home</Link>
            <Link to="/gallery" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Gallery</Link>
            <Link to="/contact" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Contact</Link>
            <Link to="/about" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>About</Link>
            <button className='py-2 px-6 border bg-gray-300'>Login</button>
          </div>

        )}
    </nav>
  );
}

export default Navbar;
