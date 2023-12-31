import lataGuarana from '../assets/lata-guarana.png'

import React from 'react'
import Button from './Button'

const TryOnComponent = () => {
  return (
    <div className='bg-green-500 flex items-center justify-evenly sm:flex-col-reverse md:flex-row sm:h-[374px] md:h-[290px] sm:-z-0 md:-z-10 relative'>

      <div className='flex gap-5'>
        <img src={lataGuarana} alt="" className='sm:hidden md:block h-[177px] rotate-45' />
        <img src={lataGuarana} alt=""  className='sm:hidden md:block h-[343px] w-[195px] mt-28 -rotate-12'/>
      </div>
      
      <div className='flex flex-col gap-3 sm:h-[145px] md:h-auto items-center'>
        <h2 className='font-vollkorn text-[24px] font-bold leading-[31px]'>Quer experimentar?</h2>
        <Button
          buttonClass={'bg-black text-white cursor-pointer'}
        />
      </div>

      <div className='sm:h-[262px] sm:w-[149px] sm:rotate-0 h-[503px] w-[286px] bottom rotate-12 top-0 sm:-translate-y-20 md:-translate-y-0'>
        <img src={lataGuarana} alt=""/>
      </div>

    </div>
  )
}

export default TryOnComponent