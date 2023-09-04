import React from 'react';
import Navbar from './Navbar';
import HeaderContent from '../components/HeaderContent';

const Header = () => {
  return (
    <div className="flex items-center bg-header-background h-[745px] bg-cover bg-no-repeat bg-center">
      <div className='w-4/5 m-auto'>
        <Navbar/>
        <HeaderContent/>
      </div>
    </div>
  );
};

export default Header;