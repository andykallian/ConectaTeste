import React from 'react'
import lata from "../assets/lata.png"

import Button from './Button'


Button

const HeaderContent = () => {
  return (
    <div className='flex items-center gap-[736px]'>
      <div>
        <h1 className='text-[64px] text-white font-artigo font-bold leading-[76px] mb-2'>Aqui um título<br/> de duas linhas</h1>
        <Button/>        
      </div>
      <div>
        <img src={lata} alt="" className='bg-transparent' />
      </div>
    </div>
  )
}

export default HeaderContent