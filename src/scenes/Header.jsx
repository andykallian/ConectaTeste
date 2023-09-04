import React from 'react';

import lata from "../assets/lata.png"
import facebookLogo from "../assets/facebook-logo.png"
import instagramLogo from "../assets/instagram-logo.png" 
import ConectaLogo from "../assets/marca-conecta.png" 


import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Button from '../components/Button';

const Header = () => {
  return (
    <Router>

      <div className="flex flex-col items-center bg-header-background h-[745px] bg-cover bg-no-repeat bg-center">

        <div className='w-4/5 sm:w-11/12'>

          <div className='flex justify-between '>
            <Link to="#" className=''>
              <img src={ConectaLogo} alt="" />
            </Link>
            <div className='flex items-center justify-center gap-5'>
              <Link to='#'>
                <img src={facebookLogo} alt="" className='w-[18px] h-[18px] rounded'/>
              </Link>
              <Link to='#'>
                <img src={instagramLogo} alt="" className='w-[18px] h-[18px] rounded' />
              </Link>
            </div>
          </div>

          

          <div className='flex items-center justify-between sm:flex-col-reverse md:flex-row '>

              <div className='sm:w-11/12 md:w-[458px] md:h-[150px]'>
                <h1 className='sm:text-[38px] sm:text-center md:text-[48px] lg:text-[64px] text-white font-vollkorn font-bold leading-[76px] mb-4'>Aqui um título de duas linhas</h1>
                <Button
                  buttonClass={'bg-green-500 sm:w-full md:w-[188px]'}
                />        
              </div>

              <div>
                <img src={lata} alt="" className='sm:h-[372px] sm:w-[212px] md:h-[522px] md:w-[296px] lg:w[326px] lg:h-[574px]' />
              </div>
          </div>

        </div>

      </div>

    </Router>
  );
};

export default Header;