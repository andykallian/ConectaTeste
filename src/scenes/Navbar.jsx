import React from 'react'
import facebookLogo from "../assets/facebook-logo.png"
import instagramLogo from "../assets/instagram-logo.png" 
import ConectaLogo from "../assets/marca-conecta.png" 


import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
      <Router>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <Link to="#" className=''>
              <img src={ConectaLogo} alt="" />
            </Link>
          </div>
          <div className='flex flex-row justify-center gap-5'>
            <Link to='#'>
              <img src={facebookLogo} alt="" className='w-[18px] h-[18px] rounded'/>
            </Link>
            <Link to='#'>
              <img src={instagramLogo} alt="" className='w-[18px] h-[18px] rounded' />
            </Link>
          </div>
        </div>
      </Router>
    </>
  )
}

export default Navbar